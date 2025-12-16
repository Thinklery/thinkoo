import { View, StyleSheet, Image } from "react-native";
import React from "react";
import ForwardButton from "@/components/onboarding/ForwardButton";
import ProgressBar from "./ProgressBar";
import Paragraph from "./Paragraph";

const Page4 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/commonBackground.png")}
        resizeMode="cover"
        style={styles.background}
      />
      <Image
        source={require("../../assets/images/onboarding/onboarding4.png")}
        resizeMode="contain"
        style={styles.content}
      />
      <Paragraph
        mainHeader="Learn new things together"
        subHeader="Explore tiny space facts, fun quizzes, and bite-sized knowledge from your adorable planets."
      />

      <View style={styles.progress}>
        <ProgressBar />
        <ForwardButton />
      </View>
    </View>
  );
};

export default Page4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  content: {
    alignSelf: "center",
    width: "90%",
    height: "30%",
    marginTop: "20%",
  },
  progress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
    marginTop: 20,
  },
});
