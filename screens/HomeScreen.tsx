import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../components/AuthContext';

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext)!;

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text>Welcome, {user.user.email}</Text>
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <Text>Please log in</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
