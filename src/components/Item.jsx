import React from "react";

export default function Item({ item }) {

    const handleClick = () => {
        console.log("Клик");
    };

    return (
        <div className="item">

            <img src={item.img} alt={item.title} />

            <h2>{item.title}</h2>

            <p>{item.desc}</p>

            <p>{item.price}</p>

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