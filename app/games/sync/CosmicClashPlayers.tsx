import React from "react";
import Background from "@/components/Background";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import PlayerBox from "@/components/PlayerBox";
import Button from "@/components/Button";
import { StyleSheet } from "react-native";

const CosmicClashPlayers = () => {
  return (
    <Background containerStyle={styles.background}>
      <BackNavigationBar />
      <PlayerBox player="player1" />

      <PlayerBox player="player2" />
      <Button name="RulesCosmicClash" />
    </Background>
  );
};

export default CosmicClashPlayers;

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
