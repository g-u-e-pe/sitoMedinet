import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MediNet from '../../public/logoMedinetremove.png'
import text from '../../public/MedinetTextRemove.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function NavbarDef({scrolled}) {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
      };
    
  return (
    <AppBar
      position="fixed"
      sx={{
        transition: "all 0.3s ease-in-out", // Transizione fluida
        bgcolor: scrolled ? "primary.main" : "rgba(255, 255, 255, 0.7)", // Cambia colore
        height: scrolled ? "60px" : "150px", // Cambia altezza
        boxShadow: scrolled ? 4 : 0, // Aggiunge ombreggiatura durante lo scroll
      }}
    >
      <Toolbar
        sx={{
          height: "100%", // Garantisce che il contenuto riempia l'altezza
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 0, // Padding orizzontale
        }}
      >
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2  }}>
            <img
            src= {MediNet}
            alt="logo"
            style={{
            width: 'auto',   
            height: '110px',     
            objectFit: 'contain' 
            }}
            />
            <img
            src= {text}
            alt="logo"
            style={{
            width: 'auto',   
            height: scrolled?"40px":'70px',     
            objectFit: 'contain' 
            }}
            />
        </Box>

        {/* Links 
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {['Home', 'Chi siamo', 'Servizi','Clienti', 'Sedi', 'Contatti'].map((label, index) => (
            <Typography
              key={index}
              variant="button"
              sx={{
                fontSize: scrolled ? "14px" : "22px", // Cambia dimensione dei link
                transition: "all 0.3s ease-in-out", // Transizione fluida per i link
                cursor: "pointer",
                color: scrolled?"white":"#174081"
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>*/}
        {/* Tabs Section */}
        <Tabs
          value={activeTab}
          onChange={handleChange}
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#174081", // Colore dell'indicatore
              height: 3, // Altezza della barra sotto la tab
            },
          }}
          sx={{
            "& .MuiTab-root": {
              fontSize: scrolled ? "14px" : "16px",
              color: scrolled ? "white" : "#174081",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                color: "#174081", // Cambia colore al passaggio
              },
            },
            "& .Mui-selected": {
              color: "#174081", // Colore della scheda attiva
              fontWeight: "bold",
            },
            "& .MuiTab-root:hover::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "3px",
              backgroundColor: "#174081",
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
                    height: "3px",
                    backgroundColor: "#174081",
                    transform: "scaleX(1)", // Estende la barra blu
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              />
            )
          )}
        </Tabs>
      </Toolbar>
      
    </AppBar>

  );
}

export default NavbarDef;

