import { create } from "zustand";
import type { ConverterItem, Preset } from "../types/converter";

export interface ConverterState {
  items: ConverterItem[];
  preset: Preset;
  setPreset: (preset: Preset) => void;
  addItem: (item: ConverterItem) => void;
}

export const useConverterStore = create<ConverterState>()((set) => ({
  items: [
    {
      id: "1",
      name: "IMG_1234.MOV",
      type: "video",
      size: "14.6MB",
      meta: "1920×1080 • H.264 • AAC",
      progress: 62,
      status: "Encoding",
    },
  ],
  preset: "Balanced",
  setPreset: (preset: Preset) => set({ preset }),
  addItem: (item: ConverterItem) =>
    set((state) => ({ items: [item, ...state.items] })),
}));
