import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";

const images: Record<string, any> = {
  FindYourToy: require("@/assets/images/findYourToy.png"),
  WhatPlanetAreYou: require("@/assets/images/whatPlanetAreYou.png"),
};

const HomeFunctionButton = ({ type }: { type: string }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push("../nfc")}
    >
      <Image
        source={images[type]}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </TouchableOpacity>
  );
};

export default HomeFunctionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
  },
  image: {
    width: "80%",
  },
});
