import React from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './components/Home'; // Assicurati di avere questo import corretto
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar2 />
      <div className="content" style={{ flex: '1' }}>
        <Home /> {/* Inserisci il componente Home qui */}
      </div>
      <Footer /> {/* Il footer dovrebbe essere qui per assicurarsi che venga visualizzato alla fine */}
    </div>
  );
};

export default App;
