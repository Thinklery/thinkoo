import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { Colours } from "@/lib/colours";

const QuizOptions = ({
  option,
  onPress,
}: {
  option: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <CustomText style={styles.customText}>{option}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default QuizOptions;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.lightGray,
    borderRadius: 21,
    justifyContent: "center",
    opacity: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    width: 250,
  },
  container: {
    margin: 10,
  },
  customText: {
    fontSize: 14,
  },
});
