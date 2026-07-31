export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#f8fafc",
        padding: "32px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#111827",
          border: "1px solid #334155",
          borderRadius: "24px",
          padding: "32px",
        }}
      >
        <p
          style={{
            color: "#22d3ee",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            fontSize: "12px",
          }}
        >
          Passage v3
        </p>
        <h1 style={{ fontSize: "36px", marginTop: "8px" }}>
          Universal File Converter
        </h1>
        <p
          style={{
            marginTop: "12px",
            fontSize: "18px",
            color: "#cbd5e1",
            lineHeight: 1.6,
          }}
        >
          Images, video, audio, and documents in one place.
        </p>
        <div style={{ marginTop: "24px", display: "grid", gap: "12px" }}>
          <div
            style={{
              border: "1px solid #334155",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            📷 HEIC → JPG / PNG / WebP
          </div>
          <div
            style={{
              border: "1px solid #334155",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            🎥 MOV / MKV / AVI → MP4
          </div>
          <div
            style={{
              border: "1px solid #334155",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            🎵 MP3 / WAV / M4A / AAC / FLAC
          </div>
          <div
            style={{
              border: "1px solid #334155",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            📄 Word / PowerPoint / Excel → PDF
          </div>
        </div>
      </div>
    </main>
  );
}
