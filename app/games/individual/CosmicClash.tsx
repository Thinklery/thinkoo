import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import Background from "@/components/Background";
import winPatterns from "@/lib/winPatterns";
import { router } from "expo-router";
import { Colours } from "@/lib/colours";

import GRID_IMAGE from "@/assets/images/games/grid.png";
import MoonImage from "@/assets/images/games/moon.png";
import MarsImage from "@/assets/images/games/mars.png";

const CosmicClash = () => {
  // const plushie: plushiePowerUpType = {
  //   name: "Hello",
  //   level: 2,
  //   power: "erase",
  // };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("Mars");
  const [winner, setWinner] = useState<string | null>(null);
  // const [powerUsed, setPowerUsed] = useState(false);
  const [turnNumber, setTurnNumber] = useState(0);

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    // setPowerUsed(false);
    setTurnNumber(0);
    setTurn("Mars");
  };

  useEffect(() => {
    if (turnNumber >= 9) resetBoard();
  }, [turnNumber]);

  const checkWinner = (b: string[]) => {
    for (let pattern of winPatterns) {
      const [a, b2, c] = pattern;
      if (b[a] && b[a] === b[b2] && b[a] === b[c]) return b[a];
    }
    return null;
  };

  const handlePress = (i: number) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = turn;
    setBoard(newBoard);

    const w = checkWinner(newBoard);
    if (w) {
      setWinner(w);
      return;
    }

    setTurn(turn === "Mars" ? "Moon" : "Mars");
    setTurnNumber((prev) => prev + 1);
  };

  // const activatePower = (action: string) => {
  //   if (powerUsed || winner) return;

  //   if (action === "erase") {
  //     const last = board.lastIndexOf(turn === "Mars" ? "Moon" : "Mars");
  //     if (last !== -1) {
  //       const newBoard = [...board];
  //       newBoard[last] = null;
  //       setBoard(newBoard);
  //     }
  //   }

  //   if (action === "swap") {
  //     const tiles = board.map((v, i) => (v ? i : i)).filter(Boolean);
  //     if (tiles.length >= 2) {
  //       const newBoard = [...board];
  //       const a = tiles[0];
  //       const b = tiles[1];
  //       const temp = newBoard[a];
  //       newBoard[a] = newBoard[b];
  //       newBoard[b] = temp;
  //       setBoard(newBoard);
  //     }
  //   }

  //   setPowerUsed(true);
  // };

  const cellPositions = [
    { top: 0, left: 0 },
    { top: 0, left: "33.33%" },
    { top: 0, left: "66.66%" },
    { top: "33.33%", left: 0 },
    { top: "33.33%", left: "33.33%" },
    { top: "33.33%", left: "66.66%" },
    { top: "66.66%", left: 0 },
    { top: "66.66%", left: "33.33%" },
    { top: "66.66%", left: "66.66%" },
  ];

  useEffect(() => {
    if (winner) {
      resetBoard();
      router.push({
        pathname: `../../quiz?winner=${winner}`,
      });
    }
  }, [winner]);

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.turnWrapper}>
          <Text style={styles.turnLabel}>Turn: </Text>
          <Image
            source={turn === "Mars" ? MarsImage : MoonImage}
            style={styles.turnImage}
          />
        </View>
        <View style={styles.gridWrapper}>
          <ImageBackground
            source={GRID_IMAGE}
            style={styles.grid}
            resizeMode="contain"
          >
            {board.map((val, i) => (
              <Pressable
                key={i}
                onPress={() => handlePress(i)}
                style={[styles.cell, cellPositions[i]]}
              >
                {val === "Mars" && (
                  <Image source={MarsImage} style={styles.piece} />
                )}
                {val === "Moon" && (
                  <Image source={MoonImage} style={styles.piece} />
                )}
              </Pressable>
            ))}
          </ImageBackground>
        </View>
        {/* {!powerUsed && plushie?.power && (
        <Pressable
          onPress={() => activatePower(plushie.power)}
          style={styles.powerButton}
        >
          <Text style={styles.powerText}>
            Use Plushie Power: {plushie.power}
          </Text>
        </Pressable>
      )} */}
      </View>
    </Background>
  );
};

export default CosmicClash;

const styles = StyleSheet.create({
  cell: {
    alignItems: "center",
    height: "33.33%",
    justifyContent: "center",
    position: "absolute",
    width: "33.33%",
  },
  container: { alignItems: "center", flex: 1, justifyContent: "center" },
  grid: { flex: 1 },
  gridWrapper: { height: 300, width: 300 },
  piece: { height: 60, resizeMode: "contain", width: 60 },
  // powerButton: {
  //   backgroundColor: "#ffafcc",
  //   borderRadius: 10,
  //   marginTop: 20,
  //   padding: 12,
  // },
  // powerText: { fontSize: 20 },
  turnImage: {
    height: 40,
    marginLeft: 8,
    resizeMode: "contain",
    width: 40,
  },
  turnLabel: {
    color: Colours.white,
    fontSize: 28,
  },
  turnWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
});
