import { View, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { Colours } from "@/lib/colours";

const PlushieInfoCard = ({ plushie }: { plushie: PlushieInfoType }) => {
  const imageSource = plushie.type?.type === "Moon"
    ? require("@/assets/images/games/moon.png")
    : require("@/assets/images/games/mars.png");
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
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameImage: {
    alignItems: "center",
    height: 180,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: 250,
  },
  plushieImage: {
    height: 200,
    marginBottom: 10,
    width: 200,
  },
  text: {
    color: Colours.white,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    paddingVertical: 4,
  },
});
