import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <h2>Contacto</h2>
        <div className="contacto-content">

          {/* Información de contacto */}
          <div className="contacto-info">
            <p><i className="fas fa-envelope"></i><span className="contacto-subtitulo">Correo electrónico:</span> <a href="mailto:natalia_a.hernandez@uao.edu.co">natalia_a.hernandez@uao.edu.co</a></p>
            <p><i className="fas fa-phone"></i><span className="contacto-subtitulo">Celular:</span> +57 302 406 2217</p>
            <p><i className="fas fa-map-marker-alt"></i><span className="contacto-subtitulo">Ciudad:</span> Cali, Colombia</p>
            
            {/* Redes Sociales */}
            <p><i className="fab fa-instagram"></i><span className="contacto-subtitulo">Instagram:</span> <a href="https://instagram.com/nathernandez__" target="_blank" rel="noopener noreferrer">nathernandez__</a></p>
            <p><i className="fab fa-facebook"></i><span className="contacto-subtitulo">Facebook:</span> <a href="https://facebook.com/nataliahernandez" target="_blank" rel="noopener noreferrer">Natalia Hernandez</a></p>
            <p><i className="fab fa-twitch"></i><span className="contacto-subtitulo">Twitch:</span> <a href="https://twitch.tv/BlearyNath" target="_blank" rel="noopener noreferrer">BlearyNath</a></p>
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
