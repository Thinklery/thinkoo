import { View, StyleSheet } from "react-native";
import React from "react";
import NFC from "@/components/NFC";
import Background from "@/components/Background";
import PlushieInfoCard from "@/components/PlushieInfoCard";
import useNfcStore from "@/utils/useNfcStore";
import BackNavigationBar from "@/components/navigation/BackNavigationBar";
import usePlushieStore from "@/utils/usePlushieStore";

const NFCPage = () => {
  const NfcId = useNfcStore((state) => state.NfcId);
  const plushies = usePlushieStore((state) => state.plushies);

  return (
    <Background>
      <View style={styles.contents}>
        <BackNavigationBar />
        {NfcId[0] ? (
          <PlushieInfoCard plushie={plushies[0]} />
        ) : (
          <NFC index={0} />
        )}
      </View>
    </Background>
  );
};

export default NFCPage;

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
