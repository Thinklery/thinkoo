import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import FirstPageButton from "./StartingButton";

const Page1 = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/onboarding/onboarding1.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <FirstPageButton />
    </ImageBackground>
  );
};

export default Page1;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
