import { StyleSheet, Image, View } from "react-native";
import React from "react";
import Background from "@/components/Background";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import Button from "@/components/Button";
import { router } from "expo-router";

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
		height: 500,
    width: 300,
    resizeMode: "contain",
  },
});
