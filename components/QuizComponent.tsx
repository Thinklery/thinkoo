import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import QuizOptions from "./QuizOptions";
import popUpQuesions from "@/lib/popUpQuestions";
import useQuizStore from "@/utils/useQuizStore";
import CustomText from "./CustomText";

const QuizComponent = () => {
  const setOptionsSelected = useQuizStore((state) => state.setOptionSelected);
  const optionsSelected = useQuizStore((state) => state.optionsSelected);

  const questionNumber = 0;
  const currentQuestion = popUpQuesions[questionNumber]

  const isCorrect = optionsSelected[questionNumber] === popUpQuesions[questionNumber].answer;

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("@/assets/images/quiz/quizFrame.png")}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.content}>
          {isCorrect ? (
            <CustomText
              style={{
                color: "white",
                fontFamily: "Poppins-Bold",
                fontSize: 16,
                padding: 10,
              }}
            >
              {popUpQuesions[questionNumber].explaination}
            </CustomText>
          ) : (
            <>
              <CustomText
                style={{
                  color: "white",
                  fontFamily: "Poppins-Bold",
                  fontSize: 16,
                  padding: 10,
                }}
              >
                Answer one more to win the game!
              </CustomText>
              <CustomText
                style={{
                  color: "white",
                  fontFamily: "Poppins-Bold",
                  fontSize: 14,
                  paddingBottom: 10,
                }}
              >
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
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    width: 350,
    padding: 20,
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff", // use a color that contrasts your background
  },
});
