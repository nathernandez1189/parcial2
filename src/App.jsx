import React from 'react';
import './App.css';
import Header from './components/Header';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Footer /> 
      <ScrollToTop />
    </div>
  );
}

export default App;
