import React from "react";
import "./Asmp"

export default function Item({ item }) {
    
function correctPrice (Price) {
    if (Price < 0) return "Некоректная цена";
    if (Price > 0 && Price <= 999) return Price + " ₽";
    if (Price > 1000 && Price <= 9999) return Price + "₽  СКИДКА(10%)";
    if (Price > 10000) return Price + "₽ СКИДКА(20%)";
}
    const handleClick = () => {
        console.log("Клик");
    };

    return (
        <div className="item">

            <img src={item.img} alt={item.title} />

            <h2>Название: {item.title}</h2>

            <p>Описание:{item.desc}</p>

            <p>Цена: {correctPrice(item.price)}</p>

            <p>id товара: {item.id}</p>

            <div className="item-buttons">

                <button
                    className="icos"
                    type="button"
                    onClick={handleClick}
                >
                    🗑
                </button>

                <button
                    className="icon"
                    type="button"
                    onClick={handleClick}
                >
                    🛒
                </button>

                <button
                    className="cart"
                    type="button"
                    onClick={handleClick}
                >
                    🧺
                </button>

                <button
                    className="icon"
                    type="button"
                    onClick={handleClick}
                >
                    👀
                </button>


            </div>

        </div>
    );
}