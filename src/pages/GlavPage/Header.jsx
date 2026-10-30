import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div>
                <span className='logo'>🛋Furniture Store</span>
                <ul className="nav">
                    <li>
                        <a href="/about" className="nav-click">
                            👥Про наc
                        </a>
                    </li>
                    <a href="/contats" className="nav-click">
                        📞Контакты
                    </a>
                    <li>
                        <a href="Cabinet" className="nav-click">
                            👤Кабинет
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-click">
                            🌎Главная страница
                        </a>
                    </li>
                    <li>🔍Поиск</li>
                </ul>
            </div>
            <div className='Presentation'></div>
        </header>
    )
}