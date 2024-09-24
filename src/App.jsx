import React from 'react';
import './App.css';
import Header from './components/Header';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Gitignore from './components/Gitignore';
import Contacto from './components/Contacto';
import Footer from './components/Footer'; 

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Gitignore />
      <Contacto />
      <Footer /> 
    </div>
  );
}

export default App;
