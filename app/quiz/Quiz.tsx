import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import Background from "@/components/Background";
import QuizComponent from "@/components/QuizComponent";
import useQuizStore from "@/utils/useQuizStore";
import popUpQuestions from "@/lib/popUpQuestions";
import useNfcStore from "@/utils/useNfcStore";
import NavigationBack from "@/components/NavigationBack";

const winnerImage: Record<string, any> = {
  Mars: require("@/assets/images/mars.png"),
  Moon: require("@/assets/images/moon.png"),
};

const Quiz = () => {
  const optionsSelected = useQuizStore((state) => state.optionsSelected);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const resetNFC = useNfcStore((state) => state.resetNFC);

  const { winner } = useGlobalSearchParams();
  const isCorrect = optionsSelected[0] === popUpQuestions[0].answer;
  console.log(winner);

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={
            isCorrect
              ? require("@/assets/images/correct.png")
              : require("@/assets/images/congratulations.png")
          }
          resizeMode="contain"
          style={styles.bannerImage}
        />
        <Image
          source={winnerImage[winner]}
          resizeMode="contain"
          style={styles.characterImage}
        />
      </View>
      <QuizComponent reset={resetQuiz} winner={winner} />

      <NavigationBack
        back={resetQuiz}
        backType="reset"
        home={() => {
          resetQuiz();
          resetNFC();
        }}
        homeType="home"
      />
    </Background>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  bannerImage: {
    aspectRatio: 2.5,
    height: undefined,
    width: "80%", // Adjust based on your image ratio
  },
  characterImage: {
    height: 200,
    marginBottom: 0,
    width: 200,
  },
  container: {
    alignItems: "center", // Center horizontally
    paddingTop: "20%",
  },
});
