import CustomText from "@/components/CustomText";
import { Colours } from "@/lib/colours";
import { Tabs } from "expo-router";
import React from "react";
import { ImageSourcePropType, View, Image, StyleSheet } from "react-native";

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
              activeSource={require("@/assets/images/navigation/home_active.png")}
              inactiveSource={require("@/assets/images/navigation/home_inactive.png")}
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
              activeSource={require("@/assets/images/navigation/games_active.png")}
              inactiveSource={require("@/assets/images/navigation/games_inactive.png")}
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
  TabBarText: {
    color: Colours.white,
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textAlign: "center",
    width: 72,
  },
  TabIconContainer: {
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
  },
  TabIconImage: {
    height: 48,
    resizeMode: "contain",
    width: 48,
  },
});
