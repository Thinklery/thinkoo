import React, { useEffect } from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

interface FloaterProps {
  src: ImageSourcePropType;
  style?: object;
}

export default function Floater({ src, style }: FloaterProps) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  // const scale = useSharedValue(0);
  // const rotate = useSharedValue(0);

  useEffect(() => {
    const xDuration = Math.random() * 4000 + 3000;
    const yDuration = Math.random() * 4000 + 2000;

    translateX.value = withRepeat(
      withTiming(50, {
        duration: xDuration,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );

    translateY.value = withRepeat(
      withTiming(30, {
        duration: yDuration,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );

    // scale.value = withRepeat(
    //   withTiming(1.08, {
    //     duration: 3000,
    //     easing: Easing.inOut(Easing.ease),
    //   }),
    //   -1,
    //   true
    // );

    // rotate.value = withRepeat(
    //   withTiming(3, {
    //     duration: 5000,
    //     easing: Easing.inOut(Easing.ease),
    //   }),
    //   -1,
    //   true
    // );
  }, [translateX, translateY]);

  const floatingStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <Animated.View style={[styles.container, style]}>
      <Animated.View style={floatingStyle}>
        <Animated.Image
          source={src}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Product / overlay component */}
        <Animated.View style={styles.productSlot} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    height: 180,
    width: 180, 
  },
  productSlot: {
    bottom: 0,
    height: "20%",
    left: "10%",
    position: "absolute",
    width: "80%",
  },
});
