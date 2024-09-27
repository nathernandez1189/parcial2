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
          <p>Soy una profesional en proceso, apasionada por la tecnología y el diseño. Disfruto aprender nuevas tecnologías y enfrentar desafíos que me permiten crecer tanto personal como profesionalmente. Soy una persona sociable, siempre dispuesta a aprender cosas nuevas y a conectar con las personas que me rodean. Mi objetivo a corto plazo es continuar desarrollando mis habilidades en diseño UX/UI y profundizar en la programación de videojuegos. A largo plazo, me gustaría contribuir a proyectos que fusionen tecnología y diseño para mejorar la experiencia de los usuarios.</p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
