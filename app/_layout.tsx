import { router, Stack } from "expo-router";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useOnboardingStore from "@/utils/useOnboardingStore";

const RootLayout = () => {
  // const [fontsLoaded] = useFonts({
  //   "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  //   "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  // });
  useEffect(() => {
    const init = async () => {
      const name = await AsyncStorage.getItem("displayName");
      if (name) {
        useOnboardingStore.getState().setName(name);
        router.replace("/(tabs)/home");
      } else {
        router.replace("/(onboarding)/onboarding");
      }
    }
    init();
  }, []);

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
