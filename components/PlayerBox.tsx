import { Image, StyleSheet, View } from "react-native";
import React from "react";
import PlushieImageCard from "./PlushieImageCard";
import usePlushieStore from "@/utils/usePlushieStore";
import useNfcStore from "@/utils/useNfcStore";
import Nfc from "./Nfc";

const playerArr: Record<string, any> = {
  player1: require("@/assets/images/player1.png"),
  player2: require("@/assets/images/player2.png"),
};

const playerId: Record<string, number> = {
  player1: 0,
  player2: 1,
};

const PlayerBox = ({ player }: { player: string }) => {
  const plushies = usePlushieStore((state) => state.plushies);
  const NfcId = useNfcStore((state) => state.NfcId);

  return (
    <View style={styles.playerBox}>
      <Image source={playerArr[player]} style={styles.playerLabel} />

      {plushies[playerId[player]].name !== "" ? (
        <PlushieImageCard type={plushies[playerId[player]].type.type} />
      ) : (
        <Nfc index={playerId[player]} />
      )}
    </View>
  );
};

export default PlayerBox;

const styles = StyleSheet.create({
  playerBox: {
    alignItems: "center",
    gap: 20,
  },
  playerLabel: {
    width: 200,
    height: 70,
    resizeMode: "contain",
  },
});
