import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import useOnboardingStore from "@/utils/useOnboardingStore";

const ForwardButton = () => {
  const currentPage = useOnboardingStore((state) => state.currentPage);
  const setPage = useOnboardingStore((state) => state.setPage);

  const handlePress = () => {
    setPage(currentPage + 1);
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
