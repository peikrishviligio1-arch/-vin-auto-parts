export default function Home() {
  const parts = [
    "Mercedes CLS W218 LED ფარი",
    "M276 3.0 Biturbo ძრავი",
    "AMG დისკები R19",
    "CLS W218 უკანა ფარი",
    "Mercedes W212 გენერატორი",
    "BMW N57 ძრავი",
  ];

  return (
    <main style={{ padding: 24, fontFamily: "Arial", background: "#0b0b0f", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 42 }}>
        <span style={{ color: "red" }}>VIN</span> AUTO PARTS
      </h1>

      <h2>იპოვე სწორი ნაწილი VIN-ით</h2>
      <p>შეიყვანე VIN/OEM კოდი ან ნაწილის სახელი.</p>

      <input
        placeholder="VIN, OEM ან ნაწილის ძებნა"
        style={{ width: "100%", padding: 16, borderRadius: 14, fontSize: 18, margin: "20px 0" }}
      />

      <button style={{ width: "100%", padding: 16, borderRadius: 14, background: "red", color: "white", fontSize: 20, border: 0 }}>
        ძებნა
      </button>

      <h2 style={{ marginTop: 30 }}>განცხადებები</h2>

      {parts.map((part) => (
        <div key={part} style={{ padding: 18, background: "#1c1c22", borderRadius: 16, marginBottom: 12 }}>
          <h3>{part}</h3>
          <p>ფასი: შეთანხმებით</p>
          <button style={{ padding: 12, borderRadius: 10 }}>ნახვა</button>
        </div>
      ))}
    </main>
  );
}
