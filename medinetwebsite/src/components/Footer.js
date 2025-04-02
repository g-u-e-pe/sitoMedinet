import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assicurati di importare Bootstrap

const Footer = () => {
    return (
        <footer className="text-center bg-body-tertiary" id ="contatti">
            {/* Grid container 
            <div className="container pt-4">
                
                <section className="mb-4">
                    
                    <a
                        aria-label="Facebook"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://facebook.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    
                    <a
                        aria-label="Twitter"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://twitter.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    
                    <a
                        aria-label="Google"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://google.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    
                    <a
                        aria-label="Instagram"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://instagram.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    
                    <a
                        aria-label="LinkedIn"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://linkedin.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>

                    
                    <a
                        aria-label="GitHub"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://github.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </section>
                
            </div>
            */}

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © {new Date().getFullYear()} Medinet s.r.l. Tutti i diritti riservati.
                <br />
            </div>
        </footer>
    );
};

export default Footer;
