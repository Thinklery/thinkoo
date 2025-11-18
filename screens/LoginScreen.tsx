// screens/LoginScreen.tsx
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../components/AuthContext';

const LoginScreen = ({ navigation }: any) => {
  const { login, signUp } = useContext(AuthContext)!;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // To store error messages
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // To store success message

  const handleLogin = async () => {
    setError(null); // Reset error
    setSuccessMessage(null); // Reset success message
    try {
      await login(email, password);
    } catch (err: any) {
      setError('Invalid login credentials'); // Handle error and display it
    }
  };

  const handleSignUp = async () => {
    setError(null); // Reset error
    setSuccessMessage(null); // Reset success message
    try {
      await signUp(email, password);
      setSuccessMessage('Sign up successful'); // Show success message
    } catch (err: any) {
      if (err.message.includes('Password should be at least 6 characters')) {
        setError('Password should be at least 6 characters');
      } else {
        setError('Something went wrong during sign up');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
      
      {error && <Text style={styles.errorText}>{error}</Text>} {/* Display error */}
      {successMessage && <Text style={styles.successText}>{successMessage}</Text>} {/* Display success message */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  successText: {
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
