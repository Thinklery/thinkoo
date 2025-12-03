import React from "react";
import Background from "@/components/Background";
import GameStart from "@/components/games/GameStart";
import { StyleSheet, View } from "react-native";
import NavigationBack from "@/components/NavigationBack";
import PlayerBox from "@/components/PlayerBox";

const CosmicClashPlayers = () => {
  return (
    <Background containerStyle={{ gap: 20 }}>
      <NavigationBack />
      <View>
        <PlayerBox player="player1" />

        <View style={{ height: 40 }} />

        <PlayerBox player="player2" />
      </View>
      <GameStart title="RulesCosmicClash" />
    </Background>
  );
};

export default CosmicClashPlayers;
