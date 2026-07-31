export interface ConverterItem {
  id: string;
  name: string;
  type: "image" | "video" | "audio" | "document";
  size: string;
  meta: string;
  progress: number;
  status: "Analyze" | "Ready" | "Encoding" | "Done";
}

export type Preset = "Fast" | "Balanced" | "High Quality" | "Small Size";
