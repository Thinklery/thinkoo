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

const GRID_IMAGE = require("@/assets/images/games/grid.png");
const MoonImage = require("@/assets/images/games/moon.png");
const MarsImage = require("@/assets/images/games/mars.png");

const CosmicClash = () => {
  const plushie: plushiePowerUpType = {
    name: "Hello",
    level: 2,
    power: "erase",
  };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("Mars");
  const [winner, setWinner] = useState<string | null>(null);
  const [powerUsed, setPowerUsed] = useState(false);
  const [turnNumber, setTurnNumber] = useState(0);

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setPowerUsed(false);
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

  const activatePower = (action: string) => {
    if (powerUsed || winner) return;

    if (action === "erase") {
      const last = board.lastIndexOf(turn === "Mars" ? "Moon" : "Mars");
      if (last !== -1) {
        const newBoard = [...board];
        newBoard[last] = null;
        setBoard(newBoard);
      }
    }

    if (action === "swap") {
      const tiles = board.map((v, i) => (v ? i : i)).filter(Boolean);
      if (tiles.length >= 2) {
        const newBoard = [...board];
        const a = tiles[0];
        const b = tiles[1];
        const temp = newBoard[a];
        newBoard[a] = newBoard[b];
        newBoard[b] = temp;
        setBoard(newBoard);
      }
    }

    setPowerUsed(true);
  };

  // Positions for each cell on the 3x3 grid
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
      )} */}{" "}
      </View>
    </Background>
  );
};

export default CosmicClash;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  turnText: { fontSize: 28, marginBottom: 10, color: "white" },
  gridWrapper: { width: 300, height: 300 },
  grid: { flex: 1 },
  cell: {
    position: "absolute",
    width: "33.33%",
    height: "33.33%",
    justifyContent: "center",
    alignItems: "center",
  },
  piece: { width: 60, height: 60, resizeMode: "contain" },
  powerButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#ffafcc",
    borderRadius: 10,
  },
  powerText: { fontSize: 20 },
  turnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  turnLabel: {
    fontSize: 28,
    color: "white",
  },
  turnImage: {
    width: 40,
    height: 40,
    marginLeft: 8,
    resizeMode: "contain",
  },
});
