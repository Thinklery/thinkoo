import { Image, StyleSheet } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import Background from "@/components/Background";
import QuizComponent from "@/components/QuizComponent";
import useQuizStore from "@/utils/useQuizStore";
import popUpQuestions from "@/lib/popUpQuestions";
import useNfcStore from "@/utils/useNfcStore";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import Floater from "@/components/Floater";

const winnerImage: Record<string, any> = {
  Mars: require("@/assets/images/games/mars.png"),
  Moon: require("@/assets/images/games/moon.png"),
};

const Quiz = () => {
  const optionsSelected = useQuizStore((state) => state.optionsSelected);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const resetNFC = useNfcStore((state) => state.resetNFC);

  const { winner } = useGlobalSearchParams();
  const isCorrect = optionsSelected[0] === popUpQuestions[0].answer;
  console.log(winner);

  return (
    <Background containerStyle={styles.containerStyle}>
      <Image
        source={
          isCorrect
            ? require("@/assets/images/quiz/correct.png")
            : require("@/assets/images/quiz/congratulations.png")
        }
        resizeMode="contain"
        style={styles.bannerImage}
      />
      <Floater src={winnerImage[String(winner)]} />

      <QuizComponent />
      <BackNavigationBar
        backType="reset"
        back={resetQuiz}
        homeType="home"
        home={() => {
          resetQuiz();
          resetNFC();
        }}
        style={styles.navigationBar}
      />
    </Background>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  bannerImage: {
    aspectRatio: 2.3,
    marginBottom: -40,
    marginTop: "10%",
    width: "80%",
  },

  containerStyle: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
	navigationBar :{
		marginBottom: 40
	}
});
