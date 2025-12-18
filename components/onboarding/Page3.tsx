import { View, StyleSheet, Image } from "react-native";
import React from "react";
import ForwardButton from "@/components/onboarding/ForwardButton";
import ProgressBar from "./ProgressBar";
import Paragraph from "./Paragraph";

const Page3 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/commonBackground.png")}
        resizeMode="cover"
        style={styles.background}
      />
      <Image
        source={require("@/assets/images/onboarding/onboarding3.png")}
        resizeMode="contain"
        style={styles.content}
      />
      <Paragraph
        mainHeader="Play games with your friends"
        subHeader="Challenge your buddies in fast, fun cosmic battles."
      />

      <View style={styles.progress}>
        <ProgressBar />
        <ForwardButton />
      </View>
    </View>
  );
};

export default Page3;

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
