import { StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/index";

const Background = ({
  children,
  containerStyle,
}: {
  children: React.ReactNode;
  containerStyle?: any;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageBackground
      source={images.commonBackground}
      resizeMode="cover"
      style={[styles.background, containerStyle]}
      onLoad={() => setLoaded(true)}
    >
      {loaded && children}
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  background: {
    bottom: 0,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    zIndex: -1,
  },
});
