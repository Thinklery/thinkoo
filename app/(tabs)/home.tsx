import { Text, View, Linking, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { postPlushieInfo } from "@/utils/plushie";
import usePlushieStore from "@/utils/usePlushieStore";
import useNfcStore from "@/utils/useNfcStore";
import HomeFunctionButton from "@/components/HomeFunctionButton";

import Astronaut from "@/components/Astronaut";
import Background from "@/components/Background";
import useOnboardingStore from "@/utils/useOnboardingStore";

const Home = () => {
  // const plushies = usePlushieStore((state) => state.plushies);
  const setPlushie = usePlushieStore((state) => state.setPlushie);
  const setNfcId = useNfcStore((state) => state.setNfcId);
  const name = useOnboardingStore((state) => state.name);

  useEffect(() => {
    const handleDeepLink = async (url: string) => {
      const parsed = new URL(url);
      const nfcId = parsed.searchParams.get("nfcId");
      if (nfcId) {
        setNfcId(nfcId, 0);
        const data = await postPlushieInfo(nfcId, "Thinklery");
        setPlushie(data, 0);
      }
    };

    Linking.getInitialURL().then((url) => {
      if (url) handleDeepLink(url);
    });
  }, []);

  return (
    <Background>
      <Text> Hi {name}!!</Text>
      <View style={styles.container}>
        <Astronaut />

        <HomeFunctionButton type="FindYourToy" />
        <HomeFunctionButton type="WhatPlanetAreYou" />
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    flex: 1,
    justifyContent: "center",
  },
});
