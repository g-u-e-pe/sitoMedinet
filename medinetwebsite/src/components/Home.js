import React, { useState, useEffect } from "react";
import "../App.css";
import "../index.css";
import "aos/dist/aos.css";
import AOS from "aos";

//importiamo librerie per la mappa -> sezione "le nostre sedi"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconMap from "../assets/icons/position.png";

//Importiamo le icone per la sezione servizi
import TelefoniaMobile from "../assets/icons/telefoniaMobile.png";
import TelefoniaFissa from "../assets/icons/TelefoniaFissa.png";
import EnergiaEMobilita from "../assets/icons/energiaMobilita.png";
import IotIndustry from "../assets/icons/industry.png";
import SmartCity from "../assets/icons/smartCity.png";
import NextGenerationNetworks from "../assets/icons/networks.png";


import { Card, Col, Container, Row } from "react-bootstrap";

// Importiamo i loghi delle aziende per la sezione clienti
import LogoWind from '../assets/logos/wind.png';
import LogoTim from '../assets/logos/tim.png';
import LogoVodafone from '../assets/logos/vodafone.png';
import LogoZte from '../assets/logos/zte.png';
import LogoEriccson from '../assets/logos/ericcson.png';
import LogoHuawei from '../assets/logos/huawei.png';
import LogoInwit from '../assets/logos/inwit.png';
import LogoCellNex from '../assets/logos/cellnex.png';
import Service from '../../public/service6.jpg'
import Team from '../../public/work.jpg'

//importiamo le foto della homepage che andranno nel carousel
import HomePage1 from "../assets/images/HomePage1.jpg";
import HomePage2 from "../assets/images/HomePage2.jpg";
import HomePage3 from "../assets/images/HomePage3.jpg";
import backGroundImage from "../assets/images/backGround2.jpg";

//importiamo la foto che va nella sezione Chi siamo
import ChiSiamo from "../assets/images/chiSiamo.png";

AOS.init(); // Inizializzazione di AOS libreria per le animazioni
const Home = () => {
  /*informazioni per le card sezione Servizi 
  title è il titolo della card, shortDescription descrizione che compare sulla parte frontale della card, longDescription è la descrizione che compare sulla
  parte retro della card e infine icon è il path dove  è contenuta l'icona che compare sulla parte frontale della card*/
  const serviziData = [
    {
      id: 1,
      title: "TELEFONIA MOBILE",
      shortDescription: "Infrastrutture e soluzioni per le reti mobili",
      longDescription:
        "MEDINET si occupa di progettazione, installazione e ottimizzazione delle reti di telefonia mobile, inclusi sistemi radio (2G, 3G, 4G, 5G) e stazioni radio base. Gestisce anche decommissioning, migrazione tecnologica, e rinnovo di permessi e contratti per le infrastrutture mobili.",
      icon: TelefoniaMobile,
    },
    {
      id: 2,
      title: "TELEFONIA FISSA",
      shortDescription: "Servizi di comunicazione fissa ad alta qualità",
      longDescription:
        "MEDINET esegue attività di Installation & Commissioning (I&C) su apparati di accesso fisso (come ISAM, MSAN, ONUcab, OLT) e di trasporto (SDH, WDM, DWDM). Si occupa anche di lavori su centrali Telecom, come la compattazione ATM e il decommissioning PSTN.",
      icon: TelefoniaFissa,
    },
    {
      id: 3,
      title: "ENERGIA E MOBILITÀ",
      shortDescription: "Soluzioni energetiche e trasporti sostenibili",
      longDescription:
        "MEDINET si occupa della progettazione di reti elettriche, impianti da fonti di energia alternative e colonnine di ricarica per auto elettriche.",
      icon: EnergiaEMobilita,
    },
    {
      id: 4,
      title: "IoT IN AMBITO TELCO E INDUSTRY",
      shortDescription: "  Tecnologie IoT per la gestione e il monitoraggio",
      longDescription:
        "MEDINET ha sviluppato soluzioni IoT, tra cui il sistema S.A.C.A.P. per il monitoraggio delle stazioni radio base e un’applicazione per il controllo dell’utilizzo di dispositivi di protezione individuale (DPI) tramite smartphone.",
      icon: IotIndustry,
    },
    {
      id: 5,
      title: "SMART CITY E RIGENERAZIONE URBANA",
      shortDescription: "Infrastrutture intelligenti per città sostenibili",
      longDescription:
        "MEDINET progetta soluzioni di tele gestione per la pubblica illuminazione, parcheggi a pagamento e reti wireless, con l’obiettivo di rendere più intelligente la gestione urbana, inclusa la mobilità e le risorse ambientali.",
      icon: SmartCity,
    },
    {
      id: 6,
      title: "NEXT GENERATION NETWORKS",
      shortDescription: "Reti avanzate per una connettività ultraveloce",
      longDescription:
        "MEDINET progetta reti in fibra ottica di giunzione e accesso, utilizzando tecnologie FTTC, FTTS, FTTB, FTTH. Offre anche servizi di progettazione esecutiva e di ottenimento permessi da Enti pubblici.",
      icon: NextGenerationNetworks,
    },
  ];

  const slides = [
    {
      image: HomePage1,
      title: "Connettività e Innovazione nelle Reti Mobili",
      description: "Siamo i partner per l’evoluzione delle telecomunicazioni",
      altText: "First slide",
    },
    {
      image: HomePage2,
      title: "Verso Città Intelligenti e Connesse",
      description: "Tecnologia IoT per trasformare l’ambiente urbano",
      altText: "Second slide",
    },
    {
      image: HomePage3,
      title: "Potenziamo il Futuro con Reti a Banda Ultra Larga",
      description: "Soluzioni avanzate per il digitale di domani",
      altText: "Third slide",
    },
  ];

  //Informazioni delle sedi

  //position_potenza corrisponde alle coordinate di potenza che vengono visualizzate nella mappa (utili perchè rappresentano il centro tra campania e basilicata)
  const position_potenza = [40.646040469819354, 15.809515347484554];
  const sedeData = [
    {
      id: 1,
      title: "Sede Legale",
      location: "75015 Marconia (MT)",
      address: "Via Parmisco, 20",
      coordinates: [40.368822433624565, 16.691240104409857],
    },
    {
      id: 2,
      title: "Unità Locale Basilicata e Calabria",
      location: "75013 Ferrandina (MT)",
      address: "SS 407 Basentana, Borgo Macchia",
      coordinates: [40.470923822271686, 16.50222123474668],
    },
    {
      id: 3,
      title: "Unità Locale Campania",
      location: "80026 Casoria (NA)",
      address: "Via Ponza, 3",
      coordinates: [40.898638334620394, 14.317064950111815],
    },

    {
      id: 4,
      title: "Unità Locale Puglia",
      location: "70026 Modugno (BA)",
      address: "Contrada Macchia Madama, SS96 Km 115,200",
      coordinates: [41.0892474583844, 16.780158460654903],
    },
  ];

  //icona personalizzata per la mappa sezione Sedi
  const customIcon = new L.Icon({
    iconUrl: iconMap, // Cambia questo con il percorso dell'icona
    iconSize: [32, 32], // Imposta la dimensione dell'icona
    iconAnchor: [16, 32], // Punto in cui l'icona si ancorerà rispetto alle coordinate
    popupAnchor: [0, -32], // Punto in cui il popup si ancorerà rispetto alle coordinate
    zIndexOffset: 1000, // Ensure markers stay on top
  });

  /*SEZIONE LOGHI*/

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 56; // Altezza della navbar
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      {/*----------------------------------------- INIZIO SEZIONE HOMEPAGE CON CAROUSEL IMMAGINI ------------------*/}
      <div
        id="home"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#home"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.image}
                className="d-block w-100"
                alt={slide.altText}
              />
              <div
                className="carousel-caption d-md-block d-flex flex-column align-items-center justify-content-center"
                style={{ height: "15%" }}
              >
                <h5 className="text-center">{slide.title}</h5>
                <p className="text-center">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#home"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Precedente</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#home"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Successivo</span>
        </button>
      </div>
      {/* ---------------FINE SEZIONE HOMEPAGE CON CAROUSEL IMMAGINI --------------------------------------------------------------------------*/}



      {/*----------------------------------------- INIZIO SEZIONE CHI SIAMO --------------------------------------------------------------------------*/}
      <div className="background-div" style={{ backgroundImage: `url(${backGroundImage})` }}>
        <div id="chi-siamo" className="section py-5 background-light">
            <div className="container">
              <div className="row-chiSiamo">
              <div className="text-content">
                  {/* Contenitore del Titolo */}
                  <div
                  id="aos-fade-up-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  >
                   <h2 className="titolo-chiSiamo">
                      Innovazione e connessione: la nostra missione è costruire il futuro con
                      soluzioni tecnologiche all'avanguardia, sostenibili e su misura per le
                      tue esigenze.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                
              <div
                  className="col-md-7 custom-text-style"
                  data-aos="fade-up"
                  data-aos-duration="1000"
              >
                  <p className="paragrafo-chiSiamo">
                    MEDINET nasce come realtà specializzata nel settore delle
                    telecomunicazioni, crescendo rapidamente grazie alla competenza e alla
                    capacità di adattarsi a un settore in costante evoluzione. Fin dai suoi
                    esordi, l'azienda ha ampliato la propria offerta, integrando servizi di
                    progettazione e implementazione di infrastrutture per reti mobili e
                    fisse, sistemi di trasmissione, soluzioni IoT, e progetti nel campo delle
                    energie rinnovabili.
                  </p>
                  <p className="paragrafo-chiSiamo">
                    La missione di MEDINET è fornire soluzioni tecnologiche avanzate e
                    personalizzate che rispondano alle esigenze di connettività e
                    trasformazione digitale dei suoi clienti. Ci impegniamo a garantire
                    eccellenza operativa e sostenibilità, realizzando progetti che uniscono
                    qualità, efficienza e innovazione.
                  </p>
                </div>
                <div className="col-md-5 d-none d-md-block" >
                <div
                      className="container-immagineChiSiamo "
                      data-aos="fade-left"
                      data-aos-duration="900"
                  >
                    <img
                      src={Team} // Sostituisci con l'immagine giusta
                      alt="Chi siamo"
                      className="immagine-ChiSiamo" // Applica la classe custom-img
                  />
                  </div>
                </div>

              </div>
            </div>
          </div>
          { /* -----------------FINE SEZIONE CHI SIAMO --------------------------------------------------------------------------*/}

        {/* -----------------SEZIONE SERVIZI CON LE CARD------------------------------------------------------------------------- */}

        <section id="servizi" className="container py-5">
        <h1 className="titolo-Servizi">
              Tutto quello che possiamo offrirti...
            </h1>
          <div className="row">
            {serviziData.map((servizio) => (
              <div
                key={servizio.id}
                className="col-md-4 d-flex justify-content-center mb-4"
              >
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front d-flex flex-column align-items-center p-3">
                      <div className="icon-container mb-3">
                        <img
                          src={servizio.icon}
                          alt="Antenna Icon"
                          className="icon"
                        />
                      </div>
                      <h3 id="titoloCardServizi">{servizio.title}</h3>
                      <p id="desrizioneShortCardServizi">
                        {servizio.shortDescription}
                      </p>
                    </div>
                    <div className="flip-card-back d-flex flex-column align-items-center justify-content-center p-3">
                      <p id="desrizioneLongCardServizi">
                        {servizio.longDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*--------------------- FINE SEZIONE "SERVIZI"---------------------------------------------------------------------------------- */}

        {/*------------------------------ INIZIO SEZIONE Clienti -------------------------------------------------------------------*/}
        <div
        id="clienti"
        className="clienti-wrapper clienti-section" // Usa la classe CSS
        >
          <div className="container">
            <center>
            <h2
              className="titolo-clienti"
              data-aos="fade-up"
              data-aos-duration="2000"
          >
                La Nostra Forza: La Fiducia dei Nostri Clienti
              </h2>
            </center>

            <div className="sezioneLoghiClienti">
              <div
                className="row text-center justify-content-center"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {[
                  { logo: LogoTim, name: "tim", url: "https://www.tim.it" },
                  {
                    logo: LogoWind,
                    name: "wind",
                    url: "https://www.windtre.it",
                  },
                  {
                    logo: LogoEriccson,
                    name: "ericcson",
                    url: "https://www.ericsson.it",
                  },
                  {
                    logo: LogoZte,
                    name: "zte",
                    url: "https://www.zteitalia.it/",
                  },
                  {
                    logo: LogoVodafone,
                    name: "vodafone",
                    url: "https://www.privati.vodafone.it",
                  },
                  {
                    logo: LogoInwit,
                    name: "inwit",
                    url: "https://www.inwit.it/it",
                  },
                  {
                    logo: LogoCellNex,
                    name: "cellnex",
                    url: "https://www.cellnex.com/it-it/",
                  },
                  {
                    logo: LogoHuawei,
                    name: "huawei",
                    url: "https://consumer.huawei.com/it/",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="col-6 col-md-3 d-flex justify-content-center align-items-center my-3"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.logo}
                        alt={`Logo ${item.name}`}
                        className={`logo img-fluid ${item.name}`} // Aggiungiamo la classe con il nome originale
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------ FINE SEZIONE Clienti------------------------------------------------------------------ */}
      </div>

      {/*------------------------------ INIZIO SEZIONE SEDI--------------------------------------------------------------------------- */}
      <div id="sedi" className="sedi-wrapper">
        <div className="container">
          <center>
          <h2 className="titolo-sedi">
              Le nostre Sedi
            </h2>
          </center>

          <div className="row justify-content-center">
            {/* Card unica che occupa 10 colonne */}
            <div className="col-12 col-md-10 mb-4">
              <div className="card sedi-card">
                <div className="card-map-body d-flex">
                  {/* Sezione sinistra - Elenco sedi (2/5 della larghezza) */}
                  <div className="col-12 col-md-5 p-3 sedi-text">
                    <ul className="list-unstyled">
                      {sedeData.map((sede) => (
                        <li key={sede.id} className="sedi-item mb-3">
                          <div className="sedi-header">
                            <h6 className="font-weight-bold">{sede.title}</h6>
                          </div>
                          <div className="sedi-details">
                            <p>
                              <strong>Indirizzo:</strong> {sede.address}
                            </p>
                            <p>
                              <strong>Località:</strong> {sede.location}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sezione destra - Mappa con i marker (3/5 della larghezza) */}
                  {/* sito mappe preview https://leaflet-extras.github.io/leaflet-providers/preview/ */}
                  <div className="col-12 col-md-7 p-0 sedi-mappa">
                    <MapContainer
                      center={position_potenza}
                      zoom={7}
                      scrollWheelZoom={false}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      {sedeData.map((sede) => (
                        <Marker
                          key={sede.id}
                          position={sede.coordinates}
                          icon={customIcon}
                        >
                          <Popup className="custom-popup">
                            <h4>{sede.title}</h4>
                            <strong>Indirizzo:</strong> {sede.address} <br />
                            <strong>Località:</strong> {sede.location}
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------ FINE SEZIONE SEDI -------------------------------------------------------------------------*/}
    </div>
  );
};

export default Home;
