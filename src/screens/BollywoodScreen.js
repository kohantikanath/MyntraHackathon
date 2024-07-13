import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import NavBar from '../components/NavBar';

const BollywoodScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      {/* //write a text  */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  
});

export default BollywoodScreen;
