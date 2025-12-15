import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function UserScreen() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    const storeUsername = async () => {
      try {
        if (!username.trim()) return;
        await AsyncStorage.setItem("username", username.trim());
        router.push("/(tabs)/home");
      } catch (error) {
        console.error("Error saving username to AsyncStorage:", error);
      }
    };
    storeUsername();
    // Run update to Supabase
  };

  return (
    <View>
      <Text>User Screen</Text>
      <TextInput
        placeholder="Enter your name"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Text>
        {submitted ? `Submitted name: ${username}` : "No name submitted yet."}
      </Text>
    </View>
  );
}
