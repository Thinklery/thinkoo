import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import { supabase } from "@/utils/supabase";

export const generateIdentity = async (): Promise<string> => {
    const uuid = await AsyncStorage.getItem("UUID");
    if (uuid) {
        return uuid;
    } else 
    {        const randomBytes = Crypto.randomUUID();
        await AsyncStorage.setItem("UUID", randomBytes);
        return randomBytes;
    }
}

export const upsertUser = async (displayName: string) => {
    const uuid = await generateIdentity();
    const { data, error } = await supabase
        .from("users")
        .upsert({ id: uuid, display_name: displayName })
        .select();
    if (error) {
        console.error("Error upserting user:", error);
        return null;
    }
    return data;
};