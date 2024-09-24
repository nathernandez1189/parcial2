import React from 'react';

// Aquí están todos tus proyectos, tanto los antiguos como los nuevos.
const proyectos = [
  {
    nombre: "Clase 1 Web",
    descripcion: "Inicio de Desarrollo Web: En esta clase iniciamos conociendo cómo se maneja la plataforma de GitHub y cómo enlazarla con Visual Studio. La tarea era abrir el archivo .gitignore y agregar las rutas de los binarios para que Git los ignore.",
    enlace: "https://github.com/nathernandez1189/Clase-1-web.git"
  },
  {
    nombre: "Características CSS",
    descripcion: "Aprendiendo del Desarrollo Web: En esta clase aprendimos un poco de cómo hacer una interfaz HTML y CSS.",
    enlace: "https://github.com/nathernandez1189/caracteristicas-css.git"
  },
  {
    nombre: "Login y Registro",
    descripcion: "Creando login: Creamos un inicio de sesión que permitía registrarse y, si olvidabas la contraseña, te daba la opción de recuperarla.",
    enlace: "https://github.com/edwinmgallego/clase-practica-css-jueves/tree/main/DevNatHernandez"
  },
  {
    nombre: "Portafolio Profesional",
    descripcion: "Mi portafolio profesional: Incluyendo toda la información vista anteriormente y un poco de información sobre mí.",
    enlace: "https://github.com/nathernandez1189/parcial.git"
  },
  {
    nombre: "Clase Virtual",
    descripcion: "Gestión de clases virtuales: En este proyecto, trabajamos con conceptos básicos de JavaScript, incluyendo condicionales y funciones flecha. Inicialmente, configuramos el entorno y realizamos ejercicios básicos, luego finalizamos las condicionales y corregimos errores en funciones flecha.",
    enlace: "https://github.com/nathernandez1189/Clase-virtual.git"
  },
  {
    nombre: "Jueves 12 Sep",
    descripcion: "Proyecto del 12 de septiembre: ealizamos un contador utilizando JavaScript. El objetivo era implementar un contador que se actualiza automáticamente con un intervalo de tiempo, además de manejar eventos como promesas, temporizadores (setTimeout y setInterval), y operadores ternarios para optimizar el código.",
    enlace: "https://github.com/nathernandez1189/jueves12sep.git"
  },
  {
    nombre: "Mi Primer Proyecto React",
    descripcion: "Primer proyecto en React: El 19 de septiembre de 2024, iniciamos un proyecto en React. Realizamos los primeros commits para configurar el repositorio, fusionar ramas y actualizar el archivo README.md.",
    enlace: "https://github.com/nathernandez1189/mi-primer-proyecto-react.git"
  }
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos-section">
      <div className="container">
        <h2>Proyectos</h2>
        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="proyecto-item">
              <div className="proyecto-info">
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
                <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="btn">Ver proyecto</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
