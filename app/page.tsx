export default function Home() {
  const parts = [
    "Mercedes CLS W218 LED ფარი",
    "M276 3.0 Biturbo ძრავი",
    "AMG დისკები R19",
    "CLS W218 უკანა ფარი",
  ];

  return (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <h1><span style={{ color: "red" }}>VIN</span> AUTO PARTS</h1>
      <h2>იპოვე სწორი ნაწილი VIN-ით</h2>

      <input
        placeholder="შეიყვანე VIN ან ნაწილის სახელი..."
        style={{ width: "100%", padding: 12, marginBottom: 16 }}
      />

      <button style={{ width: "100%", padding: 14, marginBottom: 24, background: "red", color: "white", border: 0, borderRadius: 10, fontSize: 18 }}>
        ➕ განცხადების დამატება
      </button>

      {parts.map((part) => (
        <div key={part} style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10, borderRadius: 8 }}>
          {part}
        </div>
      ))}
    </main>
  );
}
