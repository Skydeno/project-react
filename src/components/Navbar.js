import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/#header" className="navbar-logo" onClick={closeMobileMenu}>
                    SpX <i className="fas fa-space-shuttle" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' href="#header">
                        <Link to='#header' className='nav-links' onClick={closeMobileMenu}>
                            Początek
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#photos' className='nav-links' onClick={closeMobileMenu}>
                            Wiadomości
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#form' className='nav-links' onClick={closeMobileMenu}>
                            Formularz
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#footer' className='nav-links' onClick={closeMobileMenu}>
                            Newsletter
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;