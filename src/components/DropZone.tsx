export default function DropZone() {
  return (
    <section className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-8 text-center shadow-2xl shadow-cyan-950/30">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Passage v3
      </p>
      <h2 className="mt-3 text-3xl font-semibold">Drag files here</h2>
      <p className="mt-3 text-slate-400">
        Images, video, audio, and documents in one place.
      </p>
      <div className="mt-6 flex justify-center gap-3 text-4xl">
        <span>📷</span>
        <span>🎥</span>
        <span>🎵</span>
        <span>📄</span>
      </div>
    </section>
  );
}
