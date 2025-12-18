import { StyleSheet, View } from "react-native";
import React from "react";
import usePersonalityStore from "@/utils/personality-quiz/usePersonalityStore";
import { questions } from "@/lib/personality-quiz/questions";
import PersonalityOptions from "@/components/personality-quiz/PersonalityOptions";

const PersonalityQuiz = () => {
  const page = usePersonalityStore((state) => state.currentPage);
  const setPage = usePersonalityStore((state) => state.setPage);
  const optionsSelected = usePersonalityStore((state) => state.optionsSelected);
  const setOptionsSelected = usePersonalityStore(
    (state) => state.setOptionsSelected
  );

  const questionNumber = page - 3;
  const question = questions[questionNumber];
  const options = question.options;

  return (
    <View>
      {options.map((option, index) => (
        <PersonalityOptions />
      ))}
    </View>
  );
};

export default PersonalityQuiz;

const styles = StyleSheet.create({});
