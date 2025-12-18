import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const imageMap: Record<string, any> = {
  backBordered: require("@/assets/images/navigation/backBordered.png"),
  reset: require("@/assets/images/navigation/reset_inactive.png"),
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
  button: {
    alignItems: "center",
    height: 48, 

    justifyContent: "center",
    width: 48,
  },
  container: {
    alignItems: "flex-start", // top-left alignment
    marginLeft: 20,
    marginTop: 20,
  },

  image: {
    height: "100%",
    width: "100%",
  },
});
