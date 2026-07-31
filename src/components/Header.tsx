export default function Header() {
  return (
    <header className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-5 shadow-xl shadow-slate-950/40">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Passage
          </p>
          <h1 className="text-2xl font-semibold">Universal File Converter</h1>
        </div>
        <div className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
          Images • Video • Audio • Documents
        </div>
      </div>
    </header>
  );
}
