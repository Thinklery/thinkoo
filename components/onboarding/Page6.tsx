import { View, StyleSheet, Image, TextInput } from "react-native";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Paragraph from "./Paragraph";
import SubmitButton from "./SubmitButton";

const Page6 = () => {
    const [name, setName] = useState("");

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
        mainHeader="We need your help!"
        subHeader="What is your name?"
      />
      <TextInput placeholder="Enter your name" style={styles.textInput} value={name} onChangeText={setName}></TextInput>

      <View style={styles.progress}>
        <ProgressBar />
        <SubmitButton name={name} />
      </View>
    </View>
  );
};

export default Page6;

const white = "#FFFFFF";

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
  textInput: {
    backgroundColor: white,
  },
});
