import { Text, View, Image, StyleSheet } from "react-native";

export default function FriendProfileCard({
  name,
  userId,
}: {
  name: string;
  userId: string;
}) {
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
            <Text>User ID: 123456</Text>
          </View>
        </View>

        <Image
          source={require("../assets/images/reject_icon.png")}
          style={styles.rejectIconImage}
        />
        <Image
          source={require("../assets/images/accept_icon.png")}
          style={styles.acceptIconImage}
        />
      </View>
    </View>
  );
}

const cardFillColour = "#fff";

const styles = StyleSheet.create({
  acceptIconImage: {
    height: 28,
    resizeMode: "contain",
    width: 28,
  },
  card: {
    backgroundColor: cardFillColour,
    borderRadius: 10,
    padding: 8,
  },
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
  profileImage: {
    height: 50,
    resizeMode: "contain",
    width: 50,
  },
  rejectIconImage: {
    height: 25,
    resizeMode: "contain",
    width: 25,
  },
});
