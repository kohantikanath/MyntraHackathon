//src/screens/ThemeSelectionScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

const ThemeSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <SearchBar />
      {/* Rest of your screen content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default ThemeSelectionScreen;