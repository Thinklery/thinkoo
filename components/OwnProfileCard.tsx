import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";

export default function OwnProfileCard() {
  const [userId] = useState("123456");
  return (
    <View style={styles.card}>
      <View style={styles.cardMainContentLayout}>
        <View style={styles.cardProfileInfoLayout}>
          <Image
            source={require("../assets/images/moon.png")}
            style={styles.profileImage}
          />
          <View>
            <Text>Name: JohnDoe</Text>
            <TouchableOpacity
              onPress={() => {
                Clipboard.setStringAsync(userId);
              }}
            >
              <Text>User ID: {userId}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            Clipboard.setStringAsync(userId);
          }}
        >
          <Image
            source={require("../assets/images/copy_icon.png")}
            style={styles.copyIconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const cardFillColour = "#fff";

const styles = StyleSheet.create({
  card: {
    backgroundColor: cardFillColour,
    borderRadius: 10,
    padding: 8,
  },
  // Layout for Clipboard and profile info
  cardMainContentLayout: {
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    padding: 10,
  },
  cardProfileInfoLayout: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  copyIconImage: {
    height: 20,
    paddingHorizontal: 20,
    resizeMode: "contain",
    width: 20,
  },
  profileImage: {
    height: 50,
    resizeMode: "contain",
    width: 50,
  },
});
