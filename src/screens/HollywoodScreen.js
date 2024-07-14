// src/screens/KdramaScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HollywoodScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hollywood Category</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HollywoodScreen;
