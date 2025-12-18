import { View, Image, StyleSheet } from "react-native";
import React from "react";

export const images: Record<string, any> = {
  Mars: require("@/assets/images/games/mars.png"),
  Moon: require("@/assets/images/games/moon.png"),
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
    height: 200,
    width: 200,
  },
});
