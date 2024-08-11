import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header class="header">
            <a href="#" class="logo">Sanjeewa Liyanage</a>
            <i class="fa-solid fa-bars " id="menu-icon"></i>
            <nav class="navbar">
                <a href="#Home" class="active">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
