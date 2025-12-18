import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="RulesCosmicClash" options={{ headerShown: false }} />
      <Stack.Screen name="RulesRocketDash" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
