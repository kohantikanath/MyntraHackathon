// src/components/CategoryGrid.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { name: 'Bollywood', screen: 'BollywoodScreen', image: require('../../assets/images/bollywood.jpg') },
  { name: 'Anime', screen: 'AnimeScreen', image: require('../../assets/images/anime.jpg') },
  { name: 'K-pop', screen: 'KpopScreen', image: require('../../assets/images/k-pop.jpg') },
//   { name: 'C-drama', screen: 'CdramaScreen', image: require('../../assets/images/k-drama.jpg') },
  { name: 'Hollywood', screen: 'HollywoodScreen', image: require('../../assets/images/hollywood.jpg') },
  { name: 'K-drama', screen: 'KdramaScreen', image: require('../../assets/images/k-drama.jpg') },
];

const CategoryGrid = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gridContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryItem}
          onPress={() => navigation.navigate(category.screen)}
        >
          <Image source={category.image} style={styles.categoryImage} />
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  categoryItem: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  categoryImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default CategoryGrid;
