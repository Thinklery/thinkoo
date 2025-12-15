import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import useOnboardingStore from "@/utils/useOnboardingStore";
import { router } from "expo-router";

const ForwardButton = () => {
  const currentPage = useOnboardingStore((state) => state.currentPage);
  const setPage = useOnboardingStore((state) => state.setPage);

  const handlePress = () => {
    if (currentPage < 5) {
      setPage(currentPage + 1);
    } else {
      router.push("../user");
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require("../../assets/images/forwardButton.png")}
          resizeMode="contain"
          style={styles.button}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default ForwardButton;

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
  },
});
