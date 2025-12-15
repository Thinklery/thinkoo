import { router } from "expo-router";
import { View, Button } from "react-native";

export function HomeScreen() {
  return (
    <View>
      <Button
        title="Wardrobe"
        onPress={() => router.push("/(tabs)/home/wardrobe")}
      />
      <Button
        title="Leaderboard"
        onPress={() => router.push("/(tabs)/home/leaderboard")}
      />
    </View>
  );
}
