import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";

const Images: Record<string, any> = {
  FindYourToy: require("@/assets/images/findYourToy.png"),
  WhatPlanetAreYou: require("@/assets/images/whatPlanetAreYou.png"),

  CosmicClash: require("@/assets/images/multiplayer.png"),
  RocketDash: require("@/assets/images/singleplayer.png"),
  RulesCosmicClash: require("@/assets/images/nfcNext.png"),
  RulesRocketDash: require("@/assets/images/singleplayer.png"),
  Individual_CosmicClash: require("@/assets/images/nfcNext.png"),
  Individual_RocketDash: require("@/assets/images/nfcNext.png"),
};

const Routes: { [key: string]: string } = {
  FindYourToy: "../nfc",
  WhatPlanetAreYou: "",

  CosmicClash: "../games/sync/CosmicClashPlayers",
  RocketDash: "",
  RulesCosmicClash: "../rules/RulesCosmicClash",
  RulesRocketDash: "../games/rules/RulesRocketDash",
  Individual_CosmicClash: "../games/CosmicClash",
  Individual_RocketDash: "../games/RocketDash",
};

const Button = ({ name }: { name: string }) => {
  return (
    <TouchableOpacity onPress={() => router.push(`${Routes[name]}`)}>
      <Image source={Images[name]} style={styles.image}></Image>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: 250,
    height: 80,
  },
});
