import React, { useState } from "react";

export default function AddItem({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, desc, price }),
    });

    onAdd?.(await res.json());
    setTitle("");
    setPrice("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        className="sinobj"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название товара"
      />
      <input
        value={desc}
        className="sinobj"
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Описание"
      />
      <input
        className="sinobj"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Цена"
      />
      <button className="sinButton" type="submit">Добавить</button>
    </form>
  );
}