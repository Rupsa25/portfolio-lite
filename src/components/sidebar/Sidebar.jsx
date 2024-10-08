import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../assets/logo.png';

const navLinks = [
    { id: 1, link: '#home', icon: 'icon-home' },
    { id: 2, link: '#about', icon: 'icon-user-following' },
    { id: 4, link: '#resume', icon: 'icon-graduation' },
    { id: 5, link: '#portfolio', icon: 'icon-layers' },
    { id: 6, link: '#blog', icon: 'icon-note' },
    { id: 7, link: '#home', icon: 'icon-bubble' },
];

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    return (
        <>
            <aside
                className={toggle ? 'aside show-menu' : 'aside'}
                onClick={() => showMenu(!toggle)}
            >
                <a href="#home" className="nav__logo">
                    <img src={Logo} alt="" className="sidebar__logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {navLinks.map((link) => (
                                <li key={link.id} className="nav__item">
                                    <a href={link.link} className="nav__link">
                                        <i className={link.icon}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    {/* <span className="copyright">&copy; 2024 - 2025.</span> */}
                </div>
            </aside>

            <div
                className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'}
                onClick={() => showMenu(!toggle)}
            >
                <i className="icon-menu"></i>
            </div>
        </>
    );
};

export default Sidebar;