import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from 'react-native';

interface FlatListHeaderComponentProps {
  colorTheme: 'dark' | 'light';
}

function FlatListHeaderComponent({ colorTheme }: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={colorTheme === 'light' ? styles.header : styles.headerDark}>
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  colorTheme: 'dark' | 'light';
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  colorTheme,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={
              item.done
                ? colorTheme === 'light'
                  ? styles.taskButtonDone
                  : styles.taskButtonDoneDark
                : styles.taskButton
            }
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                  ? colorTheme === 'light'
                    ? styles.taskMarkerDone
                    : styles.taskMarkerDoneDark
                  : colorTheme === 'light'
                  ? styles.taskMarker
                  : styles.taskMarkerDark
              }
            />
            <Text
              style={
                item.done
                  ? colorTheme === 'light'
                    ? styles.taskTextDone
                    : styles.taskTextDoneDark
                  : colorTheme === 'light'
                  ? styles.taskText
                  : styles.taskTextDark
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent colorTheme={colorTheme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  headerDark: {
    color: '#565bff',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10,
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565bff',
    marginRight: 10,
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#e1e1e6',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(33, 33, 54, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10,
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#565bff',
    marginRight: 10,
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through',
  },
  taskTextDoneDark: {
    color: 'rgba(225, 225, 230, 0.6)',
    textDecorationLine: 'line-through',
  },
});
