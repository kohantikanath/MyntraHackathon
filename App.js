import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faBell, faShoppingBag, faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faBell, faShoppingBag, faChevronDown);

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}



