import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Access navigation context

  const handleLogin = () => {
    // Navigate to the "Home" screen when login is clicked
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Input
        label="Email"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
        autoCapitalize="none"
        containerStyle={styles.inputContainer} // Consistent styling for inputs
      />
      <Input
        label="Password"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Enter your password"
        containerStyle={styles.inputContainer} // Consistent styling for inputs
      />
      <Button
        title="Login"
        buttonStyle={styles.button}
        titleStyle={styles.buttonText} // Consistent text style for the button
        onPress={handleLogin} // Navigate to "Home" on click
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    padding: 20, // Additional padding for breathing room
    backgroundColor: '#f9f9f9', // Light background color
  },
  header: {
    fontSize: 26, // Slightly larger font for the header
    fontWeight: 'bold',
    textAlign: 'center', // Center-align the header
    color: '#333', // Darker color for contrast
    marginBottom: 24, // More space below the header
  },
  inputContainer: {
    marginBottom: 16, // Consistent spacing between input fields
  },
  button: {
    backgroundColor: '#1E90FF', // Vibrant blue color
    borderRadius: 8, // Slightly more rounded corners
    paddingVertical: 12, // Vertical padding for a comfortable button size
    paddingHorizontal: 24, // Horizontal padding for a comfortable button size
  },
  buttonText: {
    color: '#fff', // White text for contrast
    fontWeight: 'bold',
    fontSize: 16, // Slightly larger font for better readability
  },
});

export default LoginScreen;
