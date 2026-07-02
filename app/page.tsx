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
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <h1>
        <span style={{ color: "red" }}>VIN</span> AUTO PARTS
      </h1>

      <h2>იპოვე სწორი ნაწილი VIN-ით</h2>

      <input
        placeholder="შეიყვანე VIN ან ნაწილის სახელი..."
        style={{ width: "100%", padding: 12, marginBottom: 20 }}
      />

      {parts.map((part, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ddd",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          {part}
        </div>
      ))}
    </main>
  );
}
