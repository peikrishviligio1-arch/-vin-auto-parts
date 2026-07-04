"use client";

import Link from "next/link";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AddListing() {
  async function saveListing(event: any) {
    event.preventDefault();

    try {
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
    } catch (error: any) {
      alert("შეცდომაა: " + error.message);
    }
  }

  return (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <Link href="/">← უკან დაბრუნება</Link>

      <h1>+ განცხადების დამატება</h1>

      <form onSubmit={saveListing}>
        <input name="partName" placeholder="ნაწილის სახელი" style={inputStyle} />
        <input name="carModel" placeholder="მანქანის მარკა და მოდელი" style={inputStyle} />
        <input name="vin" placeholder="VIN კოდი" style={inputStyle} />
        <input name="price" placeholder="ფასი" style={inputStyle} />
        <input name="city" placeholder="ქალაქი" style={inputStyle} />
        <input name="phone" placeholder="ტელეფონის ნომერი" style={inputStyle} />

        <textarea
          name="description"
          placeholder="აღწერა"
          style={{ ...inputStyle, height: 160 }}
        />

        <button type="submit" style={buttonStyle}>
          განცხადების გამოქვეყნება
        </button>
      </form>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: 18,
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: 10,
  fontSize: 16,
};

const buttonStyle = {
  width: "100%",
  padding: 18,
  background: "red",
  color: "white",
  border: "none",
  borderRadius: 14,
  fontSize: 18,
  fontWeight: "bold",
};
