import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CredentialsScreen from '../components/RegisterScreens/CredentialsScreen';
import LoadingScreen from '../components/RegisterScreens/LoadingScreen';
import HomeScreen from '../components/MainScreens/HomeScreen';
import SignInScreen from '../components/RegisterScreens/SignInScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    
    <Stack.Navigator
      initialRouteName="CredentalsScreen"
      screenOptions={{
        headerShown: true
      }}
    >      
      <Stack.Screen name="CredentalsScreen" component={CredentialsScreen} />

  


    </Stack.Navigator>

  );
};

export default StackNavigator;
