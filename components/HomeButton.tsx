import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const imageMap: Record<string, any> = {
  homeBordered: require("@/assets/images/backHome.png"),
  home: require("@/assets/images/home_inactive.png"),
};

const HomeButton = ({
  onPress,
  type,
}: {
  onPress: () => void;
  type: string;
}) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress();
          router.push("/(tabs)/home");
        }}
      >
        <Image
          source={imageMap[type]} // Your custom PNG
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start", // top-left alignment
    marginLeft: 20,
    marginTop: 20,
  },
  button: {
    width: 60, // Adjust size to fit your PNG
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
