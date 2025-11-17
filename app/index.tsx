import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

async function initializeNfc() {
  try {
    const isNfcSupported = await NfcManager.isSupported();
    if (isNfcSupported) {
      await NfcManager.start();
      console.log('NFC Manager started');
    } else {
      console.warn('NFC is not supported on this device');
    }
  } catch (error) {
    console.error('NFC Manager failed to start:', error);
  }
}

initializeNfc();

NfcManager.start()
  .then(() => {
    console.log('NFC Manager started');
  })
  .catch((error) => {
    console.warn('NFC Manager failed to start', error);
  });


// async function initializeNfc() {
//   const isSupported = await NfcManager.isSupported();
//   if (!isSupported) {
//     console.warn('NFC is not supported on this device');
//     return;
//   }

//   const isEnabled = await NfcManager.isEnabled();
//   if (!isEnabled) {
//     console.warn('NFC is disabled');
//     return;
//   }

//   await NfcManager.start();  // Start NFC manager only after ensuring it's enabled
// }

// initializeNfc();

export default function Index() {
  NfcManager.isSupported().then(supported => {
    if (supported) {
      console.log('NFC is supported');
    } else {
      console.log('NFC is not supported');
    }
  });
  async function readNdef() {
    console.log('readNdef called');
    try {
      console.log('Requesting NDEF technology');
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      console.log('NDEF technology requested');
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      if (tag) {
        console.warn('Tag found', tag);
      } else {
        console.warn('No tag found');
      }
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});