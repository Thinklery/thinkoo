import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="CosmicClash" options={{ headerShown: false }} />
      <Stack.Screen name="RocketDash" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
