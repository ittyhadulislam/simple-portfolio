// import React from 'react';
import { useState } from "react";
import "./layout.css"
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {

    const [isToggle, setIsToggle] = useState("")

    return (
        <>
            <header className={`header ${isToggle ? "active" : ""}`}>
                <div className="logo">
                    <h1>Portfolio</h1>
                </div>
                <nav className="navbar">
                    <ul className="nav-list" onClick={() => setIsToggle(!isToggle)}>
                        <li className="nav-item"><Link to={"/"}>Home</Link></li>
                        <li className="nav-item"><Link to={"/about"}>About</Link></li>
                        <li className="nav-item"><Link to={"/skills"}>Skills</Link></li>
                        <li className="nav-item"><Link to={"/portfolio"}>Portfolio</Link></li>
                        <li className="nav-item"><Link to={"/contactUs"}>Contact US</Link></li>
                    </ul>
                </nav>

                <div className="mobile-view-button" onClick={() => setIsToggle(!isToggle)}>
                    <RxHamburgerMenu className="icon menu-icon" />
                    <RxCross2 className="icon cross-icon" />
                </div>
            </header>

            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
                <p>Developed with HTML and CSS by Azmain &copy; 2024</p>
            </footer>
        </>
    );
};

export default Layout;