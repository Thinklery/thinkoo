import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

const CustomText = ({ style, ...props }: TextProps) => {
  return <Text {...props} style={[styles.default, style]} />;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "Poppins-Regular",
  },
  bold: {
    fontFamily: "Poppins-Bold",
  },
});

export default CustomText;
