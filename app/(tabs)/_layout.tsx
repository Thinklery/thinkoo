import CustomText from "@/components/CustomText";
import { Tabs } from "expo-router";
import React from "react";
import {
  ImageSourcePropType,
  View,
  Image,
  StyleSheet,
  Text,
} from "react-native";

const TabIcon = ({
  activeSource,
  inactiveSource,
  focused,
  label,
}: {
  activeSource: ImageSourcePropType;
  inactiveSource: ImageSourcePropType;
  focused: boolean;
  label: string;
}) => (
  <View style={styles.TabIconContainer}>
    <Image
      source={focused ? activeSource : inactiveSource}
      style={styles.TabIconImage}
    />
    <CustomText style={styles.TabBarText}>{label}</CustomText>
  </View>
);

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              activeSource={require("../../assets/images/home_active.png")}
              inactiveSource={require("../../assets/images/home_inactive.png")}
              focused={focused}
              label="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="games"
        options={{
          headerShown: false,
          title: "Games",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              activeSource={require("../../assets/images/games_active.png")}
              inactiveSource={require("../../assets/images/games_inactive.png")}
              focused={focused}
              label="Game"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  TabIconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  TabIconImage: {
    width: 72,
    height: 72,
    resizeMode: "contain",
  },
  TabBarText: {
    fontFamily: "Poppins-Regular",
    color: "white",
    fontSize: 12,
    width: 72,
    textAlign: "center",
  },
});
