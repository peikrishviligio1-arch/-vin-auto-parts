"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function AddListingPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [vin, setVin] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title || !price || !description) {
      alert("შეავსე დასახელება, ფასი და აღწერა");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "listings"), {
        title,
        price,
        vin,
        description,
        createdAt: new Date().toISOString(),
      });

      alert("განცხადება წარმატებით დაემატა");

      setTitle("");
      setPrice("");
      setVin("");
      setDescription("");
    } catch (error) {
      alert("შეცდომაა — განცხადება ვერ დაემატა");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>განცხადების დამატება</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="ნაწილის დასახელება"
          style={{ padding: "12px" }}
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="ფასი"
          style={{ padding: "12px" }}
        />

        <input
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          placeholder="VIN"
          style={{ padding: "12px" }}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="აღწერა"
          style={{ padding: "12px", minHeight: "120px" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "14px",
            background: "black",
            color: "white",
            border: "0",
            borderRadius: "8px",
          }}
        >
          {loading ? "ემატება..." : "განცხადების დამატება"}
        </button>
      </form>
    </main>
  );
}
