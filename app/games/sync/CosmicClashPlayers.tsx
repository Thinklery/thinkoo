import React from "react";
import Background from "@/components/Background";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import PlayerBox from "@/components/PlayerBox";
import Button from "@/components/Button";

const CosmicClashPlayers = () => {
  return (
    <Background
      containerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
				gap: 10
      }}
    >
      <BackNavigationBar />
      <PlayerBox player="player1" />

      <PlayerBox player="player2" />
      <Button name="RulesCosmicClash" />
    </Background>
  );
};

export default CosmicClashPlayers;
