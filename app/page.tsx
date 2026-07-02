import Link from "next/link";

export default function AddListing() {
  return (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <Link href="/">← უკან დაბრუნება</Link>

      <h1>➕ განცხადების დამატება</h1>

      <input placeholder="ნაწილის სახელი" style={{ width: "100%", padding: 12, marginBottom: 12 }} />
      <input placeholder="მანქანის მარკა და მოდელი" style={{ width: "100%", padding: 12, marginBottom: 12 }} />
      <input placeholder="VIN კოდი" style={{ width: "100%", padding: 12, marginBottom: 12 }} />
      <input placeholder="ფასი" style={{ width: "100%", padding: 12, marginBottom: 12 }} />
      <input placeholder="ქალაქი" style={{ width: "100%", padding: 12, marginBottom: 12 }} />
      <input placeholder="ტელეფონის ნომერი" style={{ width: "100%", padding: 12, marginBottom: 12 }} />

      <input type="file" accept="image/*" style={{ width: "100%", padding: 12, marginBottom: 12 }} />

      <textarea placeholder="აღწერა" style={{ width: "100%", padding: 12, height: 120, marginBottom: 12 }} />

      <button style={{ width: "100%", padding: 14, background: "red", color: "white", border: "none", borderRadius: 10 }}>
        განცხადების გამოქვეყნება
      </button>
    </main>
  );
}
