import { View, StyleSheet, ImageBackground } from "react-native";
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
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
		justifyContent: "center",
		
  },
});
