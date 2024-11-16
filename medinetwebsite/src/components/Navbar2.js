import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './SitemarkIcon';
import SvgIcon from '@mui/material/SvgIcon';
import MediNet from '../../public/Medinet.png'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: alpha('#ffffff', 0.8),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '0px 12px',
  }));

function Navbar2() {
    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0}}>
            <Box sx={{display: 'flex', alignItems: 'center', mr: 2  }}>
              <img
                src={MediNet}
                alt="logo"
                style={{
                width: 'auto',   
                height: '40px',     
                objectFit: 'contain' 
                }}
              />
            </Box>
            {/*<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="large">
                Features
              </Button>
              <Button variant="text" color="info" size="large">
                Testimonials
              </Button>
              <Button variant="text" color="info" size="small">
                Highlights
              </Button>
              <Button variant="text" color="info" size="small">
                Pricing
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                FAQ
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                Blog
              </Button>
            </Box>*/}
            <Box sx={{
              ml: 'auto', // Spinge i bottoni a destra
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1, // Spaziatura tra i bottoni
            }}>
            {['Features', 'Testimonials', 'Highlights', 'Pricing', 'FAQ', 'Blog'].map(
            (label, index) => (
            <Button
              key={index}
              variant="text"
              size="large"
              sx={{
              textTransform: 'none', // Evita l'uppercase
              fontSize: '19px', // Cambia dimensione del font
              fontFamily: 'Roboto, sans-serif', // Font
              fontWeight: 'bold',              // Grassetto
              color: '#174081', // Colore del testo
              bgcolor: 'transparent', // Sfondo trasparente
              border: '1px solid transparent', // Evita bordi visibili
              transition: 'all 0.3s ease-in-out', // Transizione per l'effetto hover
              '&:hover': {
                color: '#fff', // Colore del testo invertito
                bgcolor: '#174081', // Sfondo invertito
                borderRadius: '20px', // Arrotondamento maggiore durante l'hover
              },
              }}
            >
              {label}
            </Button>
            )
            )}
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar2
