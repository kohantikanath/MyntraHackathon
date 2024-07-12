// src/screens/KpopScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KpopScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>KpopScreen Category</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default KpopScreen;