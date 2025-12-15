import { StyleSheet, Image, View } from "react-native";
import React from "react";
import GameStart from "@/components/games/GameStart";
import Background from "@/components/Background";
import NavigationBack from "@/components/NavigationBack";

const RulesRocketDash = () => {
  return (
    <Background>
      <NavigationBack />

      <View style={styles.contents}>
        <Image
          source={require("@/assets/images/rocketDash.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/rocketDashRules.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <GameStart title="Individual_RocketDash" />
    </Background>
  );
};

export default RulesRocketDash;

const styles = StyleSheet.create({
  contents: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "70%",
  },
});
