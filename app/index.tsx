import { Redirect } from "expo-router";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  useEffect(() => {
    const loadUsername = async () => {
      try {
        const token = await AsyncStorage.getItem("username");
      if (token) {
        return <Redirect href="/(tabs)/home" />;
      }
      return <Redirect href="/onboarding" />;
      } catch (error) {
        console.error("Error accessing AsyncStorage:", error);
        return <Redirect href="/onboarding" />;
      }
    };
    loadUsername();
  }, []);
  return <Redirect href="/onboarding" />; // Fallback while checking AsyncStorage
};
