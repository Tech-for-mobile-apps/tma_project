import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const EventDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { event } = route.params; // Retrieve event data

  const [rsvp, setRsvp] = useState(false); // RSVP state toggle

  const handleRSVP = () => {
    setRsvp(true);
    alert(`You have RSVP'd to ${event.title}`);
  };

  return (
    <View style={styles.container}>
     
      <Image source={event.image} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{event.title}</Text>

      
      <View style={styles.detailsContainer}>
       
        <View style={styles.detailItem}>
          <Text style={styles.label}>Time:</Text>
          <Text style={styles.detailText}>{event.time}</Text> 
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.label}>Organized by:</Text>
          <Text style={styles.detailText}>{event.organizer}</Text> 
        </View>

        
        <View style={styles.detailItem}>
          <Text style={styles.label}>Location:</Text> 
          <Text style={styles.detailText}>{event.location}</Text> 
        </View>

        
        <View style={styles.detailItem}>
          <Text style={styles.label}>Description:</Text> 
          <Text style={styles.detailText}>{event.description}</Text> 
        </View>
      </View>

     
      <TouchableOpacity
        style={[
          styles.rsvpButton,
          rsvp ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }, // Change color if RSVP'd
        ]}
        onPress={handleRSVP}
      >
        <Text style={styles.rsvpText}>RSVP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Light background color
  },
  eventImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 20, // Ensure padding within the container
    borderRadius: 10,
    backgroundColor: '#ffffff', // White background
    shadowColor: '#000', // Shadow for depth effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '100%', // Ensure the container fills the available width
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row', // Layout for each detail
    alignItems: 'center', // Align items in a row
    marginBottom: 10, // Space between items
  },
  label: {
    fontWeight: 'bold',
    color: '#333', // Darker gray for label
    marginRight: 10, // Space between label and text
  },
  detailText: {
    fontSize: 16,
    color: '#666', // Gray text for details
    flex: 1, // Allow text to flex and wrap within the container
    flexWrap: 'wrap', // Ensure text wraps within bounds
  },
  rsvpButton: {
    padding: 15, // Padding for button
    borderRadius: 10,
    alignSelf: 'center', // Center the RSVP button
  },
  rsvpText: {
    color: '#fff', // White text for RSVP button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventDetailScreen;
