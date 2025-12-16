import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const imageMap: Record<string, any> = {
  backBordered: require("@/assets/images/backButton.png"),
  reset: require("@/assets/images/reset.png"),
};

const BackButton = ({
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
          router.back();
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

export default BackButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start", // top-left alignment
    marginLeft: 20,
    marginTop: 20,
  },
  button: {
    width: 70, // Adjust size to fit your PNG
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
