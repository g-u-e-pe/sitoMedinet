import React, { useState, useEffect } from 'react';
import '../App.css';
import '../index.css';


//Importiamo le icone per la sezione servizi
import TelefoniaMobile from '../assets/icons/telefoniaMobile.png';
import TelefoniaFissa from '../assets/icons/TelefoniaFissa.png';
import EnergiaEMobilita from '../assets/icons/energiaMobilita.png';
import IotIndustry from '../assets/icons/industry.png';
import SmartCity from '../assets/icons/smartCity.png';
import NextGenerationNetworks from '../assets/icons/networks.png';

import { Card, Col, Container, Row } from 'react-bootstrap';


// Importiamo i loghi delle aziende per la sezione clienti
import Logo1 from '../assets/logos/wind.png';
import Logo2 from '../assets/logos/tim.png';
import Logo3 from '../assets/logos/vodafone.png';
import Logo4 from '../assets/logos/zte.png';
import Logo5 from '../assets/logos/ericcson.png';
import Logo6 from '../assets/logos/huawei.png';
import Logo7 from '../assets/logos/inwit.png';
import Logo8 from '../assets/logos/cellnex.png';

//importiamo le foto della homepage che andranno nel carousel 
import HomePage1 from '../assets/images/HomePage1.jpg';
import HomePage2 from '../assets/images/HomePage2.jpg';
import HomePage3 from '../assets/images/HomePage3.jpg';

const Home = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const navbarOffset = 56; // Altezza della navbar
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };



    return (
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">


        {/* INIZIO SEZIONE HOMEPAGE CON CAROUSEL IMMAGINI */}
<div id="home" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
    <div className="carousel-indicators">
        <button
            type="button"
            data-bs-target="#home"  
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
        ></button>
        <button
            type="button"
            data-bs-target="#home"  
            data-bs-slide-to="1"
            aria-label="Slide 2"
        ></button>
        <button
            type="button"
            data-bs-target="#home" 
            data-bs-slide-to="2"
            aria-label="Slide 3"
        ></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={HomePage1} className="d-block w-100" alt="First slide" />
            <div className="carousel-caption  d-md-block">
                <h5>Primo Scatto</h5>
                <p>Una descrizione rappresentativa per la prima immagine.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={HomePage2} className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-md-block">
                <h5>Secondo Scatto</h5>
                <p>Una descrizione rappresentativa per la seconda immagine.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={HomePage3} className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption  d-md-block">
                <h5>Terzo Scatto</h5>
                <p>Una descrizione rappresentativa per la terza immagine.</p>
            </div>
        </div>
    </div>
    <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#home" 
        data-bs-slide="prev"
    >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Precedente</span>
    </button>
    <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#home"  
        data-bs-slide="next"
    >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Successivo</span>
    </button>
</div>
{/* FINE SEZIONE HOMEPAGE CON CAROUSEL IMMAGINI */}



 {/* SEZIONE SERVIZI CON LE CARD */}
 <div id="servizi" className="section">
                <div className="container">
                    <center>
                        <h2>Servizi</h2>
                    </center>
                    <hr id="lineaSezioni" />
                    <div className="row">
                        {/* Card 1 */}

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper card-space">
                                <div className="card card-bg card-big">
                                    <div className="card-body">
                                        <div className="top-icon">
                                            <center>
                                                <img src={TelefoniaMobile} alt="Antenna Icon" className="icon" />
                                            </center>
                                        </div>
                                        <h3 className="card-title h5">
                                            <center>TELEFONIA MOBILE</center>
                                        </h3>
                                        <hr id="card-divider"/>

                                        <div class="card-content">
                                        <p className="card-text font-serif">
                                            Infrastrutture e soluzioni per le reti mobili.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper card-space">
                                <div className="card card-bg card-big">
                                    <div className="card-body">
                                        <div className="top-icon">
                                            <center>
                                                <img src={TelefoniaFissa} alt="Antenna Icon" className="icon" />
                                            </center>
                                        </div>
                                        <h3 className="card-title h5">
                                            <center>TELEFONIA FISSA</center>
                                        </h3>
                                        <hr id="card-divider"/>

                                        <div class="card-content">
                                        <p className="card-text font-serif">
                                        Servizi di comunicazione fissa ad alta qualità.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper card-space">
                                <div className="card card-bg card-big">
                                    <div className="card-body">
                                        <div className="top-icon">
                                            <center>
                                                <img src={EnergiaEMobilita} alt="Antenna Icon" className="icon" />
                                            </center>
                                        </div>
                                        <h3 className="card-title h5">
                                            <center>ENERGIA E MOBILITÀ</center>
                                        </h3>
                                        <hr id="card-divider"/>

                                        <div class="card-content">
                                        <p className="card-text font-serif">
                                        Soluzioni energetiche e trasporti sostenibili.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper card-space">
                                <div className="card card-bg card-big">
                                    <div className="card-body">
                                        <div className="top-icon">
                                            <center>
                                                <img src={IotIndustry} alt="Antenna Icon" className="icon" />
                                            </center>
                                        </div>
                                        <h3 className="card-title h5">
                                            <center>IoT IN AMBITO TECLO E INDUSTRY</center>
                                        </h3>
                                        <hr id="card-divider"/>

                                        <div class="card-content">
                                        <p className="card-text font-serif">
                                        Tecnologie IoT per la gestione e il monitoraggio.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper card-space">
                                <div className="card card-bg card-big">
                                    <div className="card-body">
                                        <div className="top-icon">
                                            <center>
                                                <img src={SmartCity} alt="Antenna Icon" className="icon" />
                                            </center>
                                        </div>
                                        <h3 className="card-title h5">
                                            <center>SMART CITY E RIGENERAZIONE URBANA</center>
                                        </h3>
                                        <hr id="card-divider"/>

                                        <div class="card-content">
                                        <p className="card-text font-serif">
                                        Infrastrutture intelligenti per città sostenibili.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card-wrapper card-space">
                                <div className="card card-bg card-big">
                                    <div className="card-body">
                                        <div className="top-icon">
                                            <center>
                                                <img src={NextGenerationNetworks} alt="Antenna Icon" className="icon" />
                                            </center>
                                        </div>
                                        <h3 className="card-title h5">
                                            <center>NEXT GENERATION NETWORKS</center>
                                        </h3>
                                        <hr id="card-divider"/>

                                        <div class="card-content">
                                        <p className="card-text font-serif">
                                        Reti avanzate per una connettività ultraveloce.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                    </div>
                </div>
            </div>
{/* FINE SEZIONE "CHI SIAMO" */}


{/* SEZIONE CONTATTI CON LE CARD ORIZZONTALI */}
<div id="contatti" className="section">
                <div className="container">
                    <center>
                        <h2>Contatti</h2>
                    </center>
                    <hr id="lineaSezioni" />
                    <div className="row">
                        {/* Card 1 - Sede Milano */}
                        <div className="col-12 col-md-6 mb-4">
                            <div className="card card-horizontal">
                                <div className="card-body d-flex">
                                    <div className="card-info">
                                        <h5 className="card-title">Sede Milano</h5>
                                        <p className="card-text">Città: Milano</p>
                                        <p className="card-text">Indirizzo: Via Roma, 123</p>
                                    </div>
                                    <div className="map-container">
                                        <iframe
                                            title="Sede Milano"
                                            src="https://maps.app.goo.gl/i41PgVEGoXgJg9ns6"
                                            width="100%"
                                            height="250"
                                            frameBorder="0"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 - Sede Torino */}
                        <div className="col-12 col-md-6 mb-4">
                            <div className="card card-horizontal">
                                <div className="card-body d-flex">
                                    <div className="card-info">
                                        <h5 className="card-title">Sede Torino</h5>
                                        <p className="card-text">Città: Torino</p>
                                        <p className="card-text">Indirizzo: Corso Italia, 45</p>
                                    </div>
                                    <div className="map-container">
                                        <iframe
                                            title="Sede Torino"
                                            src="https://www.google.com/maps/embed/v1/place?q=Corso+Italia,+45+Torino&key=YOUR_GOOGLE_MAPS_API_KEY"
                                            width="100%"
                                            height="250"
                                            frameBorder="0"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 - Sede Roma */}
                        <div className="col-12 col-md-6 mb-4">
                            <div className="card card-horizontal">
                                <div className="card-body d-flex">
                                    <div className="card-info">
                                        <h5 className="card-title">Sede Roma</h5>
                                        <p className="card-text">Città: Roma</p>
                                        <p className="card-text">Indirizzo: Via Nazionale, 10</p>
                                    </div>
                                    <div className="map-container">
                                        <iframe
                                            title="Sede Roma"
                                            src="https://www.google.com/maps/embed/v1/place?q=Via+Nazionale,+10+Roma&key=YOUR_GOOGLE_MAPS_API_KEY"
                                            width="100%"
                                            height="250"
                                            frameBorder="0"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FINE SEZIONE CONTATTI */}
      



        </div>
    );
};

export default Home;
