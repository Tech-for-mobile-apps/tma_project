import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // For dropdown selection
import { Icon } from 'react-native-elements';
import { countries } from '../components/countries';

const EditProfileScreen = () => {
  const [name, setName] = useState('Test User');
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('***********');
  const [dateOfBirth, setDateOfBirth] = useState('23/05/1999');
  const [country, setCountry] = useState('United States'); // Default country selection

  const handleProfilePicture = () => {
    // Logic for updating profile picture (e.g., opening image picker)
  };

  const handleSaveChanges = () => {
    // Logic for saving profile changes
  };

  return (
    <View style={styles.container}>
      

      <View style={styles.profilePictureContainer}>
        <TouchableOpacity onPress={handleProfilePicture}>
          <View style={styles.profilePicture}>
            <Icon name="camera-alt" type="material" size={32} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        label="Name"
        value={name}
        onChangeText={setName}
        placeholder="Name"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Password"
      />
      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        value={dateOfBirth}
        placeholder="Date of Birth"
      />
      <Text style={styles.label}>Country/Region</Text>
      <Text style={styles.label}>Country/Region</Text>
      <Picker
        selectedValue={country}
        style={styles.picker}
        onValueChange={(itemValue) => setCountry(itemValue)} 
      >
        {countries.map((country) => (
          <Picker.Item label={country} value={country} key={country} /> 
        ))}
      </Picker>
      
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF', // White background
  },
  header: {
    flexDirection: 'row', // Layout for header
    alignItems: 'center', // Center-align elements in the header
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Space after the back button
  },
  profilePictureContainer: {
    alignItems: 'center', // Center-align the profile picture
    padding: 20, // Padding around the profile picture
  },
  profilePicture: {
    width: 100, // Circle profile picture
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EFEFEF', // Light gray background
    alignItems: 'center',
    justifyContent: 'center', // Center the camera icon
  },
  input: {
    borderColor: '#CCC', // Border color for input fields
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16, // Space between input fields
  },
  label: {
    fontWeight: 'bold', // Bold text for labels
    marginBottom: 8, // Space between label and input field
  },
  picker: {
    height: 50,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#4B0082', // Dark purple for the save button
    padding: 12,
    borderRadius: 8,
    alignItems: 'center', // Center-align text
  },
  saveButtonText: {
    color: '#FFF', // White text for the save button
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
