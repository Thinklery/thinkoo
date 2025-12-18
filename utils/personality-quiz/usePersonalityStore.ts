import getResults from "@/lib/personality-quiz/getResults";
import { questions } from "@/lib/personality-quiz/questions";
import { create } from "zustand";

const usePersonalityStore = create<PersonalityStoreType>((set) => ({
  currentPage: 1,
  setPage: (page: number) => set({ currentPage: page }),
  optionsSelected: new Array(questions.length).fill(null),
  setOptionsSelected: (question: number, option: number) =>
    set((state) => {
      const newOptionsSelected = state.optionsSelected.map((val, index) => {
        if (index === question) {
          return option;
        }
        return val;
      });
      return { optionsSelected: newOptionsSelected };
    }),
  result: null,
  calculateResult: () =>
    set((state) => {
      return { result: getResults(state.optionsSelected) };
    }),
  resetEverything: () =>
    set({
      currentPage: 1,
      optionsSelected: new Array(questions.length).fill(null),
      result: null,
    }),
}));

export default usePersonalityStore;
