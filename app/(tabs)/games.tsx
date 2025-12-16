import Background from "@/components/Background";
import Button from "@/components/Button";
import React from "react";
import { StyleSheet, View } from "react-native";

const Learning = () => {
  return (
    <Background>
      <View style={styles.contents}>
        <Button name="CosmicClash" />
        <Button name="RulesRocketDash" />
      </View>
    </Background>
  );
};

export default Learning;

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
