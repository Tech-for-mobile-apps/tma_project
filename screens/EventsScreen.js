import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Calendar from '../components/Calendar'; 

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
    backgroundColor: '#f5f5f5', 
  },
  fab: {
    position: 'absolute', 
    bottom: 20, 
    right: 20, 
    width: 56, 
    height: 56, 
    borderRadius: 28, 
    backgroundColor: '#007AFF', 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 4, 
  },
});

export default EventsScreen;
