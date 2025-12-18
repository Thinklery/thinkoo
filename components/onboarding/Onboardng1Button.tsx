import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import useOnboardingStore from "@/utils/useOnboardingStore";
import { router } from "expo-router";

const Onboardng1Button = () => {
  const currentPage = useOnboardingStore((state) => state.currentPage);
  const setPage = useOnboardingStore((state) => state.setPage);

  const handlePress = () => {
    if (currentPage < 6) {
      setPage(currentPage + 1);
    } else {
      router.push("../(tabs)/home");
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require("@/assets/images/onboarding/onboarding1Next.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    marginTop: 20,
    width: 200,
  },
});

export default Onboardng1Button;
