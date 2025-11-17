import React from "react";
import { Button, Text, View } from "react-native";
import NfcManager, { NfcTech, TagEvent } from "react-native-nfc-manager";

NfcManager.start();

const NFC = () => {
	const [tagData, setTagData] = React.useState<TagEvent | null>(null);

  async function readTag() {
    try {
      await NfcManager.getTag();
      const tag = await NfcManager.getTag(NfcTech.Ndef);
			setTagData(tag);
      console.log("Tag found:", tag);
    } catch (e) {
      console.warn("Error reading tag:", e);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View>
      <Text>NFC</Text>
			<Button title="Read NFC Tag" onPress={readTag} />
			<Text>{tagData ? JSON.stringify(tagData) : "No tag data"}</Text>
    </View>
  );
};

export default NFC;
