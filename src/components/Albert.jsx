import React, { Component } from "react";

export class Albert extends Component {
    render() {
        return (
            <section className="Brat">
                <h1>Только сейчас</h1>

                <div className="typoi-brat">
                    <h3>Отдаю тупого брата за бесплатно</h3>
                    <p>
                       "Успейте деградировать"
                    </p>

                    <button onClick={() => window.confirm("Ты пидорас?")}>Смотреть акцию</button>
                </div>
            </section>
        );
    }
}

export default Albert;