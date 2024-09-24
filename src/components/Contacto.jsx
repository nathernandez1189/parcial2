import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <h2>Contacto</h2>
        <div className="contacto-content">
          {/* Información de contacto */}
          <div className="contacto-info">
            <p><i className="fas fa-envelope"></i> natalia_a.hernandez@uao.edu.co</p>
            <p><i className="fas fa-phone"></i> +57 302 406 2217</p>
            <p><i className="fas fa-map-marker-alt"></i> Cali, Colombia</p>
            <div className="contacto-redes">
              <a href="https://www.linkedin.com/in/nathernandez1189" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/nathernandez1189" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/nathernandez1189" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <form action="https://formspree.io/f/tu_form_id" method="POST" className="contacto-form">
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu email" required />
            <input type="text" name="asunto" placeholder="Asunto" required />
            <textarea name="mensaje" rows="5" placeholder="Tu mensaje" required></textarea>
            <button type="submit" className="btn">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
