import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NfcManager from 'react-native-nfc-manager';

async function checkNfcEnabled() {
  const isSupported = await NfcManager.isSupported();
  if (!isSupported) {
    console.log('NFC is not supported on this device');
    return;
  }

  console.log('NFC is supported on this device');

  const enabled = await NfcManager.isEnabled();
  if (!enabled) {
    console.log('NFC is not enabled');
  } else {
    console.log('NFC is enabled');
  }
}

function App() {
  const [listening, setListening] = useState(false);

  useEffect(() => {
    // Start NFC once when the component mounts
    (async () => {
      await NfcManager.start();
      console.log('NFC manager started');
      await checkNfcEnabled();
    })();

    // Optional clean up on unmount
    return () => {
      NfcManager.unregisterTagEvent().catch(() => {});
    };
  }, []);

  async function startListening() {
    try {
      if (listening) {
        return;
      }

      // registerTagEvent keeps listening for tags
      await NfcManager.registerTagEvent(tag => {
        console.warn('Tag found', tag);
        // here you can send to Supabase etc.
      });

      setListening(true);
      console.log('Started listening for NFC tags');
    } catch (ex) {
      console.warn('Oops (startListening)!', ex);
    }
  }

  async function stopListening() {
    try {
      await NfcManager.unregisterTagEvent();
      setListening(false);
      console.log('Stopped listening for NFC tags');
    } catch (ex) {
      console.warn('Oops (stopListening)!', ex);
    }
  }

  return (
    <View style={styles.wrapper}>
      {!listening ? (
        <TouchableOpacity onPress={startListening}>
          <Text>Start listening for NFC</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={stopListening}>
          <Text>Stop listening</Text>
        </TouchableOpacity>
      )}
      <Text style={{ marginTop: 16 }}>
        {listening
          ? 'Bring an NFC tag near the phone…'
          : 'Press the button to start listening.'}
      </Text>
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

export default App;
