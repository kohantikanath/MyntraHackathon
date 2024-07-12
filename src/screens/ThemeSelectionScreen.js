//src/screens/ThemeSelectionScreen.js
import React from 'react';
// import { View, StyleSheet } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import ImageCarousel from '../components/ImageCarousel';

const ThemeSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <SearchBar />
      <Text style={styles.caption}>Top Picks for You!</Text>
      <ImageCarousel />
      {/* Rest of your screen content */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   caption: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  caption: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(255, 192, 203, 0.3)', // Light pink tint background
    padding: 5,
    borderRadius: 5,
    fontFamily: 'Cursive', // Change font to something more attractive
  },
});
export default ThemeSelectionScreen;