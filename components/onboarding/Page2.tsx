import { View, StyleSheet, Image } from "react-native";
import React from "react";
import ForwardButton from "@/components/onboarding/ForwardButton";
import ProgressBar from "./ProgressBar";
import Paragraph from "./Paragraph";
import Background from "../Background";

const Page2 = () => {
  return (
    <Background>
      <Image
        source={require("../../assets/images/onboarding2.png")}
        resizeMode="contain"
        style={styles.content}
      />
      <Paragraph
        mainHeader="Adopt your own planet"
        subHeader="Every planet has a personality Take the test and discover which you are!"
      />

      <View style={styles.progress}>
        <ProgressBar />
        <ForwardButton />
      </View>
    </Background>
  );
};

export default Page2;

const styles = StyleSheet.create({
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
