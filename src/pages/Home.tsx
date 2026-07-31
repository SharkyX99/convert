import Header from "../components/Header";
import DropZone from "../components/DropZone";
import Queue from "../components/Queue";
import Settings from "../components/Settings";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_40%),#020617] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Header />

        <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            <DropZone />
            <Queue />
          </div>

          <div className="space-y-6">
            <Settings />
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold">Smart analysis</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["Codec", "H.264"],
                  ["Audio", "AAC"],
                  ["Resolution", "4K"],
                  ["Estimated", "2 sec"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-1 text-lg font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
