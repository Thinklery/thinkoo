import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import useOnboardingStore from "@/utils/useOnboardingStore";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { upsertUser } from "@/lib/identity";

type Props = {
  name: string;
};

const SubmitButton = ({ name }: Props) => {
  const setName = useOnboardingStore((state) => state.setName);

  const handlePress = async () => {
    setName(name);
    AsyncStorage.setItem("displayName", name);
    await upsertUser(name);
    router.replace("/(tabs)/home");
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        {/* <Image
          source={require("../../assets/images/forwardButton.png")}
          resizeMode="contain"
          style={styles.button}
        ></Image> */}
        <Text style={styles.text}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;

// const styles = StyleSheet.create({
//   button: {
//     height: 100,
//     width: 100,
//   },
// });

const white = "#FFFFFF";
const styles = StyleSheet.create({
  text: {
    color: white,
  },
});
