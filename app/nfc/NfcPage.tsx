import { View, StyleSheet } from "react-native";
import React from "react";
import NFC from "@/components/Nfc";
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
        {plushies[0].name !== "" ? (
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
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
