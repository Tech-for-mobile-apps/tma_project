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
    backgroundColor: '#F5F5F5', 
    padding: 16, 
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  sectionContainer: {
    backgroundColor: '#FFF', 
    borderRadius: 10, 
    padding: 16, 
    marginBottom: 16, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 4, 
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#333', 
    paddingBottom: 10, 
  },
  settingOption: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10, 
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10, 
  },
 
});

export default ProfileScreen;
