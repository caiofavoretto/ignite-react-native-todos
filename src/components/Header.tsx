import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface HeaderProps {
  changeColorTheme(): void;
  colorTheme: 'dark' | 'light';
}

export function Header({ changeColorTheme, colorTheme }: HeaderProps) {
  return (
    <View style={colorTheme === 'light' ? styles.header : styles.headerDark}>
      <View style={styles.emptySpace} />
      <View>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
          do
        </Text>
      </View>
      <TouchableOpacity
        style={
          colorTheme === 'light' ? styles.themeButton : styles.themeButtonDark
        }
        activeOpacity={0.8}
        onPress={changeColorTheme}
      >
        <Text
          style={
            colorTheme === 'light'
              ? styles.themeButtonText
              : styles.themeButtonTextDark
          }
        >
          {colorTheme === 'light' ? 'Escuro' : 'Claro'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#191932',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  emptySpace: {
    width: 72,
    height: 24,
    marginLeft: 24,
  },
  themeButton: {
    backgroundColor: '#000000',
    width: 72,
    height: 32,
    marginRight: 24,
    marginTop: 8,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeButtonDark: {
    backgroundColor: '#ffffff',
    width: 72,
    height: 32,
    marginRight: 24,
    marginTop: 8,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  themeButtonTextDark: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
