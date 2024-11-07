import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Assicurati di avere questo import corretto
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div className="content" style={{ flex: '1' }}>
        <Home /> {/* Inserisci il componente Home qui */}
      </div>
      <Footer /> {/* Il footer dovrebbe essere qui per assicurarsi che venga visualizzato alla fine */}
    </div>
  );
};

export default App;
