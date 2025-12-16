import { View, StyleSheet } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

const BackNavigationBar = ({
  back,
  home,
  backType,
  homeType,
  style,
}: {
  back?: () => void;
  home?: () => void;
  backType?: string;
  homeType?: string;
  style?: object;
}) => {
  return (
    <View style={[styles.buttonsRow, style]}>
      <BackButton type={backType ?? "backBordered"} onPress={() => back?.()} />
      <HomeButton type={homeType ?? "homeBordered"} onPress={() => home?.()} />
    </View>
  );
};

export default BackNavigationBar;

const styles = StyleSheet.create({
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
		alignItems: "center",
  },
});
