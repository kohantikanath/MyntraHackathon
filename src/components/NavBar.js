//src/components/NavBar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as faHeartRegular, faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Myntra</Text>
          <FontAwesomeIcon icon={faChevronDown} size={12} color="#FF69B4" style={styles.chevron} />
        </View>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon icon={faBellRegular} size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon icon={faHeartRegular} size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesomeIcon icon={faShoppingBag} size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: '#FFF8DC', // Light gold shade
    borderWidth: 1,
    borderColor: '#FFD700', // Gold color
    borderRadius: 5,
    padding: 7,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold', //for-text-bold!
    color: '#000',
  },
  chevron: {
    marginLeft: 5,
  },
  rightSection: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginLeft: 18,
    marginRight:5,
  },
  
});

export default NavBar;
