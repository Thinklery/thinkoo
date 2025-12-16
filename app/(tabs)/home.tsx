import { View, Linking, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { postPlushieInfo } from "@/utils/plushie";
import usePlushieStore from "@/utils/usePlushieStore";
import useNfcStore from "@/utils/useNfcStore";
import Button from "@/components/Button";

import Background from "@/components/Background";

const Home = () => {
  const plushies = usePlushieStore((state) => state.plushies);
  const setPlushie = usePlushieStore((state) => state.setPlushie);
  const setNfcId = useNfcStore((state) => state.setNfcId);

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
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/home_astro.png")}
          style={{ resizeMode: "contain", width: 300, height: 300}}
        />

        <Button name="FindYourToy" />
        <Button name="WhatPlanetAreYou" />
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
		alignItems: "center",},
});
