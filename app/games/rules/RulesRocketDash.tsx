import { StyleSheet, Image } from "react-native";
import React from "react";
import Background from "@/components/Background";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import Button from "@/components/Button";

const RulesRocketDash = () => {
  return (
    <Background containerStyle={styles.background}>
      <BackNavigationBar />
      <Image
        source={require("@/assets/images/games/rocketDashRules.png")}
        style={styles.image}
      />

      <Button name="Individual_RocketDash" />
    </Background>
  );
};

export default RulesRocketDash;

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: 500,
    resizeMode: "contain",
    width: 300,
  },
});
