import { Colours } from "@/lib/colours";
import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

const CustomText = ({ style, ...props }: TextProps) => {
  return <Text {...props} style={[styles.default, style]} />;
};

const styles = StyleSheet.create({
  default: { color: Colours.white, fontFamily: "Poppins-Regular" },
});

export default CustomText;
