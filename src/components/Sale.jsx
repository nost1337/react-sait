import React, { useState } from "react";

export default function Sale({ sale }) {
    
        const [nsxTak, setnsxTak] = useState(true);

        const handClick = (event) => {
        console.log('Клик');
    }
        return (
            <section className="sale">
                <h2>🔥 Акции</h2>
                <div className="sale-content">
                    <h3>Скидки до 30%</h3>
                    <p>
                        Успейте приобрести мебель по выгодным ценам!
                    </p>
                    {nsxTak && (
                        <button
                        className="icog"
                        type="button"
                        onClick={handClick}
                    >Смотреть акции
                    </button>
                    )}
                </div>
            </section>
        );
    }