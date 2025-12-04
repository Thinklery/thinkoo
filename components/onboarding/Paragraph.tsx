import { View, StyleSheet } from "react-native";
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
        style={styles.MainHeaderText}
      >
        {mainHeader}
      </CustomText>
      <CustomText
        style={styles.SubHeaderText}
      >
        {subHeader}
      </CustomText>
    </View>
  );
};

export default Paragraph;

const white = "#FFFFFF";

const styles = StyleSheet.create({
  CustomTextContainer: {
    alignItems: "flex-start",
    gap: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  MainHeaderText: {
    color: white,
    fontFamily: "Poppins-Bold",
    fontSize: 40,
  },
  SubHeaderText: {
    color: white,
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  }
});
