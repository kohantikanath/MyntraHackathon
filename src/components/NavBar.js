// //src/components/NavBar.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart as faHeartRegular,
  faBell as faBellRegular,
} from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Import your custom shopping bag image
import ShoppingBagIcon from "../../assets/shopping_bag.png"; // Adjust the path as per your project structure

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Myntra</Text>
          <FontAwesomeIcon
            icon={faChevronDown}
            size={12}
            color="#FF69B4"
            style={styles.chevron}
          />
        </View>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon icon={faBellRegular} size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon icon={faHeartRegular} size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shoppingBagContainer}>
          <Image source={ShoppingBagIcon} style={styles.shoppingBagIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#FFF8DC",
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 5,
    padding: 7,
    marginRight: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  chevron: {
    marginLeft: 5,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center", // Center items vertically
  },
  iconContainer: {
    marginLeft: 18,
    marginRight: 5,
  },
  shoppingBagContainer: {
    marginLeft: 18,
    marginRight: 5,
    alignItems: "flex-start", // Align the image at the top
    justifyContent: "center", // Center horizontally
  },
  shoppingBagIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain", // Ensure the image fits within the TouchableOpacity
  },
});

export default NavBar;
