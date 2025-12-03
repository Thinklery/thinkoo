import { SplashScreen, Stack } from "expo-router";
import React from "react";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="games" options={{ headerShown: false }} />
      <Stack.Screen name="nfc" options={{ headerShown: false }} />
      <Stack.Screen name="quiz" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
