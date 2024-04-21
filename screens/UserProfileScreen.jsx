import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Component for individual settings
const SettingOption = ({ title, iconName, type, onPress }) => (
  <TouchableOpacity style={styles.settingOption} onPress={onPress}>
    <Icon name={iconName} type={type} size={24} color="#5F5F5F" />
    <Text style={styles.optionText}>{title}</Text>
  </TouchableOpacity>
);

const ProfileScreen = () => {
  const navigation = useNavigation(); // Navigation context

  const handleLogout = () => {
    // Implement any additional logout logic here
    navigation.navigate('Login'); // Navigate back to the login screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Settings</Text>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingOption title="Edit Profile" iconName="edit" type="material" onPress={() => navigation.navigate('EditProfile')} />
          <SettingOption title="Security" iconName="security" type="material" />
          <SettingOption title="Notifications" iconName="notifications" type="material" />
          <SettingOption title="Privacy" iconName="privacy-tip" type="material" />
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Support & About</Text>
          <SettingOption title="My Subscription" iconName="credit-card" type="material" />
          <SettingOption title="Help & Support" iconName="help-outline" type="material" />
          <SettingOption title="Terms and Policies" iconName="article" type="material" />
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Cache & Cellular</Text>
          <SettingOption title="Free Up Space" iconName="storage" type="material" />
          <SettingOption title="Data Saver" iconName="data-usage" type="material" />
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Actions</Text>
          <SettingOption title="Report a Problem" iconName="report-problem" type="material" />
          <SettingOption title="Add Account" iconName="person-add" type="material" />
          <SettingOption title="Log Out" iconName="logout" type="material" onPress={handleLogout} /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light gray background
    padding: 16, // Padding for container
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  sectionContainer: {
    backgroundColor: '#FFF', // White background for sections
    borderRadius: 10, // Rounded corners for card effect
    padding: 16, // Padding for the section
    marginBottom: 16, // Space between sections
    shadowColor: '#000', // Shadow color for card effect
    shadowOffset: { width: 0, height: 2 }, // Offset for shadow
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    elevation: 4, // Elevation for shadow effect
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#333', // Darker text for section titles
    paddingBottom: 10, // Padding for the section title
  },
  settingOption: {
    flexDirection: 'row', // Layout for option
    alignItems: 'center', // Align icon and text
    paddingVertical: 10, // Padding for option
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10, // Space between icon and text
  },
 
});

export default ProfileScreen;
