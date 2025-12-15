import { View, StyleSheet, Image } from "react-native";
import React from "react";
import ForwardButton from "@/components/onboarding/ForwardButton";
import ProgressBar from "./ProgressBar";
import Paragraph from "./Paragraph";

const Page5 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/commonBackground.png")}
        resizeMode="cover"
        style={styles.background}
      />
      <Image
        source={require("../../assets/images/onboarding5.png")}
        resizeMode="contain"
        style={styles.content}
      />
      <Paragraph
        mainHeader="Redeem cosmic rewards"
        subHeader="Use your points to unlock cute plushies, fun items, and surprises across the galaxy."
      />

      <View style={styles.progress}>
        <ProgressBar />
        <ForwardButton />
      </View>
    </View>
  );
};

export default Page5;

const styles = StyleSheet.create({
  background: {
    bottom: 0,
    height: "100%",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
  },
  container: {
    flex: 1,
  },
  content: {
    alignSelf: "center",
    height: "30%",
    marginTop: "20%",
    width: "90%",
  },
  progress: {
    alignItems: "center",
    flexDirection: "row",
    gap: 50,
    justifyContent: "center",
    marginTop: 20,
  },
});
