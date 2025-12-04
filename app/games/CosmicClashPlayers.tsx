import React from "react";
import Background from "@/components/Background";
import GameStart from "@/components/games/GameStart";
import { StyleSheet, View } from "react-native";
import NavigationBack from "@/components/NavigationBack";
import PlayerBox from "@/components/PlayerBox";

const CosmicClashPlayers = () => {
  return (
    <Background containerStyle={styles.container}>
      <NavigationBack />
      <View>
        <PlayerBox player="player1" />

        <View style={styles.spacing} />

        <PlayerBox player="player2" />
      </View>
      <GameStart title="RulesCosmicClash" />
    </Background>
  );
};


const styles = StyleSheet.create({
  container: {
    gap:20
  },
  spacing: {
    height: 40,
  }
});

export default CosmicClashPlayers;
