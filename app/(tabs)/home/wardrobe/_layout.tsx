import { Stack } from "expo-router";

export default function WardrobeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Wardrobe" }}
      />
    </Stack>
  );
}
