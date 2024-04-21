import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './navigation/BottomTabNavigator'; // Assuming this is your BottomTabNavigator

import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={BottomTabNavigator} />
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
