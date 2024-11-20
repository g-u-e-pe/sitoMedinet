import React , {useState, useEffect}from 'react';
import NavbarDef from './components/NavbarDef';
import Home from './components/Home'; // Assicurati di avere questo import corretto
import Footer from './components/Footer';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavbarDef scrolled= {scrolled}/>
      <div className="content" style={{ flex: '1', paddingTop: "150px"}}>
        <Home /> {/* Inserisci il componente Home qui */}
      </div>
      <Footer /> {/* Il footer dovrebbe essere qui per assicurarsi che venga visualizzato alla fine */}
    </div>
  );
};

export default App;
