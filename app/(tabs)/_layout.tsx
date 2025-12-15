import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="games"
          options={{
            title: "Games",
          }}
        />
        <Tabs.Screen
          name="friends"
          options={{
            title: "Friends",
          }}
        />
      </Tabs>
    </>
  );
}
