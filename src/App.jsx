import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Gitignore from './components/Gitignore'; 
import Contacto from './components/Contacto';
import './App.css';

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
    </div>
  );
}

export default App;
