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
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 26, 
    fontWeight: 'bold',
    textAlign: 'center', 
    color: '#333', 
    marginBottom: 24, 
  },
  inputContainer: {
    marginBottom: 16, 
  },
  button: {
    backgroundColor: '#1E90FF', 
    borderRadius: 8, 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
  },
  buttonText: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 16, 
  },
});

export default LoginScreen;
