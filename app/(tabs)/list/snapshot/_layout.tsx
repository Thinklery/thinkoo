import { Stack } from "expo-router";

export default function SnapshotLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Snapshot" }} />
    </Stack>
  );
}
