import { View, StyleSheet } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

const NavigationBack = ({
  back,
  home,
  backType,
  homeType,
}: {
  back?: () => void;
  home?: () => void;
  backType?: string;
  homeType?: string;
}) => {
  return (
    <View style={styles.buttonsRow}>
      <BackButton type={backType ?? "backBordered"} onPress={() => back?.()} />
      <HomeButton type={homeType ?? "homeBordered"}  onPress={() => home?.()} />
    </View>
  );
};

export default NavigationBack;

const styles = StyleSheet.create({
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
  },
});
