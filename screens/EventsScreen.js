import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the "+" icon
import Calendar from '../components/Calendar'; // Assuming this component exists

const EventsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Calendar /> 

      <TouchableOpacity
        style={styles.fab} 
        onPress={() => navigation.navigate('AddEvent')} 
      >
        <Ionicons name="add" size={24} color="#fff" /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background color
  },
  fab: {
    position: 'absolute', // To position the button at the bottom-right
    bottom: 20, // Distance from the bottom
    right: 20, // Distance from the right
    width: 56, // Button width
    height: 56, // Button height
    borderRadius: 28, // Circular shape
    backgroundColor: '#007AFF', // Blue color for the button
    justifyContent: 'center', // Center-align the icon
    alignItems: 'center', // Center-align the icon
    elevation: 4, // Shadow for the floating button
  },
});

export default EventsScreen;
