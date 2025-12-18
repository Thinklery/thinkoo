import { View, Linking, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { postPlushieInfo } from "@/utils/plushie";
import usePlushieStore from "@/utils/usePlushieStore";
import useNfcStore from "@/utils/useNfcStore";
import Button from "@/components/Button";

import Background from "@/components/Background";

const Home = () => {
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
  }, [setNfcId, setPlushie]);

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/home_astro.png")}
          style={styles.astro}
        />
        {/* <TouchableOpacity
          onPress={() => getPlushieInfo("04AB165AC12A81")}
          style={{
            marginBottom: 20,
            height: 100,
            width: 100,
            backgroundColor: "lightgray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Get Plushie Info</Text>
        </TouchableOpacity> */}

        <Button name="FindYourToy" />
        <Button name="WhatPlanetAreYou" />
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({
  astro: {
    height: 300,
    resizeMode: "contain",
    width: 300,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
