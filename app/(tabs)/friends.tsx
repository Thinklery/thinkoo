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
      <Text style={styles.title}>Friends</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => router.push("/addFriend")}
        >
          <Text style={styles.primaryBtnText}>Add friend</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn} onPress={load}>
          <Text style={styles.secondaryBtnText}>Refresh</Text>
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
          contentContainerStyle={{ paddingTop: 12, paddingBottom: 32 }}
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 28, fontWeight: "700" },
  row: { flexDirection: "row", gap: 10, marginTop: 12 },
  primaryBtn: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#111",
  },
  primaryBtnText: { color: "#fff", fontWeight: "600" },
  secondaryBtn: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  secondaryBtnText: { color: "#111", fontWeight: "600" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", gap: 8 },
  muted: { color: "#666" },
  card: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: "700" },
  cardSub: { marginTop: 4, color: "#444" },
});
