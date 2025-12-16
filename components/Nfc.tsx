import { postPlushieInfo } from "@/utils/plushie";
import useNfcStore from "@/utils/useNfcStore";
import usePlushieStore from "@/utils/usePlushieStore";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import NfcManager, { NfcTech, TagEvent } from "react-native-nfc-manager";

NfcManager.start();

const Nfc = ({ index }: { index: number }) => {
  const setPlushies = usePlushieStore((state) => state.setPlushie);
  const setNfcId = useNfcStore((state) => state.setNfcId);
  const [tagData, setTagData] = React.useState<TagEvent | null>(null);

  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    NfcManager.start();
  }, []);

  async function readTag() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      setTagData(tag);
      console.log("Tag found:", tag);

      if (tag?.id) {
        setNfcId(tag.id, index);
      }
    } catch (e) {
      console.warn("Error reading tag:", e);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  const fetchPlushie = async () => {
    setLoading(true);
    const data = await postPlushieInfo(String(tagData?.id), "Thinklery");
    setPlushies(data, index);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlushie();
  }, [tagData?.id]);

  return (
    <TouchableOpacity style={styles.container} onPress={readTag}>
      <Image
        source={require("@/assets/images/addPlushie.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default Nfc;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
});
