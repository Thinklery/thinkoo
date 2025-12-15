// // screens/HomeScreen.tsx
// import React, { useContext } from "react";
// import { View, Button, Text, StyleSheet } from "react-native";
// import { AuthContext } from "../components/AuthContext";

// const HomeScreen = () => {
//   const { user, logout } = useContext(AuthContext)!;

//   return (
//     <View style={styles.container}>
//       {user ? (
//         <>
//           {/* Check if 'user' is not null before accessing 'email' */}
//           <Text>Welcome, {user?.user?.email || "No email found"}</Text>
//           <Button title="Logout" onPress={logout} />
//         </>
//       ) : (
//         // Display message if user is null
//         <Text>Please log in</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     flex: 1,
//     justifyContent: "center",
//   },
// });

// export default HomeScreen;
