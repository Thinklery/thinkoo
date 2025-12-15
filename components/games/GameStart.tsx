import {
  View,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const gameRoutes: { [key: string]: string } = {
  "Cosmic Clash": "../games/CosmicClashPlayers",
  "Rocket Dash": "../games/RocketDashPlayers",
  RulesCosmicClash: "./RulesCosmicClash",
  RulesRocketDash: "../games/RulesRocketDash",
  Individual_CosmicClash: "./individualGames/CosmicClash",
  Individual_RocketDash: "./individualGames/RocketDash",
};

const gameImages: { [key: string]: any } = {
  "Cosmic Clash": require("@/assets/images/multiplayer.png"),
  "Rocket Dash": require("@/assets/images/singleplayer.png"),
  RulesCosmicClash: require("@/assets/images/nfcNext.png"),
  RulesRocketDash: require("@/assets/images/singleplayer.png"),
  Individual_CosmicClash: require("@/assets/images/nfcNext.png"),
  Individual_RocketDash: require("@/assets/images/nfcNext.png"),
};

const GameStart = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`${gameRoutes[title]}`)}
      style={styles.container}
    >
      <Image
        source={gameImages[title]}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default GameStart;

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
