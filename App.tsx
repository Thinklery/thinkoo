import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NfcScreen from './NfcScreen';

function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.replace('Home');
    } else {
      alert('Please fill in username and password');
    }
  };

  return (
    <View style={styles.centered}>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Dummy home screen
function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.centered}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('NFC')} style={styles.button}>
        <Text>Go to NFC Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

// Setting up tab navigation for NFC screen
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="NFC" component={NfcScreen} />
    </Tab.Navigator>
  );
}

// Stack navigator for the Login screen and the Home Tab Navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styling
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 10,
  },
});

export default App;
