import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity, Alert } from 'react-native';

// Import event images statically
import event1 from '../assets/images/events/event-1.png';
import event2 from '../assets/images/events/event-2.png';
import event3 from '../assets/images/events/event-3.png';
import event4 from '../assets/images/events/event-4.png';
import event5 from '../assets/images/events/event-5.png';
import event6 from '../assets/images/events/event-6.png';

const initialMyGroups = [
  { id: '1', name: 'Making New Friends', location: 'Cincinnati, OH', members: 37, image: event1 },
  { id: '2', name: 'Florence Self Empowerment', location: 'Covington, KY', members: 43, image: event2 },
  { id: '3', name: 'Tech Innovators', location: 'Cincinnati, OH', members: 29, image: event3 },
];

const initialSuggestedGroups = [
  { id: '4', name: 'Nature Lovers', location: 'Cincinnati, OH', members: 52, image: event4 },
  { id: '5', name: 'Fitness Enthusiasts', location: 'Covington, KY', members: 65, image: event5 },
  { id: '6', name: 'Book Club', location: 'Cincinnati, OH', members: 38, image: event6 },
];

// Group component for consistent rendering
const GroupItem = ({ group, onJoin, showJoin }) => (
  <View style={styles.groupItemContainer}>
    <Image source={group.image} style={styles.groupImage} />
    <View style={styles.groupDetails}>
      <Text style={styles.groupName}>{group.name}</Text>
      <Text style={styles.groupLocation}>{group.location}</Text>
      <Text style={styles.groupMembers}>{group.members} Members</Text>
    </View>
    {showJoin && (
      <TouchableOpacity 
        style={[
          styles.joinButton, 
          group.joined ? { backgroundColor: 'green' } : {}, 
        ]}
        onPress={() => onJoin(group)} 
        disabled={group.joined} 
      >
        <Text style={styles.joinButtonText}>
          {group.joined ? 'Joined' : 'Join'}
        </Text>
      </TouchableOpacity>
    )}
  </View>
);

const GroupsScreen = () => {
  const [myGroups, setMyGroups] = useState(initialMyGroups);
  const [suggestedGroups, setSuggestedGroups] = useState(initialSuggestedGroups);

  const handleJoinGroup = (group) => {
    // Set the joined status to true and remove the group from suggestedGroups
    setSuggestedGroups(
      suggestedGroups.filter(g => g.id !== group.id) // Remove the group from suggestedGroups
    );

    // Add the group to myGroups with the joined status set to true
    setMyGroups([...myGroups, { ...group, joined: true }]);

    Alert.alert('Group Joined', `You have joined the ${group.name}`);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search groups..." />

      <Text style={styles.sectionHeader}>My Groups</Text>
      <FlatList
        data={myGroups}
        renderItem={({ item }) => <GroupItem group={item} />}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.sectionHeader}>Suggested Groups</Text>
      <FlatList
        data={suggestedGroups}
        renderItem={({ item }) => (
          <GroupItem group={item} onJoin={handleJoinGroup} showJoin={!item.joined} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginTop:'10%' // Light background color
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff', // White background for the search bar
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10, // Space above and below section header
  },
  groupItemContainer: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Center content vertically
    padding: 10,
    backgroundColor: '#fff', // White background
    borderRadius: 10,
    shadowColor: '#000', // Shadow properties
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Elevation for shadow
    marginVertical: 10, // Space between groups
  },
  groupImage: {
    width: 50, // Image width
    height: 50, // Image height
    borderRadius: 25, // Circular image
  },
  groupDetails: {
    marginLeft: 10, // Space between image and text
    flex: 1, // Take up remaining space
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  groupLocation: {
    fontSize: 14,
    color: '#666', // Gray text
  },
  groupMembers: {
    fontSize: 14,
    color: '#666', // Gray text
  },
  joinButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#00A2E8', // Blue button for default
  },
  joinButtonText: {
    fontSize: 14,
    color: '#fff', // White text
  },
});

export default GroupsScreen;
