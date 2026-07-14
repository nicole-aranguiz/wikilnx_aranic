import React from 'react';

const Permisos = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>C · Permisos por línea de comandos</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>1. Ejecución de comandos</h2>
        <div style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '15px', borderRadius: '8px' }}>
          <code>mkdir -p ~/demo && cd ~/demo && touch nota.txt && mkdir privado</code><br/>
          <code>ls -l</code><br/>
          <code>chmod 600 nota.txt</code><br/>
          <code>chmod u+x,go-rwx privado</code><br/>
          <code>sudo chown root:root nota.txt</code><br/>
          <code>sudo mkdir /srv/compartido && sudo chmod 2775 /srv/compartido</code><br/>
          <code>sudo chmod +t /tmp</code><br/>
          <code>ls -ld /srv/compartido /tmp</code>
        </div>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>2. Explicación de permisos (rwx)</h2>
        <p>La cadena <code>-rw-rw-r--</code> se divide en tres grupos de tres caracteres:</p>
        <ul>
          <li><strong>Propietario (rw-):</strong> Puede leer y escribir el archivo, pero no ejecutarlo.</li>
          <li><strong>Grupo (rw-):</strong> Los usuarios del grupo tienen permisos de lectura y escritura.</li>
          <li><strong>Otros (r--):</strong> El resto de usuarios solo puede leer el archivo.</li>
        </ul>
        <p><strong>Nomenclatura numérica:</strong> r=4, w=2, x=1. (Ejemplo: <code>rw-</code> es 4+2=6).</p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>3. Conceptos clave</h2>
        <p><strong>Chown:</strong> Cambia el propietario y/o grupo de un archivo o directorio. Se necesita <code>sudo</code> porque solo el superusuario puede asignar archivos a otros usuarios.</p>
        
        <p><strong>Modos de permiso:</strong></p>
        <ul>
          <li><strong>Numérico:</strong> Define permisos mediante la suma de valores (ej. 755). Es directo y rápido.</li>
          <li><strong>Simbólico:</strong> Usa letras (u=usuario, g=grupo, o=otros) y operadores (+, -, =) para modificar permisos existentes sin cambiar el resto.</li>
        </ul>
      </section>

      <section style={{ backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px' }}>
        <h2>4. Bits Especiales (s y t)</h2>
        <p><strong>SetGID (la 's' en 2775):</strong> Cuando se aplica a un directorio, los archivos creados dentro heredan el grupo del directorio, no el del usuario que los creó. Es ideal para carpetas compartidas por un equipo.</p>
        <p><strong>Sticky Bit (la 't' en /tmp):</strong> Permite que solo el dueño de un archivo o el superusuario puedan borrar o renombrar archivos dentro de un directorio, aunque otros usuarios tengan permisos de escritura. Es vital para directorios temporales compartidos.</p>
      </section>
    </div>
  );
};

export default Permisos;