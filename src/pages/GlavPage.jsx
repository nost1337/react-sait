import { useEffect, useState } from "react";
import Header from "./GlavPage/Header.jsx";
import Footer from "./GlavPage/Footer.jsx";
import Items from "./GlavPage/Items.jsx";
import Sale from "./GlavPage/Sale.jsx";
import AddItem from "./GlavPage/AddItem.jsx";
import DeleteItem from "./GlavPage/DeleteItem.jsx";

const GlavPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/items")
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(console.error);
    }, []);

    const handleAdd = (newItem) => setItems(prev => [...prev, newItem]);

    return (
        <>
            <Header />
            <AddItem onAdd={handleAdd} />
            <Items items={items} />
            <Sale />
            <DeleteItem />
            <Footer />
        </>
        
    );
};

export default GlavPage;