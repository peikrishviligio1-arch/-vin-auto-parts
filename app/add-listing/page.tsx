"use client";

import Link from "next/link";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function AddListing() {
  async function saveListing(event: any) {
    event.preventDefault();

    const form = event.target;

    await addDoc(collection(db, "listings"), {
      partName: form.partName.value,
      carModel: form.carModel.value,
      vin: form.vin.value,
      price: form.price.value,
      city: form.city.value,
      phone: form.phone.value,
      description: form.description.value,
      createdAt: new Date(),
    });

    alert("განცხადება დაემატა ✅");
    form.reset();
  }

  return (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <Link href="/">← უკან დაბრუნება</Link>

      <h1>➕ განცხადების დამატება</h1>

      <form onSubmit={saveListing}>
        <input name="partName" placeholder="ნაწილის სახელი" style={{ width: "100%", padding: 12, marginBottom: 12 }} required />
        <input name="carModel" placeholder="მანქანის მარკა და მოდელი" style={{ width: "100%", padding: 12, marginBottom: 12 }} required />
        <input name="vin" placeholder="VIN კოდი" style={{ width: "100%", padding: 12, marginBottom: 12 }} />
        <input name="price" placeholder="ფასი" style={{ width: "100%", padding: 12, marginBottom: 12 }} required />
        <input name="city" placeholder="ქალაქი" style={{ width: "100%", padding: 12, marginBottom: 12 }} />
        <input name="phone" placeholder="ტელეფონის ნომერი" style={{ width: "100%", padding: 12, marginBottom: 12 }} required />
        <textarea name="description" placeholder="აღწერა" style={{ width: "100%", padding: 12, height: 120, marginBottom: 12 }} />

        <button type="submit" style={{ width: "100%", padding: 14, background: "red", color: "white", border: "none", borderRadius: 10 }}>
          განცხადების გამოქვეყნება
        </button>
      </form>
    </main>
  );
}
