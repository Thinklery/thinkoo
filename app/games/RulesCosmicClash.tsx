import { View, StyleSheet, Image } from "react-native";
import React from "react";
import GameStart from "@/components/games/GameStart";
import Background from "@/components/Background";
import NavigationBack from "@/components/NavigationBack";

const RulesCosmicClash = () => {
  return (
    <Background>
      <NavigationBack />
      <View style={styles.contents}>
        <Image
          source={require("@/assets/images/cosmicClash.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/images/cosmicClashRules.png")}
          style={styles.image}
        />
      </View>
      <GameStart title="Individual_CosmicClash" />
    </Background>
  );
};

export default RulesCosmicClash;

const styles = StyleSheet.create({
  contents: {
    alignItems: "center",
    width: "100%"
  },
  image: {
    width: "80%",
    resizeMode: "contain",
  },
});
