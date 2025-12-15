import { View, Image, StyleSheet } from "react-native";
import React from "react";
import useOnboardingStore from "@/utils/useOnboardingStore";

const ProgressBar = () => {
  const currentPage = useOnboardingStore((state) => state.currentPage);
  const totalPages = 6;
  return (
    <View style={styles.container}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Image
          key={index}
          source={
            index + 1 === currentPage
              ? require("../../assets/images/pill.png")
              : require("../../assets/images/unfilledPill.png")
          }
          style={styles.pill}
        />
      ))}
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
  pill: {
    height: 12,
    resizeMode: "contain",
    width: 32,
  },
});
