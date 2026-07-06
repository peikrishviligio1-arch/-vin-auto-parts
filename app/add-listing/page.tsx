"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function AddListing() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [vin, setVin] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function saveListing(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !price || !description) {
      alert("შეავსე ყველა აუცილებელი ველი");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "listings"), {
        title,
        price,
        vin,
        description,
        createdAt: new Date(),
      });

      alert("განცხადება წარმატებით დაემატა");

      setTitle("");
      setPrice("");
      setVin("");
      setDescription("");
    } catch (error) {
      console.error(error);
      alert("შეცდომაა, განცხადება ვერ დაემატა");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>განცხადების დამატება</h1>

      <form onSubmit={saveListing} style={{ display: "grid", gap: "15px" }}>
        <input
          type="text"
          placeholder="ნაწილის დასახელება"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "12px" }}
        />

        <input
          type="number"
          placeholder="ფასი"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "12px" }}
        />

        <input
          type="text"
          placeholder="VIN კოდი"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          style={{ padding: "12px" }}
        />

        <textarea
          placeholder="აღწერა"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "12px", minHeight: "120px" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "14px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          {loading ? "ემატება..." : "განცხადების დამატება"}
        </button>
      </form>
    </main>
  );
}
