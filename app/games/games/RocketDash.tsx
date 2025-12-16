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

const { width } = Dimensions.get("window");

type AsteroidType = {
  id: number;
  x: number;
  y: number;
  number: number;
};

let asteroidIdCounter = 0;

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
        style={{ flex: 1, marginTop: "20%" }}
        onLayout={(e) => setLayoutHeight(e.nativeEvent.layout.height)}
        {...panResponder.panHandlers}
      >
        {/* Custom background */}
        <Image
          source={require("@/assets/images/commonBackground.png")}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />

        <BackNavigationBar />

        {/* Asteroids with numbers */}
        {asteroids.map((a) => (
          <View
            key={`asteroid-${a.id}`}
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
              source={require("@/assets/images/asteroid.png")}
              style={{ width: asteroidSize, height: asteroidSize }}
              resizeMode="contain"
            />
            <CustomText
              style={{
                position: "absolute",
                color: "black",
                fontSize: 20,
                fontFamily: "Poppins-Bold",
              }}
            >
              {a.number}
            </CustomText>
          </View>
        ))}

        {/* Spaceship */}
        <Image
          source={require("@/assets/images/rocket.png")}
          style={{
            position: "absolute",
            left: spaceshipX.current,
            top: layoutHeight - rocketSize,
            width: rocketSize,
            height: rocketSize,
          }}
          resizeMode="contain"
        />

        {/* Score and Task */}
        <View
          style={{
            position: "absolute",
            top: 100,
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <CustomText
            style={{ color: "white", fontSize: 24, fontFamily: "Poppins-Bold" }}
          >
            Score: {score}
          </CustomText>
          <CustomText
            style={{ color: "white", fontSize: 24, fontFamily: "Poppins-Bold" }}
          >
            Collect {task} numbers!
          </CustomText>
        </View>
      </View>
    </Background>
  );
};

export default RocketDash;

const styles = StyleSheet.create({});
