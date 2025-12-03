import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import CustomText from "./CustomText";

const PlushieInfo = ({ string }: { string: string }) => {
  return (
    <View style={styles.container}>
      <CustomText
        style={{ color: "white", fontFamily: "Poppins-Bold", fontSize: 14 }}
      >
        {string}
      </CustomText>
    </View>
  );
};

export default PlushieInfo;

const styles = StyleSheet.create({
  container: { backgroundColor: "#C4C4C4", opacity: 100, margin: 10 },
  button: {
    width: 250,
    paddingVertical: 5,
    paddingHorizontal: 12, // ← adds space from left/right edges
    justifyContent: "center",
  },
});
