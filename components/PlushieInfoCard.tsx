import { View, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import CustomText from "./CustomText";

const PlushieInfoCard = ({ plushie }: { plushie: PlushieInfoType }) => {
  const imageSource = plushie.type?.type === "Moon"
    ? require("@/assets/images/moon.png")
    : require("@/assets/images/mars.png");
	console.log(imageSource)

  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        resizeMode="contain"
        style={styles.plushieImage}
      />

      <ImageBackground
        source={require("@/assets/images/quiz/quizFrame.png")}
        style={styles.frameImage}
        resizeMode="contain"
      >
        <View style={styles.content}>
          <CustomText style={styles.text}>Name: {plushie?.name}</CustomText>
          <CustomText style={styles.text}>Level: {plushie?.level}</CustomText>
          <CustomText style={styles.text}>XP: {plushie?.xp}</CustomText>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PlushieInfoCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  plushieImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  frameImage: {
    width: 250,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    paddingVertical: 4,
  },
});
