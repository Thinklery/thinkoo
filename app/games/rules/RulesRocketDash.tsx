import { StyleSheet, Image, View } from "react-native";
import React from "react";
import Background from "@/components/Background";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import Button from "@/components/Button";

const RulesRocketDash = () => {
  return (
    <Background
      containerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
  image: {
    width: 300,
  	resizeMode: "contain",
    marginVertical: -150,
  },
});
