// src/screens/HollywoodScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const KdramaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tollywood Category</Text>
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

export default KdramaScreen;
