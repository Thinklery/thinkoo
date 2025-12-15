import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="CosmicClashPlayers"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RocketDashPlayers" options={{ headerShown: false }} />
      <Stack.Screen name="RulesCosmicClash" options={{ headerShown: false }} />
      <Stack.Screen name="RulesRocketDash" options={{ headerShown: false }} />
      <Stack.Screen name="individualGames" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
