import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assicurati di importare Bootstrap

const Footer = () => {
    return (
        <footer className="text-center bg-body-tertiary">
            {/* Grid container */}
            <div className="container pt-4">
                {/* Section: Social media */}
                <section className="mb-4">
                    {/* Facebook */}
                    <a
                        aria-label="Facebook"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://facebook.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    {/* Twitter */}
                    <a
                        aria-label="Twitter"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://twitter.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    {/* Google */}
                    <a
                        aria-label="Google"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://google.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    {/* Instagram */}
                    <a
                        aria-label="Instagram"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://instagram.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    {/* LinkedIn */}
                    <a
                        aria-label="LinkedIn"
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="https://linkedin.com" // Sostituisci con il link reale
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>

                    {/* GitHub */}
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
                {/* Section: Social media */}
            </div>
            {/* Grid container */}

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © {new Date().getFullYear()} Copyright:
                <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* Copyright */}
        </footer>
    );
};

export default Footer;
