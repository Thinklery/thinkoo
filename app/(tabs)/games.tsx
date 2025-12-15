import Background from "@/components/Background";
import GameStart from "@/components/games/GameStart";
import React from "react";
import { StyleSheet, View } from "react-native";

const Learning = () => {
  return (
    <Background>
      <View style={styles.contents}>
        <GameStart title="Cosmic Clash" />

        <GameStart title="RulesRocketDash" />
      </View>
    </Background>
  );
};

export default Learning;

const styles = StyleSheet.create({
  contents: {
    alignContent: "center",
    flex: 1,
    justifyContent: "center",
  },
});
