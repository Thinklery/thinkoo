import React, { useContext, useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NfcScreen from '../screens/NfcScreen';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from '../components/AuthContext';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext)!;  // Get user state from AuthContext
  const [isLoading, setIsLoading] = useState<boolean>(true); // To handle loading state

  useEffect(() => {
    if (user !== null) {
      setIsLoading(false); // Finished loading if user is found
    } else {
      setIsLoading(false); // Finished loading if user is null
    }
  }, [user]);

  if (isLoading) {
    return <Text>Loading...</Text>; // Optionally show a loading spinner
  }

  return (
    <Stack.Navigator>
      {user ? (
        // If the user is logged in, show bottom tab navigation
        <Stack.Screen name="HomeTabs">
          {() => (
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="NFC" component={NfcScreen} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      ) : (
        // If the user is not logged in, show the Login screen
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
