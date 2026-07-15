import React from 'react';

const Permisos = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>C · Permisos por línea de comandos</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>1. Ejecución y Configuración</h2>
        <p>A continuación se detallan los comandos utilizados para establecer la estructura de directorios, aplicar permisos restrictivos, cambiar propietarios y configurar bits especiales:</p>
        
        <div style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
          <code>mkdir -p ~/demo && cd ~/demo && touch nota.txt && mkdir privado</code><br/>
          <code>chmod 600 nota.txt</code><br/>
          <code>chmod u+x,go-rwx privado</code><br/>
          <code>sudo chown root:root nota.txt</code><br/>
          <code>sudo mkdir /srv/compartido && sudo chmod 2775 /srv/compartido</code><br/>
          <code>sudo chmod +t /tmp</code>
        </div>

        <img src="/ls -l.jpg" alt="Ejecución de comandos básicos" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '5px 0' }} />
        <img src="/sudo chmod +t.jpg" alt="Proceso de configuración de permisos y bits especiales" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '5px 0' }} />
        
        <h3 style={{ marginTop: '20px' }}>Validación final</h3>
        <img src="/ls -ld compartido.jpg" alt="Verificación final de bits especiales" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '15px 0' }} />
        <p><em>La 's' en <code>/srv/compartido</code> (SetGID) y la 't' en <code>/tmp</code> (Sticky Bit) confirman la configuración correcta.</em></p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>2. Explicación de permisos (rwx)</h2>
        <p>La cadena <code>-rw-rw-r--</code> se divide en tres grupos de tres caracteres:</p>
        <ul>
          <li><strong>Propietario (rw-):</strong> Lectura y escritura.</li>
          <li><strong>Grupo (rw-):</strong> Lectura y escritura.</li>
          <li><strong>Otros (r--):</strong> Solo lectura.</li>
        </ul>
        <p><strong>Nomenclatura numérica:</strong> r=4, w=2, x=1. Se utiliza para asignar permisos mediante sumatoria de valores posicionales.</p>
        <p><strong>Nomenclatura simbólica:</strong> Utiliza letras (u=usuario, g=grupo, o=otros) junto con operadores (+, -) para modificar permisos de manera más intuitiva y legible.</p>
      </section>

      <section style={{ backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px' }}>
        <h2>3. Bits Especiales (s y t)</h2>
        <p><strong>SetGID (2775):</strong> Los archivos heredan el grupo del directorio. Ideal para trabajo colaborativo.</p>
        <p><strong>Sticky Bit (+t en /tmp):</strong> Protege archivos contra borrado accidental por terceros. Vital para directorios temporales.</p>
      </section>
    </div>
  );
};

export default Permisos;