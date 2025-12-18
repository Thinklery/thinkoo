import { StyleSheet, Image } from "react-native";
import React from "react";
import Background from "@/components/Background";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import Button from "@/components/Button";

const RulesCosmicClash = () => {
  return (
    <Background containerStyle={styles.background}>
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
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    marginVertical: -100,
    resizeMode: "contain",
    width: 300,
  },
});
