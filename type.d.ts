declare interface PlushieInfoType {
  id: number;
  name: string;
  level: number;
  xp: number;
  nfc_id: string;
  type: {
    type: string;
  };
}

declare interface AsteroidType {
  id: number;
  x: number;
  y: number;
  number: number;
}

declare interface plushiePowerUpType {
  name: string;
  level: number;
  power: string;
}

declare interface popUpQuesionsType {
  question: string;
  options: string[];
  answer: string;
  explaination: string;
}

declare interface PlushieStoreType {
  plushies: PlushieInfoType[];
  setPlushie: (data: PlushieInfoType, index: number) => void;
  addXP: (amountXP: number, amountLevel: number) => void;
  resetPlushie: () => void;
}

declare interface quizStoreType {
  optionsSelected: (string | null)[];
  setOptionSelected: (option: string, question: number) => void;
  resetQuiz: () => void;
}

declare interface NfcStoreType {
  NfcId: string[];
  setNfcId: (id: string, index: number) => void;
  resetNFC: () => void;
}

declare interface OnboardingStoreType {
  currentPage: number;
  setPage: (page: number) => void;
}
