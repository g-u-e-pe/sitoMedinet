import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            if (window.innerWidth < 992) setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-roboto"
            style={{
                backgroundColor: isScrolled ? 'rgba(8, 100, 156, 0.8)' : '#dfebea',
                transition: 'background-color 0.3s ease'
            }}
        >
            <a className="navbar-brand font-weight-bold" href="#">Medinet S.r.l</a>
            <button 
                className="navbar-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="navbarNav"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold fs-5" style={{ color: '#283747' }} href="#home" onClick={() => scrollToSection('home')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold fs-5" style={{ color: '#283747' }} href="#chi-siamo" onClick={() => scrollToSection('chi-siamo')}>Chi Siamo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold fs-5" style={{ color: '#283747' }} href="#servizi" onClick={() => scrollToSection('servizi')}>Servizi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold fs-5" style={{ color: '#283747' }} href="#contatti" onClick={() => scrollToSection('contatti')}>Contatti</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
