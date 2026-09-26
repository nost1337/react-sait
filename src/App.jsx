import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Items from "./components/Items.jsx";
import Sale from "./components/Sale.jsx";

function App() {
    const [items, setItems] = useState([]);

      useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3000/items");
                
                if (!response.ok) {
                    throw new Error(`Ошибка сервера: ${response.status}`);
                }

                const data = await response.json();

                console.log("=== ДАННЫЕ УСПЕШНО ПРИШЛИ НА ФРОНТЕНД ===");
                console.log(data); 

                setItems(data);
            } catch (error) {
                console.error("=== ОШИБКА ПРИ ПОЛУЧЕНИИ ДАННЫХ ===");
                console.error(error);
            }
        };

        loadData();
    }, []);
    
    return (
        <div className="wrapper">
            <Header />
            <Items items={items}/>
            <Sale />
            <Footer />
        </div>
    );
}

export default App;