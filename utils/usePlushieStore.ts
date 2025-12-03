import { create } from "zustand";

const usePlushieStore = create<PlushieStoreType>((set, get, store) => ({
  plushies: [
    {
      id: 1,
      name: "",
      level: 1,
      xp: 0,
      nfc_id: "",
      type: {
        type: "",
      },
    },
    {
      id: 2,
      name: "",
      level: 1,
      xp: 0,
      nfc_id: "",
      type: { type: "" },
    },
  ],

  setPlushie: (data: PlushieInfoType, index: number) => {
    const plushies = [...get().plushies];
    plushies[index] = { ...plushies[index], ...data };
    set({ plushies });
  },

  addXP: (amountXP: number, index: number) => {
    const plushies = [...get().plushies];
    let { xp, level } = plushies[index];
    const XP_PER_LEVEL = 100;

    let newXP = xp + amountXP;
    let newLevel = level;

    while (newXP >= XP_PER_LEVEL) {
      newXP -= XP_PER_LEVEL;
      newLevel++;
    }

    plushies[index] = { ...plushies[index], xp: newXP, level: newLevel };
    set({ plushies });
  },

  resetPlushie: () => {
    set(store.getInitialState());
  },

  addNewPlushie: (data: PlushieInfoType) => {
    set({ plushies: [...get().plushies, data] });
  },
}));

export default usePlushieStore;
