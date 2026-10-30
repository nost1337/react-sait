import React, { Component } from "react";
import Item from "./Item.jsx";

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    render() {
        return (
            <main>
                {this.props.items.map((el) => (
                    <Item
                        key={el.id}
                        item={el}
                    />
                ))}
            </main>
        );
    }
}