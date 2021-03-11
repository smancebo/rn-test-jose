
//Modules
import React, { useEffect } from 'react';
import {
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Components
import HomeNavigator from './src/navigations/Stacks/HomeStack';
import Home from './src/views/home';

//constants
import { API_KEY } from './src/helpers/constants';

const App = () => {
  useEffect(() => {
    saveToken();
  }, [])

  const saveToken = async () => {
    //We save the token on the local storage
    await AsyncStorage.setItem("apiToken", API_KEY);
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <HomeNavigator />
    </NavigationContainer>
  );
};



export default App;
