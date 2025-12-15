import { View, Text, Pressable, StyleSheet } from "react-native";
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
        <CustomText
          style={{ color: "white", fontFamily: "Poppins-Bold", fontSize: 14 }}
        >
          {option}
        </CustomText>
      </Pressable>
    </View>
  );
};

export default PopUpOptions;

const styles = StyleSheet.create({
  container: { backgroundColor: "#C4C4C4", opacity: 100, margin: 10 },
  button: {
    width: 250,
    paddingVertical: 5,
    paddingHorizontal: 12, // ← adds space from left/right edges
    justifyContent: "center",
  },
});
