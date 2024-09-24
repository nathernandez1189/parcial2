import React from 'react';
import fotodeperfil from '../Img/miperfil.jpeg'

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="container">
        <div className="sobre-mi-img">
          <img src= {fotodeperfil} alt="Foto de perfil" />
        </div>
        <div className="sobre-mi-info">
          <h2>Sobre mí</h2>
          <p>Soy una profesional en proceso, apasionada por la tecnología y el diseño. Me encanta aprender nuevas tecnologías y enfrentar desafíos.</p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
