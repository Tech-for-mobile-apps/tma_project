import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import EventsScreen from '../screens/EventsScreen';
import GroupsScreen from '../screens/GroupsScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import { Ionicons } from '@expo/vector-icons'; 
import EventDetailStackNavigator from'./EventDetailStackNavigator'
import UserProfileStackNavigator from './UserProfileStackNavigator'
import EventsStackNavigator from'./EventsStackNavigator'
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        if (route.name === 'Feed') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Discover') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Events') {
          iconName = focused ? 'calendar' : 'calendar-outline';
        } else if (route.name === 'Groups') {
          iconName = focused ? 'people' : 'people-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }
  
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray'
    })}
  >
    <Tab.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Discover" component={EventDetailStackNavigator} options={{ headerShown: false }}/>
    <Tab.Screen name="Events" component={EventsStackNavigator} options={{ headerShown: false }}/>
    <Tab.Screen name="Groups" component={GroupsScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Profile" component={UserProfileStackNavigator}options={{ headerShown: false }} />
  </Tab.Navigator>
  
  );
}

export default BottomTabNavigator;
