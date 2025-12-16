import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Background from "@/components/Background";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import Button from "@/components/Button";

const RulesCosmicClash = () => {
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
        source={require("@/assets/images/games/cosmicClashRules.png")}
        style={styles.image}
      />

      <Button name="Individual_CosmicClash" />
    </Background>
  );
};

export default RulesCosmicClash;

const styles = StyleSheet.create({
  image: {
    width: 300,
    resizeMode: "contain",
		marginVertical: -100,
  },
});


