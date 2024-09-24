import React from 'react';

const Gitignore = () => {
  return (
    <section id="gitignore" className="gitignore-section">
      <div className="container">
        <h2>¿Cómo configurar un archivo .gitignore?</h2>
        <p>
          El archivo <code>.gitignore</code> se utiliza para indicar a Git qué archivos y carpetas deben ser ignorados y no rastreados en el repositorio.
        </p>
        <div className="pasos">
          <div className="paso">
            <h3>Paso 1: Crear el archivo .gitignore</h3>
            <p>
              En la raíz de tu proyecto, crea un archivo llamado <code>.gitignore</code>. Puedes hacerlo manualmente o utilizando un comando en la terminal:
            </p>
            <pre><code>touch .gitignore</code></pre>
          </div>
          <div className="paso">
            <h3>Paso 2: Editar el archivo .gitignore</h3>
            <p>
              Abre el archivo <code>.gitignore</code> en el editor de texto y agrega las rutas de los archivos y carpetas que deseas que Git ignore.
            </p>
            <pre><code>
# Ignorar la carpeta node_modules
node_modules/

# Ignorar archivos de entorno
.env

# Ignorar archivos compilados
dist/
build/
            </code></pre>
          </div>
          <div className="paso">
            <h3>Paso 3: Guardar y confirmar los cambios</h3>
            <p>
              Guarda los cambios en el archivo <code>.gitignore</code> y realiza un commit para aplicar la configuración:
            </p>
            <pre><code>
git add .gitignore
git commit -m "Añadir configuración de .gitignore"
git push origin main
            </code></pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gitignore;
