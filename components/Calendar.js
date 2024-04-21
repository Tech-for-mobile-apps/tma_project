import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useEvent } from '../context/EventContext';
import { FontAwesome } from '@expo/vector-icons';

export default function Calendar() {
  const { events } = useEvent();
  const [selectedDate, setSelectedDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const fetchEventsForDate = (date) => {
    if (!date) return [];

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    return events.filter((event) => event.date === formattedDate);
  };

  const formattedDate = selectedDate ? selectedDate.toString() : '';
  const dateEvents = selectedDate ? fetchEventsForDate(selectedDate) : [];

  return (
    <View style={styles.container}>
      <CalendarPicker
        startFromMonday
        allowRangeSelection={false}
        minDate={new Date()}
        maxDate={new Date().setFullYear(new Date().getFullYear() + 1)}
        weekdays={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        months={[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]}
        previousTitle="Previous"
        nextTitle="Next"
        todayBackgroundColor="#e6ffe6"
        selectedDayColor="#66ff33"
        selectedDayTextColor="#000000"
        scaleFactor={375}
        textStyle={{
          fontFamily: 'System', // Replaced with default font
          color: '#000000',
        }}
        onDateChange={onDateChange}
      />

      <ScrollView style={{ marginTop: 20 }}>
        <Text style={styles.dateText}>SELECTED DATE: {formattedDate}</Text>
        {dateEvents.map((event, index) => (
          <View key={index} style={styles.eventContainer}>
            <Text style={styles.eventTitle}>
              <FontAwesome name="calendar" /> Event: {event.description}
            </Text>
            <Text style={styles.eventTime}>
              <FontAwesome name="clock-o" /> Start Time: {event.start_time}
            </Text>
            <Text style={styles.eventEndTime}>
              <FontAwesome name="clock-o" /> End Time: {event.end_time}
            </Text>
            <Text style={styles.eventVenue}>
              <FontAwesome name="map-marker" /> Venue: {event.venue}
            </Text>
            <Text style={styles.eventAttendees}>
              <FontAwesome name="users" /> Attendees: {event.attendees || 'N/A'}
            </Text>
            <Text style={styles.eventNotes}>
              <FontAwesome name="sticky-note-o" /> Notes: {event.notes || 'N/A'}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  dateText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'System', // Use default font
  },
  eventContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'System', // Use default font
  },
  eventTime: {
    fontSize: 16,
    color: '#555555',
    fontFamily: 'System', // Use default font
  },
  eventEndTime: {
    fontSize: 16,
    color: '#555555',
    fontFamily: 'System', // Use default font
  },
  eventVenue: {
    fontSize: 16,
    color: '#555555',
    fontFamily: 'System', // Use default font
  },
  eventAttendees: {
    fontSize: 16,
    color: '#555555',
    fontFamily: 'System', // Use default font
  },
  eventNotes: {
    fontSize: 16,
    color: '#555555',
    fontFamily: 'System', // Use default font
  },
});
