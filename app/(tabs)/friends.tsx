import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { getFriends } from "@/utils/friendsApi";

type FriendRow = {
  id: string;
  display_name: string;
};

export default function FriendsScreen() {
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState<FriendRow[]>([]);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const rows = await getFriends();
      setFriends(rows);
    } catch (e: any) {
      Alert.alert("Could not load friends", e?.message ?? String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => router.push("/addFriend")}
        >
          <Text style={styles.primaryBtnText}>Add friend</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator />
          <Text style={styles.muted}>Loading…</Text>
        </View>
      ) : friends.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.muted}>
            No friends yet. Add one with a friend code.
          </Text>
        </View>
      ) : (
        <FlatList
          data={friends}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.display_name}</Text>
              <Text style={styles.cardSub} numberOfLines={1}>
                ID: {item.id}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const buttonColour = "#000";
const buttonTextColour = "#fff";
const loadingTextColour = "#666";
const cardBorderColour = "#eee";
const cardSubTextColour = "#444";

const styles = StyleSheet.create({
  card: {
    borderColor: cardBorderColour,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
  },
  cardSub: {
    color: cardSubTextColour,
    marginTop: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  center: {
    alignItems: "center",
    flex: 1,
    gap: 8,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  flatListContainer: {
    paddingBottom: 32,
    paddingTop: 12,
  },
  muted: { color: loadingTextColour },
  primaryBtn: {
    backgroundColor: buttonColour,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  primaryBtnText: {
    color: buttonTextColour,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
});
