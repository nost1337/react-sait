import { useState } from "react";

async function handleSubmit(e, id) {
  e.preventDefault();
  if (!id.trim()) return;

  const res = await fetch(`http://127.0.0.1:3000/items/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    console.error("Ошибка удаления:", res.status);
    return;
  }

  onDel?.(Number(id));
  setId("");
};

export default function DeleteItem({ onDel }) {
  const [id, setId] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, id)}>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID товара"
      />
      <button type="submit">Удалить</button>
    </form>
  );
}