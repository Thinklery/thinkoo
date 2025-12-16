import { StyleSheet, Image, View } from "react-native";
import React from "react";
import Background from "@/components/Background";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import Button from "@/components/Button";

const RulesRocketDash = () => {
  return (
    <Background>
      <BackNavigationBar />

      <View style={styles.contents}>
        <Image
          source={require("@/assets/images/rocketDash.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/rocketDashRules.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Button name="Individual_RocketDash" />
    </Background>
  );
};

export default RulesRocketDash;

const styles = StyleSheet.create({
  contents: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
  },
});
