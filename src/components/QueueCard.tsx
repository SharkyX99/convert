import type { ConverterItem } from "../types/converter";

interface QueueCardProps {
  item: ConverterItem;
}

export default function QueueCard({ item }: QueueCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="mt-1 text-sm text-slate-400">{item.meta}</p>
        </div>
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
          {item.status}
        </span>
      </div>

      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <div
          className="h-2 rounded-full bg-cyan-500"
          style={{ width: `${item.progress}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
        <span>{item.size}</span>
        <span>{item.progress}%</span>
      </div>
    </div>
  );
}
