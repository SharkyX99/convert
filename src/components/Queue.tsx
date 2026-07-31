import {
  useConverterStore,
  type ConverterState,
} from "../store/converterStore";
import QueueCard from "./QueueCard";

export default function Queue() {
  const items = useConverterStore((state: ConverterState) => state.items);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Queue</h3>
        <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
          {items.length} item{items.length > 1 ? "s" : ""}
        </span>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <QueueCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
