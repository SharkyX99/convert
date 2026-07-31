import {
  useConverterStore,
  type ConverterState,
} from "../store/converterStore";
import type { Preset } from "../types/converter";

const presets: Preset[] = ["Fast", "Balanced", "High Quality", "Small Size"];

export default function Settings() {
  const preset = useConverterStore((state: ConverterState) => state.preset);
  const setPreset = useConverterStore(
    (state: ConverterState) => state.setPreset,
  );

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h3 className="text-lg font-semibold">Settings</h3>
      <div className="mt-4 grid gap-3">
        {presets.map((option) => {
          const active = option === preset;
          return (
            <button
              key={option}
              onClick={() => setPreset(option)}
              className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                active
                  ? "border-cyan-500 bg-cyan-500/10 text-cyan-300"
                  : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </section>
  );
}
