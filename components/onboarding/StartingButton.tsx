import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import useOnboardingStore from "@/utils/useOnboardingStore";
import { router } from "expo-router";

const Onboardng1Button = () => {
  const currentPage = useOnboardingStore((state) => state.currentPage);
  const setPage = useOnboardingStore((state) => state.setPage);

  const handlePress = () => {
    if (currentPage < 4) {
      setPage(currentPage + 1);
    } else {
      router.push("../(tabs)/home");
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require("../../assets/images/onboarding/onboarding1Next.png")}
          resizeMode="contain"
          style={{ height: 200, width: 200, marginTop: 20 }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Onboardng1Button;
