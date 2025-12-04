import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import CustomText from "./CustomText";

const PopUpOptions = ({
  option,
  onPress,
}: {
  option: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <CustomText style={styles.text}>{option}</CustomText>
      </Pressable>
    </View>
  );
};

export default PopUpOptions;

const whiteGray = "#C4C4C4";
const white = "#FFFFFF";

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 5,
    width: 250,
  },
  container: {
    backgroundColor: whiteGray,
    margin: 10,
    opacity: 100,
  },

  text: {
    color: white,
    fontFamily: "Poppins-Bold",
    fontSize: 14,
  },
});
