import React from 'react';

const Habilidades = () => {
  return (
    <section id="habilidades" className="habilidades-section">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="habilidades-content">
          {/* Desarrollo Web */}
          <div className="habilidad">
            <i className="fas fa-code"></i>
            <h3>Desarrollo Web</h3>
            <p>HTML, CSS, JavaScript, React, Node.js</p>
          </div>
          
          {/* Diseño Gráfico */}
          <div className="habilidad">
            <i className="fas fa-paint-brush"></i>
            <h3>Diseño Gráfico</h3>
            <p>Adobe Photoshop, Illustrator, Figma</p>
          </div>

          {/* Habilidades Blandas */}
          <div className="habilidad">
            <i className="fas fa-users"></i>
            <h3>Habilidades Blandas</h3>
            <p>Comunicación efectiva, Trabajo en equipo, Resolución de problemas</p>
          </div>

          {/* Idiomas */}
          <div className="habilidad">
            <i className="fas fa-language"></i>
            <h3>Idiomas</h3>
            <p>Español (Nativo), Inglés (Medio)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
