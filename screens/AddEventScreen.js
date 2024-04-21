import React, { useState } from 'react';
import { View, TextInput, Alert, Button, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StatusBar } from 'expo-status-bar';
import { useEvent } from '../context/EventContext';

const AddEventScreen = ({ navigation }) => {
  const { addEvent } = useEvent();
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventAttendees, setEventAttendees] = useState('');
  const [eventNotes, setEventNotes] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [eventStartTime, setEventStartTime] = useState(new Date());
  const [eventEndTime, setEventEndTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    setEventDate(selectedDate || eventDate);
  };

  const onChangeStartTime = (event, selectedTime) => {
    setShowStartTimePicker(false);
    setEventStartTime(selectedTime || eventStartTime);
  };

  const onChangeEndTime = (event, selectedTime) => {
    setShowEndTimePicker(false);
    setEventEndTime(selectedTime || eventEndTime);
  };

  const handleSave = () => {
    const event = {
      date: eventDate.toISOString().split('T')[0], // Save date in YYYY-MM-DD format
      start_time: `${eventStartTime.getHours()}:${eventStartTime.getMinutes() < 10 ? '0' + eventStartTime.getMinutes() : eventStartTime.getMinutes()}`,
      end_time: `${eventEndTime.getHours()}:${eventEndTime.getMinutes() < 10 ? '0' + eventEndTime.getMinutes() : eventEndTime.getMinutes()}`,
      description: eventDescription,
      venue: eventVenue,
      attendees: eventAttendees,
      notes: eventNotes,
    };

    addEvent(event);
  
    navigation.goBack(); // Navigate back after saving the event
    Alert.alert('Event Added');
  };

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (time) => {
    return `${time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}`;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Event Name"
        value={eventName}
        onChangeText={setEventName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={eventDescription}
        onChangeText={setEventDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Venue"
        value={eventVenue}
        onChangeText={setEventVenue}
        style={styles.input}
      />
      <TextInput
        placeholder="Attendees (comma-separated)"
        value={eventAttendees}
        onChangeText={setEventAttendees}
        style={styles.input}
      />
      <TextInput
        placeholder="Notes"
        value={eventNotes}
        onChangeText={setEventNotes}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text>{formatDate(eventDate)}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={eventDate}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <TouchableOpacity onPress={() => setShowStartTimePicker(true)} style={styles.input}>
        <Text>{formatTime(eventStartTime)}</Text>
      </TouchableOpacity>
      {showStartTimePicker && (
        <DateTimePicker
          value={eventStartTime}
          mode="time"
          is24Hour
          display="default"
          onChange={onChangeStartTime}
        />
      )}
      <TouchableOpacity onPress={() => setShowEndTimePicker(true)} style={styles.input}>
        <Text>{formatTime(eventEndTime)}</Text>
      </TouchableOpacity>
      {showEndTimePicker && (
        <DateTimePicker
          value={eventEndTime}
          mode="time"
          is24Hour
          display="default"
          onChange={onChangeEndTime}
        />
      )}
      <StatusBar style="auto" />
      <Button title="Save Event" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 15,
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
});

export default AddEventScreen;
