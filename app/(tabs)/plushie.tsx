import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NFC from "../components/NFC";

const Plushie = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>plushie</Text>
				<NFC />
      </View>
    </SafeAreaView>
  );
};

export default Plushie;
