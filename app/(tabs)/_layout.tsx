import { Tabs, router } from "expo-router";
import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

export default function TabsLayout() {
  const [isListMenuOpen, setIsListMenuOpen] = useState(false);

  const toggleListMenu = () => {
    setIsListMenuOpen((prev) => !prev);
  };

  const closeListMenu = () => {
    setIsListMenuOpen(false);
  };

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
        <Tabs.Screen
          name="list"
          options={{
            title: "List",
          }}
          listeners={{
            tabPress: (e) => {
              // Stop the normal navigation to /list
              e.preventDefault();
              toggleListMenu();
            },
          }}
        />
      </Tabs>

      {/* Tiny collapsible menu on the right */}
      <ListMenu visible={isListMenuOpen} onClose={closeListMenu} />
    </>
  );
}

type ListMenuProps = {
  visible: boolean;
  onClose: () => void;
};

function ListMenu({ visible, onClose }: ListMenuProps) {
  if (!visible) return null;

  return (
    <Pressable style={StyleSheet.absoluteFill} onPress={onClose}>
      <View style={styles.menuContainer}>
        <View style={styles.menu}>
          <Pressable
            style={styles.menuButton}
            onPress={() => {
              onClose();
              router.push("/(tabs)/list/snapshot");
            }}
          >
            <Text style={styles.menuButtonText}>Snapshot</Text>
          </Pressable>

          <Pressable
            style={styles.menuButton}
            onPress={() => {
              onClose();
              router.push("/(tabs)/list/settings");
            }}
          >
            <Text style={styles.menuButtonText}>Settings</Text>
          </Pressable>

          <Pressable
            style={styles.menuButton}
            onPress={() => {
              onClose();
              router.push("/(tabs)/list/collection");
            }}
          >
            <Text style={styles.menuButtonText}>Collection</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const white = "#FFFFFF";

const styles = StyleSheet.create({
  menu: {
    backgroundColor: white,
    borderRadius: 8,
    elevation: 4,
    minWidth: 140,
    padding: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuButton: {
    paddingVertical: 6,
  },
  menuButtonText: {
    fontSize: 14,
  },
  menuContainer: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "center",
    paddingRight: 16,
  },
});
