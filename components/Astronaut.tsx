import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import useOnboardingStore from "@/utils/useOnboardingStore";

const Astronaut = () => {
  const setPage = useOnboardingStore((state) => state.setPage);
  return (
    <View style={styles.centerImageWrapper}>
      <TouchableOpacity
        onPress={() => {
          router.push("/(tabs)/home");
          setPage(1);
        }}
      >
        <Image
          source={require("@/assets/images/home_astro.png")}
          style={styles.astroImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Astronaut;
const styles = StyleSheet.create({
  astroImage: {
    height: 300,
    resizeMode: "contain",
    width: 300,
  },
  centerImageWrapper: {
    alignItems: "center",
  },
});
