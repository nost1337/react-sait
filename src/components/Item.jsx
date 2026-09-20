import React, { Component } from "react";

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.item.img} alt={this.props.item.title} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <p>{this.props.item.price}</p>
                <div className="item-buttons">
                    <button className="icon">🛒</button>
                    <button className="cart" onClick={() => window.confirm("Вы хотите добавить в корзину?")}>🧺</button>
                    <button className="icon" onClick={() => window.confirm("Осмотреть данные о товаре?")}>👀</button>
                    <button className="icon" onClick={() => window.confirm("Вы хотите удалить?")}>🗑</button>
                </div>
            </div>

        );
    }
}

export default Item;