import { Image, StyleSheet, View } from "react-native";
import React from "react";
import PlushieImageCard from "./PlushieImageCard";
import usePlushieStore from "@/utils/usePlushieStore";
import useNfcStore from "@/utils/useNfcStore";
import NFC from "./NFC";

const playerArr: Record<string, any> = {
  player1: require("@/assets/images/player1.png"),
  player2: require("@/assets/images/player2.png"),
};

const PlayerBox = ({ player }: { player: string }) => {
  const plushies = usePlushieStore((state) => state.plushies);
  const NfcId = useNfcStore((state) => state.NfcId);

  return (
    <View style={styles.playerBox}>
      <Image source={playerArr[player]} style={styles.playerLabel} />

      {NfcId[0] ? (
        <PlushieImageCard type={plushies[0].type.type} />
      ) : (
        <NFC index={0} />
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
    height: 70,
    resizeMode: "contain",
    width: 200,
  },
});
