import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import PopUpOptions from "./QuizOptions";
import popUpQuesions from "@/lib/popUpQuestions";
import useQuizStore from "@/utils/useQuizStore";
import CustomText from "./CustomText";

const QuizComponent = ({
  reset,
  winner,
}: {
  reset: () => void;
  winner: string | null;
}) => {
  const setOptionsSelected = useQuizStore((state) => state.setOptionSelected);
  const optionsSelected = useQuizStore((state) => state.optionsSelected);

  const questionNumber = 0;
  const currentQuestion = popUpQuesions[questionNumber] || {
    question: "",
    options: [],
    answer: "",
  };

  const isCorrect = optionsSelected[0] === popUpQuesions[0].answer;

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("@/assets/images/quizFrame.png")}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.content}>
          {isCorrect ? (
            <CustomText style={styles.explanationText}>
              {popUpQuesions[0].explaination}
            </CustomText>
          ) : (
            <>
              <CustomText style={styles.explanationText}>
                Answer one more to win the game!
              </CustomText>
              <CustomText style={styles.questionText}>
                {currentQuestion.question}
              </CustomText>
              {currentQuestion.options.map((val, index) => (
                <PopUpOptions
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

const white = "#FFFFFF";

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
  explanationText: {
    color: white,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    padding: 10,
  },
  questionText: {
    color: white,
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    paddingBottom: 10,
  },
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
