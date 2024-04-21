import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscoverScreen from '../screens/DiscoverScreen';
import EventDetailScreen from '../screens/EventDetailScreen'; // Event detail screen

const EventDetailStack = createNativeStackNavigator();

function EventDetailStackNavigator() {
  return (
    <EventDetailStack.Navigator initialRouteName="Discovery">
      <EventDetailStack.Screen 
        name="Discovery" 
        component={DiscoverScreen} 
        options={{ headerShown: false }} // No header in discover
      />
      <EventDetailStack.Screen 
        name="EventDetail" 
        component={EventDetailScreen} 
        options={{ headerShown: true, title: 'Event Details' }} // Show header in event details
      />
    </EventDetailStack.Navigator>
  );
}

export default EventDetailStackNavigator;
