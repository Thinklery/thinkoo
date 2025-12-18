import {
  View,
  Image,
  Dimensions,
  PanResponder,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CustomText from "@/components/CustomText";
import Background from "@/components/Background";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import { Colours } from "@/lib/colours";

const { width } = Dimensions.get("window");

type AsteroidType = {
  id: number;
  x: number;
  y: number;
  number: number;
};

// let asteroidIdCounter = 0;

const RocketDash = () => {
  const [asteroids, setAsteroids] = useState<AsteroidType[]>([]);
  const [score, setScore] = useState(0);
  const [task, setTask] = useState<"even" | "odd">("even");
  const [layoutHeight, setLayoutHeight] = useState(0);

  const rocketSize = 80; // bigger rocket
  const asteroidSize = 60; // bigger asteroid
  const spaceshipX = useRef(width / 2 - rocketSize / 2);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      let newX = gestureState.moveX - rocketSize / 2;
      if (newX < 0) newX = 0;
      if (newX > width - rocketSize) newX = width - rocketSize;
      spaceshipX.current = newX;
    },
  });

  // Spawn asteroids
  useEffect(() => {
    const interval = setInterval(() => {
      const number = Math.floor(Math.random() * 20) + 1;
      const x = Math.random() * (width - asteroidSize);
      setAsteroids((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(), // unique id
          x,
          y: 0,
          number,
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Move asteroids and check collisions
  useEffect(() => {
    if (layoutHeight === 0) return;

    const loop = setInterval(() => {
      setAsteroids((prev) => {
        const collided: number[] = [];
        const updated = prev
          .map((a) => {
            const newY = a.y + 5;

            // Spaceship boundaries
            const spaceshipTop = layoutHeight - rocketSize;
            const spaceshipBottom = layoutHeight;
            const spaceshipLeft = spaceshipX.current;
            const spaceshipRight = spaceshipX.current + rocketSize;

            const asteroidTop = newY;
            const asteroidBottom = newY + asteroidSize;
            const asteroidLeft = a.x;
            const asteroidRight = a.x + asteroidSize;

            if (
              asteroidBottom >= spaceshipTop &&
              asteroidTop <= spaceshipBottom &&
              asteroidRight >= spaceshipLeft &&
              asteroidLeft <= spaceshipRight
            ) {
              if (
                (task === "even" && a.number % 2 === 0) ||
                (task === "odd" && a.number % 2 === 1)
              ) {
                setScore((s) => s + 1);
              } else {
                setScore((s) => s - 1);
              }
              collided.push(a.id);
            }

            return { ...a, y: newY };
          })
          .filter((a) => a.y < layoutHeight && !collided.includes(a.id));

        return updated;
      });
    }, 50);

    return () => clearInterval(loop);
  }, [task, layoutHeight]);

  return (
    <Background>
      <View
        style={styles.mainContainer}
        onLayout={(e) => setLayoutHeight(e.nativeEvent.layout.height)}
        {...panResponder.panHandlers}
      >
        {/* Custom background */}
        <Image
          source={require("@/assets/images/commonBackground.png")}
          style={styles.background}
          resizeMode="cover"
        />

        <BackNavigationBar />

        {/* Asteroids with numbers */}
        {asteroids.map((a) => (
          <View
            key={`asteroid-${a.id}`}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              position: "absolute",
              left: a.x,
              top: a.y,
              width: asteroidSize,
              height: asteroidSize,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("@/assets/images/games/asteroid.png")}
              style={{ width: asteroidSize, height: asteroidSize }}
              resizeMode="contain"
            />
            <CustomText style={styles.asteroidText}>{a.number}</CustomText>
          </View>
        ))}

        <Image
          source={require("@/assets/images/games/rocket.png")}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: "absolute",
            left: spaceshipX.current,
            top: layoutHeight - rocketSize,
            width: rocketSize,
            height: rocketSize,
          }}
          resizeMode="contain"
        />

        <View style={styles.scoreContainer}>
          <CustomText style={styles.customText}>Score: {score}</CustomText>
          <CustomText style={styles.customText}>
            Collect {task} numbers!
          </CustomText>
        </View>
      </View>
    </Background>
  );
};

export default RocketDash;

const styles = StyleSheet.create({
  asteroidText: {
    color: Colours.black,
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    position: "absolute",
  },

  background: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  customText: {
    fontSize: 24,
  },
  mainContainer: {
    alignItems: "center",
    flex: 1,
    marginTop: "20%",
  },

  scoreContainer: {
    alignItems: "center",
    alignSelf: "center",

    position: "absolute",

    top: 100,
  },
});
