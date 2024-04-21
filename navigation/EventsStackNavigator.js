import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsScreen from '../screens/EventsScreen';
import AddEventScreen from '../screens/AddEventScreen';
import { EventProvider } from '../context/EventContext';

const EventStack = createNativeStackNavigator();

const EventsStackNavigator = () => {
  return (
    <EventProvider>
    <EventStack.Navigator screenOptions={{ headerShown: false }}>
      <EventStack.Screen name="EventsMain" component={EventsScreen} />
      <EventStack.Screen name="AddEvent" component={AddEventScreen} />
    </EventStack.Navigator>
    </EventProvider>
  );
};

export default EventsStackNavigator;
