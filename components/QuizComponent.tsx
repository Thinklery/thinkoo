import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import QuizOptions from "./QuizOptions";
import popUpQuesions from "@/lib/popUpQuestions";
import useQuizStore from "@/utils/useQuizStore";
import CustomText from "./CustomText";

const QuizComponent = () => {
  const setOptionsSelected = useQuizStore((state) => state.setOptionSelected);
  const optionsSelected = useQuizStore((state) => state.optionsSelected);

  const questionNumber = 0;
  const currentQuestion = popUpQuesions[questionNumber];

  const isCorrect =
    optionsSelected[questionNumber] === popUpQuesions[questionNumber].answer;

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("@/assets/images/quiz/quizFrame.png")}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.content}>
          {isCorrect ? (
            <CustomText style={styles.header1}>
              {popUpQuesions[questionNumber].explaination}
            </CustomText>
          ) : (
            <>
              <CustomText style={styles.header1}>
                Answer one more to win the game!
              </CustomText>
              <CustomText style={styles.header2}>
                {currentQuestion.question}
              </CustomText>
              {currentQuestion.options.map((val, index) => (
                <QuizOptions
                  key={index}
                  onPress={() => setOptionsSelected(val, 0)}
                  option={val}
                />
              ))}
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default QuizComponent;

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    borderRadius: 12,
    height: 500,
    justifyContent: "center",
    padding: 20,
    width: 350,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  header1: {
    fontSize: 16,
    padding: 10,
  },
  header2: {
    fontSize: 14,
    paddingBottom: 10,
  },
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
