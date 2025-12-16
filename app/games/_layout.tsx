import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="sync" options={{ headerShown: false }} />
      <Stack.Screen name="rules" options={{ headerShown: false }} />
      <Stack.Screen name="games" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
