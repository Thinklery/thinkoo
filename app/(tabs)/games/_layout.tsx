import { Stack } from "expo-router";

export default function GameStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Games" }} />
    </Stack>
  );
}
