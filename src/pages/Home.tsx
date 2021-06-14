import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

type colorThemes = 'light' | 'dark';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [colorTheme, setColorTheme] = useState<colorThemes>('light');

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) {
      return;
    }

    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((current) => [...current, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks((current) =>
      current.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }

        return task;
      })
    );
  }

  function handleChangeTheme() {
    if (colorTheme === 'dark') {
      setColorTheme('light');

      return;
    }

    setColorTheme('dark');
  }

  function handleRemoveTask(id: number) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return (
    <View
      style={colorTheme === 'light' ? styles.container : styles.ContainerDark}
    >
      <Header changeColorTheme={handleChangeTheme} colorTheme={colorTheme} />

      <TodoInput addTask={handleAddTask} colorTheme={colorTheme} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        colorTheme={colorTheme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  ContainerDark: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
