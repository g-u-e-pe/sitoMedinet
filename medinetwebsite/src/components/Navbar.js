import React, { useState, useEffect } from 'react';
import '../App.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const[prova,setProva]=useState(0);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Calcola l'altezza della navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
            // Calcola la posizione dell'elemento e sottrai l'altezza della navbar
            const offsetPosition = element.offsetTop - navbarHeight;
    
            // Aggiungi un piccolo ritardo per assicurarti che lo scroll avvenga correttamente
            setTimeout(() => {
                // Scroll verso la sezione calcolata
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100); // Ritardo di 100 ms
    
            setActiveSection(id);  // Aggiorna la sezione attiva nel menu
            if (window.innerWidth < 992) setIsOpen(false); // Chiude il menu per dispositivi mobili
        }
    };
    
    
    

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['home', 'chi-siamo', 'servizi','clienti', 'sedi', 'contatti'];
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const top = section.getBoundingClientRect().top - navbarHeight;
                    const bottom = section.getBoundingClientRect().bottom - navbarHeight;

                    if (top <= 0 && bottom > 0) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            className={`navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-roboto ${isScrolled ? 'navbar-scrolled' : ''}`}
        >
            <a className="navbar-brand" href="#">Medinet S.r.l</a>
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
                    {['home', 'chi-siamo', 'servizi','clienti', 'sedi', 'contatti'].map((section) => (
                        <li className="nav-item" key={section}>
                            <a
                                className={`nav-link font-weight-bold fs-5 ${activeSection === section ? 'active-link' : ''}`}
                                href={`#${section}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(section);
                                }}
                            >
                                {section.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
