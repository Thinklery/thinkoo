import { postPlushieInfo } from "@/utils/plushie";
import useNfcStore from "@/utils/useNfcStore";
import usePlushieStore from "@/utils/usePlushieStore";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import NfcManager, { NfcTech} from "react-native-nfc-manager";
import CustomText from "./CustomText";

NfcManager.start();

const Nfc = ({ index }: { index: number }) => {
	const plushies = usePlushieStore((state) => state.plushies);
  const setPlushies = usePlushieStore((state) => state.setPlushie);
  const setNfcId = useNfcStore((state) => state.setNfcId);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    NfcManager.start();
  }, []);

  async function readTag() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      console.log("Tag found:", tag);

      if (tag?.id) {
				setLoading(true);

        setNfcId(tag.id, index);
        const data = await postPlushieInfo(tag.id, "Thinklery");
        setPlushies(data, index);
        setLoading(false);
      }
    } catch (e) {
      console.warn("Error reading tag:", e);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

	console.log(plushies[0])

  return (
    <TouchableOpacity style={styles.container} onPress={readTag}>
      <Image
        source={require("@/assets/images/addPlushie.png")}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={async () =>
          setPlushies(await postPlushieInfo("04B21F5AC12A81", "Thinklery"), 0)
        }
      >
			<CustomText style={{ color: "white" }}>
				Press here
			</CustomText>
      </TouchableOpacity>

      <CustomText style={{ color: "white" }}>
        Data 2:{plushies[0]?.name}
      </CustomText>
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
