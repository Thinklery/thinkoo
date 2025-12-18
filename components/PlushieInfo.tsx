import { View, StyleSheet } from "react-native";
import React from "react";
import CustomText from "./CustomText";

const PlushieInfo = ({ string }: { string: string }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>{string}</CustomText>
    </View>
  );
};

export default PlushieInfo;

const white = "#FFFFFF";
const whiteGrey = "#C4C4C4";

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteGrey,
    margin: 10,
    opacity: 100,
  },
  text: {
    color: white,
    fontFamily: "Poppins-Bold",
    fontSize: 14,
  },
});
