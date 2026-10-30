import { useState } from "react";

export default function AddItem() {
    const [price, setPrice] = useState(0);
    return (
        <div>
            <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            />
            <p>Цена: {formatPrice(price)}</p>
        </div>
    );
}