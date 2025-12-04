// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import NfcManager, { NfcEvents, NfcTech, Ndef } from "react-native-nfc-manager";

// async function checkNfcEnabled() {
//   const isSupported = await NfcManager.isSupported();
//   if (!isSupported) {
//     console.log("NFC is not supported on this device");
//     return;
//   }

//   console.log("NFC is supported on this device");

//   const enabled = await NfcManager.isEnabled();
//   if (!enabled) {
//     console.log("NFC is not enabled");
//   } else {
//     console.log("NFC is enabled");
//   }
// }

// // === CONFIG FOR YOUR CLASSIC DATA ====================
// const CLASSIC_KEY_HEX = "FFFFFFFFFFFF"; // <- put your 6-byte key here (hex string)
// const CLASSIC_SECTOR = 1; // <- sector index you wrote to
// // =====================================================

// function hexKeyToBytes(hex: string): number[] {
//   if (hex.length !== 12) {
//     throw new Error("Key must be 12 hex characters (6 bytes)");
//   }
//   const bytes: number[] = [];
//   for (let i = 0; i < hex.length; i += 2) {
//     bytes.push(parseInt(hex.slice(i, i + 2), 16));
//   }
//   return bytes;
// }

// async function readClassicBlock() {
//   try {
//     console.log("Waiting for Mifare Classic tag…");

//     // Ask Android to give us a Classic tag
//     await NfcManager.requestTechnology(NfcTech.MifareClassic, {
//       alertMessage: "Hold the plushie near the phone",
//     });

//     const tag = await NfcManager.getTag();
//     console.log("Classic tag detected:", tag);

//     const mc = NfcManager.mifareClassicHandlerAndroid;
//     const key = hexKeyToBytes(CLASSIC_KEY_HEX);

//     // 1) Authenticate this sector with Key A
//     await mc.mifareClassicAuthenticateA(CLASSIC_SECTOR, key);
//     console.log(`Authenticated sector ${CLASSIC_SECTOR} with Key A`);

//     // 2) Convert sector + block-in-sector to absolute block index
//     const firstBlockInSector =
//       await mc.mifareClassicSectorToBlock(CLASSIC_SECTOR);

//     // 3) Read that 16-byte block
//     const blockData = await mc.mifareClassicReadBlock(firstBlockInSector);
//     console.log("Raw Classic block bytes:", blockData);

//     // 4) Convert bytes to string (assuming you stored plain text)
//     const text = Ndef.util.bytesToString(blockData as any);
//     console.log("Decoded Classic text:", text);

//     return text;
//   } catch (e) {
//     console.warn("readClassicBlock error:", e);
//     return null;
//   } finally {
//     // Always clean up
//     NfcManager.cancelTechnologyRequest().catch(() => {});
//   }
// }

// function NfcScreen() {
//   const [listening, setListening] = useState(false);
//   const [lastClassicText, setLastClassicText] = useState<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       console.log("Starting NFC manager");
//       await NfcManager.start();
//       console.log("NFC manager started");
//       await checkNfcEnabled();
//     })();

//     // listener for discovered tags
//     const onTagDiscovered = (tag: any) => {
//       console.log("onTagDiscovered fired");
//       console.warn("Tag found", tag);
//       console.log("Tag ID", tag.id);
//       console.log("Tag NDEF", tag.ndefMessage);
//       console.log("Tag techTypes", tag.techTypes);
//       // you can store tag.id here if you want
//     };

//     NfcManager.setEventListener(NfcEvents.DiscoverTag, onTagDiscovered);

//     return () => {
//       console.log("Cleaning up NFC");
//       NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
//       NfcManager.unregisterTagEvent().catch(() => {});
//     };
//   }, []);

//   async function startListening() {
//     try {
//       if (listening) {
//         return;
//       }

//       console.log("Calling registerTagEvent");
//       await NfcManager.registerTagEvent();
//       console.log("registerTagEvent resolved okay");

//       setListening(true);
//       console.log("Started listening for NFC tags");
//     } catch (ex) {
//       console.warn("Oops (startListening)!", ex);
//     }
//   }

//   async function stopListening() {
//     try {
//       console.log("Calling unregisterTagEvent");
//       await NfcManager.unregisterTagEvent();
//       setListening(false);
//       console.log("Stopped listening for NFC tags");
//     } catch (ex) {
//       console.warn("Oops (stopListening)!", ex);
//     }
//   }

//   async function handleReadClassicPressed() {
//     const text = await readClassicBlock();
//     if (text != null) {
//       setLastClassicText(text);
//     }
//   }

//   return (
//     <View style={styles.wrapper}>
//       {!listening ? (
//         <TouchableOpacity onPress={startListening}>
//           <Text>Start listening for NFC</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity onPress={stopListening}>
//           <Text>Stop listening</Text>
//         </TouchableOpacity>
//       )}

//       <Text style={{ marginTop: 16 }}>
//         {listening
//           ? "Bring an NFC tag near the phone…"
//           : "Press the button to start listening."}
//       </Text>

//       <TouchableOpacity
//         onPress={handleReadClassicPressed}
//         style={{ marginTop: 24 }}
//       >
//         <Text>Read Classic plushie data</Text>
//       </TouchableOpacity>

//       {lastClassicText != null && (
//         <Text style={{ marginTop: 8 }}>
//           Last Classic text: {lastClassicText}
//         </Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     alignItems: "center",
//     flex: 1,
//     justifyContent: "center",
//   },
// });

// export default NfcScreen;
