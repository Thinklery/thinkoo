import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomText from "../CustomText";

const Paragraph = ({
  mainHeader,
  subHeader,
}: {
  mainHeader: string;
  subHeader: string;
}) => {
  return (
    <View style={styles.CustomTextContainer}>
      <CustomText
        style={{
          fontFamily: "Poppins-Bold",
          color: "white",
          fontSize: 40,
        }}
      >
        {mainHeader}
      </CustomText>
      <CustomText
        style={{
          fontFamily: "Poppins-Regular",
          color: "white",
          fontSize: 20,
        }}
      >
        {subHeader}
      </CustomText>
    </View>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  CustomTextContainer: {
    gap: 20,
    alignItems: "flex-start",
    paddingLeft: 30,
    paddingRight: 30,
  },
});
