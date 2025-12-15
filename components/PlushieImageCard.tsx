import { View, Image, StyleSheet } from "react-native";
import React from "react";

export const images: Record<string, any> = {
  Mars: require("@/assets/images/mars.png"),
  Moon: require("@/assets/images/moon.png"),
};

const PlushieImageCard = ({ type }: { type: string }) => {
  return (
    <View>
      <Image
        source={images[type]}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

export default PlushieImageCard;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
