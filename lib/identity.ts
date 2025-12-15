import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "@/utils/supabase";

export const hasExistingId = async (): Promise<boolean> => {
  const uuid = await AsyncStorage.getItem("UUID");
  if (uuid) {
    return true;
  } else {
    return false;
  }
};

export const upsertUser = async (displayName: string) => {
  if (!displayName) {
    console.error("Display name is required to upsert user.");
    return null;
  }

  if (await hasExistingId()) {
    return null;
  }

  const { data, error } = await supabase
    .from("users")
    .upsert({ display_name: displayName })
    .select();
  if (error) {
    console.error("Error upserting user:", error);
    return null;
  }
  return data;
};
