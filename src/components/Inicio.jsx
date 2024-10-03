import React, { useEffect, useState } from 'react';
import './Inicio.css';

const Inicio = () => {
  const message = "Estudiante de la Universidad Autónoma de Occidente, actualmente en séptimo semestre de Ingeniería Multimedia.";
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const typingSpeed = 30;

  useEffect(() => {
    if (subIndex < message.length) {
      setTimeout(() => {
        setSubIndex(prev => prev + 1);
      }, typingSpeed);
    }
  }, [subIndex, message]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink(prev => !prev), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <section id="inicio" className="inicio-section">
      <div className="inicio-content">
        <h1 className="fall-animation">¡Hola! Soy <span>Natalia Hernandez</span></h1>
        <p className="dynamic-text">
          {message.substring(0, subIndex)}
          <span className="cursor">{blink ? "|" : " "}</span>
        </p>
        <a href="#contacto" className="btn">Contáctame</a>
      </div>
    </section>
  );
};

export default Inicio;
