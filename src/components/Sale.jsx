import React, { Component } from "react";

export class Sale extends Component {
    render() {
        return (
            <section className="sale">
                <h2>🔥 Акции</h2>

                <div className="sale-content">
                    <h3>Скидки до 30%</h3>
                    <p>
                        Успейте приобрести мебель по выгодным ценам!
                    </p>

                    <button>Смотреть акции</button>
                </div>
            </section>
        );
    }
}

export default Sale;