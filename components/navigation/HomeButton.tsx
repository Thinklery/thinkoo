import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const imageMap: Record<string, any> = {
  homeBordered: require("@/assets/images/navigation/homeBordered.png"),
  home: require("@/assets/images/navigation/home_inactive.png"),
};


const HomeButton = ({ onPress, type }: { onPress: () => void, type: string }) => {
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
          source={imageMap[type]}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    height: 48,
    justifyContent: "center",
    width: 48,
  },
  container: {
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
