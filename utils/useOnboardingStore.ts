import { create } from "zustand";

const useOnboardingStore = create<OnboardingStoreType>((set, get) => ({
  currentPage: 1,
  setPage: (page: number) => set({ currentPage: page }),
  name: "",
  setName: (name: string) => set({ name }),
}));

export default useOnboardingStore;
