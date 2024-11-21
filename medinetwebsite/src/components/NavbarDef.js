import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MediNet from '../../public/logoMedinetremove.png'
import MediNetOmbra from '../../public/logoMedinetOmbraRemove.png'
import text from '../../public/MedinetTextRemove.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useMediaQuery } from "@mui/material"; // Importa useMediaQuery
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Button from '@mui/material/Button';

function NavbarDef({scrolled}) {
    const [activeTab, setActiveTab] = useState(0);
    const [progress, setProgress] = useState(50); // Stato per il progresso
    const [open, setOpen] = React.useState(false);
    const sectionIds = ["home", "chi-siamo", "servizi", "clienti", "sedi", "contatti"];
    const isSmallScreen = useMediaQuery("(max-width: 600px)"); // Verifica se lo schermo è xs o sm

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Posizione corrente dello scroll
      const docHeight = document.documentElement.scrollHeight; // Altezza totale del documento
      const winHeight = window.innerHeight; // Altezza visibile della finestra
      const totalScroll = docHeight - winHeight; // Altezza totale scorribile

      // Se è uno schermo piccolo (xs o sm), inizia da 0%, altrimenti parte da 50%
      const startProgress = isSmallScreen ? 0 : 50;

      // Calcolo del progresso, con 50% al punto di partenza (o 0% su schermi piccoli) e 100% alla fine
      const progress = startProgress + ((scrollTop / totalScroll) * (100 - startProgress));
      setProgress(Math.min(progress, 100)); // Limita il valore massimo al 100%
    };

    if (scrolled) {
      window.addEventListener("scroll", handleScroll); // Aggiunge l'evento scroll
      handleScroll(); // Calcola il progresso iniziale
    } else {
      setProgress(isSmallScreen ? 0 : 50); // Resetta il progresso a 0% su schermi piccoli e 50% su schermi più grandi
    }

    return () => {
      window.removeEventListener("scroll", handleScroll); // Rimuove l'evento scroll per evitare memory leak
    };
  }, [scrolled, isSmallScreen]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionIds.indexOf(entry.target.id);
            if (index !== -1) setActiveTab(index); // Attiva la tab corrispondente
          }
        });
      },
      { root: null, threshold: 0.5 }
    );
  
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  
    const footer = document.getElementById("contatti"); // Assicurati che il footer abbia l'id "contatti"
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(sectionIds.length - 1); // Attiva la tab per il footer (Contatti)
          }
        });
      },
      { root: null, threshold: 0.1 } // Ridotto a 10% per il footer
    );
  
    if (footer) footerObserver.observe(footer);
  
    return () => {
      sectionObserver.disconnect();
      footerObserver.disconnect(); // Pulizia di entrambi gli observer
    };
  }, [sectionIds]);
  
  // Funzione per scrollare alla sezione corrispondente
  const handleTabClick = (index) => {
    setActiveTab(index);
    setOpen(false)
    const section = document.getElementById(sectionIds[index]);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Aggiunge un'animazione fluida
        block: "start", // Allinea la sezione alla parte superiore della finestra
      });
    }
  };
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

    
  return (
    <AppBar
      position="fixed"
      sx={{
        transition: "all 0.3s ease-in-out", // Transizione fluida
        background: scrolled ? `linear-gradient(to right, #1976d2 ${progress}%, #5A9BE5 ${progress}%)` : "rgba(228, 241, 251, 0.6)", // Cambia colore
        height: scrolled ? "60px" : "150px", // Cambia altezza
        boxShadow: scrolled ? 4 : 0, // Aggiunge ombreggiatura durante lo scroll
      }}
    >
      <Toolbar sx={{height: "100%", display: "flex",alignItems: "center",justifyContent: "space-between"}}>
        <Box sx={{ display: { sm:'none',xs: 'none', md: 'flex',lg:"flex" }, alignItems: 'center',gap: 2}}>
            {scrolled?
            <img src={MediNetOmbra} alt="logo" style={{ width: 'auto',height: '110px',objectFit: 'cover'}}/>
            :<img src={MediNet} alt="logo" style={{width: '110px', height: '110px', objectFit: 'cover', }}/>
            }
            <img src= {text} alt="logo" style={{width: 'auto', height: scrolled?"40px":'70px', objectFit: 'contain'}}/>
        </Box>
        <Tabs
          value={activeTab}
          onChange={(event, newValue) => handleTabClick(newValue)}
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#174081", // Colore dell'indicatore
              height: scrolled ? 0 : 3, // Altezza della barra sotto la tab
            },
          }}
          sx={{
            display: { sm:'none',xs: 'none', md: 'none',lg:"flex" },
            "& .MuiTab-root": {
              fontSize: scrolled ? "14px" : "16px",
              color: scrolled ? "white" : "#174081",
              fontWeight: "bold",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                color: scrolled?"#174081":"#174081", // Cambia colore al passaggio
              },
            },
            "& .Mui-selected": {
              color:scrolled?"white": "#174081", // Colore della scheda attiva
              fontWeight: "bold",
            },
            "& .MuiTab-root:hover::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: scrolled?"0px":"3px",
              backgroundColor: "#174081",
              fontWeight: "bold",
              transform: "scaleX(1)", // Mostra barra blu al passaggio del mouse
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          {["Home", "Chi siamo", "Servizi", "Clienti", "Sedi", "Contatti"].map(
            (label, index) => (
              <Tab
                key={index}
                label={label}
                sx={{
                  position: "relative", // Necessario per usare `::after`
                  "&:hover::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height:"3px",
                    backgroundColor: "#174081",
                    transform: "scaleX(1)", // Estende la barra blu
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              />
            )
          )}
        </Tabs>
        <Box
          sx={{
          display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }, // Gestisce visibilità in base alla dimensione dello schermo
          alignItems: 'center',
          gap: 1,
          justifyContent: 'center', // Allinea gli elementi orizzontalmente nel centro
          flexDirection: 'row', // Dispone le immagini orizzontalmente
          }}
        >
          {scrolled ? (
          <img
            src={MediNetOmbra}
            alt="logo"
            style={{
            width: 'auto',
            height: '110px',
            objectFit: 'cover', // Rende l'immagine proporzionata e copre il contenitore
            maxWidth: '100%', // Impedisce che l'immagine esca dal contenitore
            }}
          />
          ) : (
          <img
            src={MediNet}
            alt="logo"
            style={{
            width: '110px',
            height: 'auto', // Imposta l'altezza automatica per mantenere le proporzioni
            objectFit: 'cover',
            maxWidth: '100%', // Limita la larghezza massima
            }}
          />
          )}

          {!scrolled && (
          <img
            src={text}
            alt="logo"
            style={{
            width: 'auto',
            height: '40px',
            objectFit: 'contain', // Mantiene le proporzioni dell'immagine
            maxWidth: '100%', // Limita la larghezza dell'immagine
            }}
          />
          )}
        </Box>
        <Box sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" }, gap: 0 }}>
          <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right" // Cambia da 'top' a 'right' per il menu a destra
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
            sx: {
            top: "var(--template-frame-height, 0px)",
            width: "250px", // Puoi aggiustare la larghezza
            backgroundColor: "rgb(228, 241, 251)", // Colore di sfondo
            },
            }}
          >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseRoundedIcon />
              </IconButton>
            </Box>

          {/* Menu Items con logica per andare alla sezione */}
            {["Home", "Chi siamo", "Servizi", "Clienti", "Sedi", "Contatti"].map((label, index) => (
            <MenuItem
              key={index}
              sx={{
              color: "#174081", // Cambia il colore delle scritte
              fontWeight: "bold",
              "&:hover": {
              color: "#5A9BE5", // Colore al passaggio del mouse
              },
              }}
              onClick={() => handleTabClick(index)} // Usa handleTabClick per scorrere alla sezione
            >
              {label}
            </MenuItem>
          ))}
          </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>

  );
}

export default NavbarDef;

