import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import event images statically
import event1 from '../assets/images/events/event-1.png';
import event2 from '../assets/images/events/event-2.png';
import event3 from '../assets/images/events/event-3.png';
import event4 from '../assets/images/events/event-4.png';
import event5 from '../assets/images/events/event-5.png';
import event6 from '../assets/images/events/event-6.png';

import person1 from '../assets/images/people/person-1.png';
import person2 from '../assets/images/people/person-2.png';
import person3 from '../assets/images/people/person-3.png';
import person4 from '../assets/images/people/person-4.png';
import person5 from '../assets/images/people/person-5.png';
import person6 from '../assets/images/people/person-6.png';


const DiscoverScreen = () => {
  const [people, setPeople] = useState([
    { id: '1', name: 'Alice', profilePic: person1 },
    { id: '2', name: 'Bob', profilePic: person2 },
    { id: '3', name: 'Charlie', profilePic: person3 },
    { id: '4', name: 'Diana', profilePic: person4 },
    { id: '5', name: 'Charlie', profilePic: person5 },
    { id: '6', name: 'Diana', profilePic: person6 },
  ]);
  const events = [
    {
      id: '1',
      title: 'Music Fest',
      image: event1,
      time: '7 PM',
      organizer: 'Club A',
      location: 'Campus Greens, University of Cincinnati, Cincinnati, Ohio',
      description: 'An evening of live music and entertainment.',
      participants: '50+',
      date: '2024-04-28',
    },
    {
      id: '2',
      title: 'Tech Talk',
      image: event2,
      time: '5 PM',
      organizer: 'Tech Group',
      location: 'TDC-350, University of Cincinnati, Cincinnati, Ohio',
      description: 'A talk on the latest in technology and innovation.',
      participants: '30+',
      date: '2024-04-29', 
    },
    {
      id: '3',
      title: 'Art Exhibition',
      image: event3,
      time: '6 PM',
      organizer: 'Art Club',
      location: 'DAAP, University of Cincinnati, Cincinnati, Ohio',
      description: 'An exhibition showcasing local artists and their work.',
      participants: '20+',
      date: '2024-04-30',
    },
    {
      id: '4',
      title: 'Science Fair',
      image: event4,
      time: '4 PM',
      organizer: 'Science Society',
      location: 'Rhodes Hall -503, University of Cincinnati, Cincinnati, Ohio',
      description: 'A science fair featuring student projects and experiments.',
      participants: '40+',
      date: '2024-05-01', 
    },
    {
      id: '5',
      title: 'Book Reading',
      image: event5,
      time: '3 PM',
      organizer: 'Book Club',
      location: 'Langsam Library, University of Cincinnati, Cincinnati, Ohio',
      description: 'A book reading session with a local author.',
      participants: '40+',
      date: '2024-05-02', 
    },
    {
      id: '6',
      title: 'Food Festival',
      image: event6,
      time: '1 PM',
      organizer: 'Foodies Club',
      location: 'Outside Linder, University of Cincinnati, Cincinnati, Ohio',
      description: 'A food festival featuring local vendors and cuisine.',
      participants: '100+',
      date: '2024-05-03', 
    },
  ];
  const [sentRequests, setSentRequests] = useState([]);

  const navigation = useNavigation();

  const renderEventItem = ({ item }) => (
    <TouchableOpacity
      style={styles.eventItem}
      onPress={() => navigation.navigate('EventDetail', { event: item })} 
    >
      <Image source={item.image} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text>{`${item.date} - ${item.time} - Organized by ${item.organizer}`}</Text>
    </TouchableOpacity>
  );

  const renderPersonItem = ({ item }) => {
    const isRequestSent = sentRequests.includes(item.id);

    const handleConnect = (id) => {
      setSentRequests([...sentRequests, id]);
      Alert.alert('Request Sent', `Connection request sent to ${item.name}`);
    };

    return (
      <View style={styles.personItemContainer}>
        <View style={styles.personItem}>
          <Image source={item.profilePic} style={styles.profilePic} />
          <Text style={styles.personName}>{item.name}</Text>

          <TouchableOpacity
            style={[
              styles.connectButton,
              isRequestSent ? styles.requestSent : styles.defaultButton, 
            ]}
            onPress={() => handleConnect(item.id)} 
            disabled={isRequestSent} 
          >
            <Text style={styles.connectButtonText}>
              {isRequestSent ? 'Connected' : 'Connect'} 
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Discover</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search events or people..."
      />
      <Text style={styles.sectionHeader}>Events</Text>
      <FlatList
        horizontal
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionHeader}>People You May Know</Text>
      <FlatList
        horizontal
        data={people}
        renderItem={renderPersonItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    marginTop: '10%',
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  eventItem: {
    width: 200,
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    elevation: 3,
  },
  eventImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  eventTitle: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  personItemContainer: {
    width: 150, 
    height: 200, 
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  personItem: {
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100%', 
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35, 
  },
  personName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10, 
    textAlign: 'center', 
  },
  connectButton: {
    padding: 12, 
    borderRadius: 6, 
    alignSelf: 'center', 
  },
  defaultButton: {
    backgroundColor: 'blue', 
  },
  requestSent: {
    backgroundColor: 'green', 
  },
  connectButtonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DiscoverScreen;
