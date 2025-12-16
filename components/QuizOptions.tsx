import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";

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
        <CustomText
          style={{ color: "white", fontFamily: "Poppins-Bold", fontSize: 14 }}
        >
          {option}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default QuizOptions;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    width: 250,
    paddingVertical: 5,
    paddingHorizontal: 12, 
    justifyContent: "center",
    borderRadius: 21,
		backgroundColor: "#C4C4C4",
    opacity: 1,
  },
});
