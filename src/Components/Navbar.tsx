import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper px1">
                <a href="/" className="brand-logo">React + typescript</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar