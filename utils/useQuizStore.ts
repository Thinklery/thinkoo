import popUpQuesions from "@/lib/popUpQuestions";
import { create } from "zustand";

const useQuizStore = create<quizStoreType>((set, get) => ({
  optionsSelected: new Array(popUpQuesions.length).fill(null),
  setOptionSelected: (option: string, question: number) => {
    set((state) => {
      const newOptionSelected = state.optionsSelected.map((val, i) => {
        if (i === question) {
          return option;
        }
        return val;
      });
      return { optionsSelected: newOptionSelected };
    });
  },
  resetQuiz: () =>
    set({ optionsSelected: new Array(popUpQuesions.length).fill(null) }),
}));

export default useQuizStore;
