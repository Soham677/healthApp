import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {createSwitchNavigator, createAppContainer}  from 'react-navigation'

import firebase from "firebase";
import { firebaseConfig } from './components/RegisterScreens/config'

import CredentialsScreen from './components/RegisterScreens/CredentialsScreen';
import SignInScreen from './components/RegisterScreens/SignInScreen';
import StackNavigator from './navigation/StackNavigatorRegisterProcess'
import HomeScreen from './components/MainScreens/HomeScreen';
import PerformanceScreen from './components/MainScreens/PerformanceScreen';
import {HabitsScreen} from './components/RegisterScreens/HabitsScreen';

//if (!firebase.apps.length) {
  //firebase.initializeApp(firebaseConfig);
//} else {
  //firebase.app();
//}

export default function App() {
  return(
    <View>
      <AppContainer />
    </View>
  )
}

const SwitchNavigator = createSwitchNavigator({
  CredentialsScreen: CredentialsScreen,
    PerformanceScreen: PerformanceScreen,
    HabitsScreen: HabitsScreen, 
     
    HomeScreen: HomeScreen,  
})

const AppContainer = createAppContainer(SwitchNavigator);

