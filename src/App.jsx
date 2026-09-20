import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Items from "./components/Items.jsx";
import Sale from "./components/sale.jsx";

function App() {
    const [items] = useState([
        {
            id: 1,
            title: "Стул серый",
            img: "photo_2026-09-06_11-49-59.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "chairs",
            price: "49.99$"
        },
        {
            id: 2,
            title: "Диван",
            img: "photo_2026-09-06_11-50-02.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "Мягкая мебель",
            price: "110.99$"
        },
        {
            id: 3,
            title: "Кресло",
            img: "uou8480npeov3psjswq7fcrpoo1pfbjr.webp",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "Стулья",
            price: "110.99$"
        },
        {
            id: 4,
            title: "Диван",
            img: "shopping.webp",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            category: "Негры",
            price: "220.99$"
        }
    ]);

    return (
        <div className="wrapper">
            <Header />
            <Items items={items} />
            <Sale />
            <Footer />
        </div>
    );
}

export default App;