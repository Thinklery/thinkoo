import { Text, View, Image } from "react-native";
import * as Clipboard from "expo-clipboard";

export default function FriendProfileCard({
  name,
  userId,
}: {
  name: string;
  userId: string;
}) {
  return (
    <View
      style={{
        backgroundColor: "lightgray",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          justifyContent: "space-between",
          borderRadius: 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={require("../assets/images/moon.png")}
            style={{
              resizeMode: "contain",
              width: 50,
              height: 50,
            }}
          />
          <View>
            <Text>Name: JohnDoe</Text>
            <Text>User ID: 123456</Text>
          </View>
        </View>

        <Image
          source={require("../assets/images/copy_icon.png")}
          style={{
            resizeMode: "contain",
            width: 20,
            height: 20,
            paddingHorizontal: 20,
          }}
          onTouchEnd={() => {
            Clipboard.setStringAsync(userId);
          }}
        />
      </View>
    </View>
  );
}
