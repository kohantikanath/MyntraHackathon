// //src/screens/ThemeSelectionScreen.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ThemeSelectionScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Theme Selection Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ThemeSelectionScreen;

// src/screens/ThemeSelectionScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

const ThemeSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar />
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