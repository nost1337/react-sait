import React, { useState } from "react";

export default function Item({ item }) {
    const [hasTasks, setHasTasks] = useState(true);

    const handleClick = (event) => {
        console.log('Клик');
    };


    return (
        <div className="item">
            <img src={item.img} alt={item.title} />

            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.price}</p>

            <div className="item-buttons">
                {hasTasks && (
                    <button
                        className="icos"
                        type="button"
                        onClick={handleClick}
                    >🗑
                    </button>
                )}
                {hasTasks && (
                    <button
                        className="icon"
                        type="button"
                        onClick={handleClick}
                    >🛒
                    </button>
                )}
                {hasTasks && (
                    <button
                        className="cart"
                        type="button"
                        onClick={handleClick}
                    >🧺
                    </button>
                )}
                {hasTasks && (
                    <button
                        className="icon"
                        type="button"
                        onClick={handleClick}
                    >👀
                    </button>
                )}
            </div>
        </div>
    );
}

