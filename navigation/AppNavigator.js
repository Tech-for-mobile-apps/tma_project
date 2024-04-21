import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen.js';
import BottomTabNavigator from '../navigation/BottomTabNavigator'; 


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Auth" options={{ headerShown: false }}>
        <Stack.Screen 
        name="Home" 
        component={BottomTabNavigator}
        options={{ headerShown: false }} 
      />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;