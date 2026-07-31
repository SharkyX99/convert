import { create } from "zustand";

export interface ConverterState {
  queue: string[];
  setQueue: (queue: string[]) => void;
}

export const useConverterStore = create<ConverterState>((set) => ({
  queue: [],
  setQueue: (queue) => set({ queue }),
}));
