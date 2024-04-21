import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfileScreen from '../screens/UserProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen'; // Import the Edit Profile screen

const UserProfileStack = createNativeStackNavigator();

function UserProfileStackNavigator() {
  return (
    <UserProfileStack.Navigator initialRouteName="UserProfile" options={{ headerShown: false }}>
      <UserProfileStack.Screen 
        name="UserProfile" 
        component={UserProfileScreen} 
        options={{ headerShown: false }} 
      />
      <UserProfileStack.Screen 
        name="EditProfile" 
        component={EditProfileScreen} 
        options={{ headerShown: true, title: 'Edit Profile' }} 
      />
    </UserProfileStack.Navigator>
  );
}

export default UserProfileStackNavigator;
