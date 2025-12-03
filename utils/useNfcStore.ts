import { create } from "zustand";

const useNfcStore = create<NfcStoreType>((set, get, store) => ({
  NfcId: [],
  setNfcId: (id: string, index: number) => {
    const NfcId = [...get().NfcId];
    NfcId[index] = id;
    set({ NfcId });
  },
  resetNFC: () => {
    set(store.getInitialState());
  },
}));

export default useNfcStore;
