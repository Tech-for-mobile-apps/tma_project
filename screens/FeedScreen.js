import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Import image assets
import event1 from '../assets/images/events/event-1.png';
import event2 from '../assets/images/events/event-2.png';
import event3 from '../assets/images/events/event-3.png';
import event4 from '../assets/images/events/event-4.png';
import event5 from '../assets/images/events/event-5.png';
import event6 from '../assets/images/events/event-6.png';


const events = [
  { id: '1', title: 'Music Fest', date: '2024-05-15', image: event1, time: '7 PM', organizer: 'Club A', status: 'going' },
  { id: '2', title: 'Tech Talk', date: '2024-06-10', image: event2, time: '5 PM', organizer: 'Tech Group', status: 'suggested' },
  { id: '3', title: 'Art Exhibition', date: '2024-05-20', image: event3, time: '6 PM', organizer: 'Art Club', status: 'saved' },
  { id: '4', title: 'Science Fair', date: '2024-06-01', image: event4, time: '4 PM', organizer: 'Science Society', status: 'going' },
  { id: '5', title: 'Book Reading', date: '2024-05-25', image: event5, time: '3 PM', organizer: 'Book Club', status: 'saved' },
  { id: '6', title: 'Food Festival', date: '2024-07-01', image: event6, time: '1 PM', organizer: 'Foodies Club', status: 'suggested' },
  { id: '7', title: 'Dance Party', date: '2024-06-15', image: event1, time: '8 PM', organizer: 'Dance Group', status: 'suggested' },
  { id: '8', title: 'Coding Bootcamp', date: '2024-07-10', image: event2, time: '10 AM', organizer: 'Code Club', status: 'going' },
  { id: '9', title: 'Photography Workshop', date: '2024-05-30', image: event3, time: '2 PM', organizer: 'Photo Group', status: 'saved' },
  { id: '10', title: 'Cooking Class', date: '2024-06-20', image: event4, time: '12 PM', organizer: 'Culinary Club', status: 'going' },
  { id: '11', title: 'Charity Run', date: '2024-05-05', image: event5, time: '9 AM', organizer: 'Charity Group', status: 'suggested' },
  { id: '12', title: 'Yoga Retreat', date: '2024-06-25', image: event6, time: '7 AM', organizer: 'Yoga Group', status: 'saved' },
  { id: '13', title: 'Music Jam Session', date: '2024-07-20', image: event1, time: '7 PM', organizer: 'Music Club', status: 'going' },
];


const news = [
  { id: '1', title: 'New Venue Opened', content: 'The new venue is now open for bookings.', postedBy: 'Admin', postedTime: '2 hours ago' },
  { id: '2', title: 'Event Changes', content: 'The Music Fest has been rescheduled to next week.', postedBy: 'Event Organizer', postedTime: '1 day ago' },
  { id: '3', title: 'New Menu Items', content: 'The restaurant has introduced new menu items for the spring season.', postedBy: 'Chef', postedTime: '4 hours ago' },
  { id: '4', title: 'Tech Conference Announced', content: 'The annual tech conference will take place in June.', postedBy: 'Conference Coordinator', postedTime: '3 days ago' },
  { id: '5', title: 'Community Cleanup', content: 'Join us for a community cleanup event this weekend.', postedBy: 'Volunteer Coordinator', postedTime: '12 hours ago' },
];


const FeedScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('going');

  const filterEvents = (status) => {
    setSelectedFilter(status); // Update the selected filter
  };

  const filteredEvents = events.filter((event) => event.status === selectedFilter);

  const renderEventItem = ({ item }) => (
    <TouchableOpacity style={styles.eventItem}>
      <Image source={item.image} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text>{`${item.date} - ${item.time} - Organized by ${item.organizer}`}</Text>
    </TouchableOpacity>
  );

  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsMeta}>
        Posted by {item.postedBy} - {item.postedTime}
      </Text>
      <Text style={styles.newsContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'going' && styles.filterButtonActive,
          ]}
          onPress={() => filterEvents('going')}
        >
          <Text style={styles.filterButtonText}>Going</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'saved' && styles.filterButtonActive,
          ]}
          onPress={() => filterEvents('saved')}
        >
          <Text style={styles.filterButtonText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'suggested' && styles.filterButtonActive,
          ]}
          onPress={() => filterEvents('suggested')}
        >
          <Text style={styles.filterButtonText}>
            Suggested {selectedFilter === 'suggested' ? `(${filteredEvents.length})` : ''}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={filteredEvents}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false} // No horizontal scroll bar
        // contentContainerStyle={{ height: 200 }} // Decrease height of the FlatList
        style={styles.flatList}
      />

      <View style={styles.newsContainer}>
        <Text style={styles.sectionHeader}>Recent News</Text>
        <FlatList
          data={news}
          renderItem={renderNewsItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false} // Hide vertical scroll bar
          style={styles.flatListVertical}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Dark background
    padding: 16,
    marginTop: '10%',
  },
  header: {
    fontSize: 24, // Larger font size
    color: '#000',
    fontWeight: 'bold', // Bold header
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  flatList: {
    height: 200, // FlatList's height restriction
  },
  filterButton: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#A9A9A9', // Neutral color for unselected filters
  },
  filterButtonActive: {
    backgroundColor: '#008B8B', // Active filter color
  },
  filterButtonText: {
    color: '#fff', // White text
  },
  eventItem: {
    width: 220,
    height: 200, // Increased width to fit more details
    backgroundColor: '#fff', // White background for event cards
    padding: 16, // Extra padding
    marginRight: 10,
    borderRadius: 10,
    elevation: 4, // Shadow effect
  },
  eventImage: {
    width: '100%',
    height: 100,
    borderRadius: 10, // Rounded corners for the event image
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 18, // Larger font size for event titles
    marginVertical: 5,
  },
  newsContainer: {
    flex : 2,
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8', // Light background for the news section
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Dark text for contrast
    marginBottom: 16,
  },
  flatListVertical: {
    height: 'auto', // Allow vertical scroll
  },
  newsItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10, // Separate news items
    elevation: 5, // Shadow effect
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Dark text for visibility
  },
  newsMeta: {
    fontSize: 14,
    color: '#555', // Lighter text for meta info
    marginBottom: 8,
  },
  newsContent: {
    fontSize: 16,
    color: '#666', // Slightly darker text for content
  },
});

export default FeedScreen;

