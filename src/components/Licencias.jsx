import React from 'react';

const Licencias = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>A · Software Libre y Licencias</h1>

      {/* Comandos del laboratorio */}
      <section style={{ marginBottom: '30px' }}>
        <h2>1. Exploración de Licencias en el Sistema</h2>
        <p>Para identificar y leer las licencias incluidas en el sistema operativo, se ejecutaron los siguientes comandos en la terminal del servidor Ubuntu:</p>
        
        <div style={{ 
          backgroundColor: '#2d2d2d', 
          color: '#f8f8f2', 
          padding: '15px', 
          borderRadius: '8px', 
          fontFamily: 'monospace', 
          marginBottom: '10px' 
        }}>
          <p style={{ margin: 0 }}>$ ls /usr/share/common-licenses/</p>
          <p style={{ margin: 0 }}>$ less /usr/share/common-licenses/GPL-3</p>
          <p style={{ margin: 0 }}>$ cat /usr/share/doc/bash/copyright</p>
        </div>
        
        {/* Evidencias de los comandos ejecutados */}
        <img src="/2. captura licencias.jpg" alt="Listado de licencias" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '10px 0' }} />
        <img src="/3. licencias.jpg" alt="Detalle licencia GPL" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '10px 0' }} />
        <img src="/4. licencia copyright.jpg" alt="Detalle copyright" style={{ width: '100%', maxWidth: '700px', borderRadius: '8px', border: '1px solid #ccc', margin: '10px 0' }} />
        
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>
          * Estos comandos permiten listar los archivos de licencias comunes del sistema, leer en detalle el documento de la licencia GPL-3 y consultar la declaración de derechos de autor (copyright) del intérprete de comandos bash.
        </p>
      </section>

      {/* Qué es el Software Libre */}
      <section style={{ marginBottom: '30px' }}>
        <h2>2. ¿Qué es el Software Libre?</h2>
        <p>
          El <strong>Software Libre</strong> es aquel que respeta la libertad de los usuarios y de la comunidad. En términos prácticos, significa que los usuarios tienen el control total sobre el programa para ejecutarlo, copiarlo, distribuirlo, estudiarlo, modificarlo y mejorarlo.
        </p>
        <p>Para que un programa sea considerado "libre", debe garantizar cuatro libertades fundamentales establecidas por la Free Software Foundation (FSF):</p>
        <ul>
          <li><strong>Libertad 0:</strong> La libertad de usar el programa con cualquier propósito.</li>
          <li><strong>Libertad 1:</strong> La libertad de estudiar cómo funciona el programa y modificarlo (el acceso al código fuente es un requisito previo).</li>
          <li><strong>Libertad 2:</strong> La libertad de distribuir copias para ayudar a otros.</li>
          <li><strong>Libertad 3:</strong> La libertad de mejorar el programa y hacer públicas esas mejoras para beneficiar a la comunidad.</li>
        </ul>
      </section>

      {/* Diferencias entre licencias */}
      <section style={{ marginBottom: '30px' }}>
        <h2>3. Diferencias entre tipos de Licencias</h2>
        <p>A nivel de distribución, existen tres grandes enfoques legales para el software:</p>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#fce4ec', borderBottom: '2px solid #d81b60' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>Tipo de Licencia</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Características Principales</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px' }}><strong>Copyleft (GPL)</strong></td>
                <td style={{ padding: '12px' }}>Protege la libertad del software. Si modificas un programa Copyleft y lo distribuyes, <strong>estás obligado</strong> a publicar tu código modificado bajo la misma licencia libre. Es "viral" para garantizar que el código nunca se vuelva privativo.</td>
                <td style={{ padding: '12px' }}>GNU GPL v2, GPL v3, AGPL</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px' }}><strong>Permisivas (MIT/BSD/Apache)</strong></td>
                <td style={{ padding: '12px' }}>Tienen restricciones mínimas. Permiten usar, modificar y distribuir el código, e incluso <strong>cerrarlo</strong> (incorporarlo dentro de software propietario), siempre que se mantenga el aviso de derechos de autor y la licencia original.</td>
                <td style={{ padding: '12px' }}>MIT, Apache 2.0, BSD</td>
              </tr>
              <tr>
                <td style={{ padding: '12px' }}><strong>Software Propietario</strong></td>
                <td style={{ padding: '12px' }}>El código fuente es secreto. La licencia restringe drásticamente lo que el usuario puede hacer: prohíbe la copia, redistribución o modificación. El usuario solo adquiere un "permiso de uso" bajo estrictas condiciones.</td>
                <td style={{ padding: '12px' }}>Windows, macOS, Microsoft Office</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Licencia de Ubuntu */}
      <section>
        <h2>4. ¿Bajo qué tipo de licencia está Ubuntu?</h2>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px', 
          borderLeft: '5px solid #d81b60' 
        }}>
          <p>
            Ubuntu <strong>no posee una única licencia general</strong> para todo el sistema. Es una distribución GNU/Linux, lo que significa que es un ecosistema compuesto por miles de paquetes de software desarrollados por diferentes comunidades, cada uno con su propia licencia.
          </p>
          <p style={{ marginBottom: 0 }}>Sin embargo, se compone de la siguiente manera:</p>
          <ul>
            <li><strong>El núcleo (Linux kernel):</strong> Está bajo licencia <strong>Copyleft (GPL v2)</strong>.</li>
            <li><strong>Las herramientas del sistema (GNU):</strong> Como el comando `bash` o `ls`, usan mayoritariamente <strong>Copyleft (GPL v3)</strong>.</li>
            <li><strong>Otros componentes:</strong> Utilizan licencias <strong>Permisivas (MIT, Apache)</strong>.</li>
            <li><strong>Software privativo:</strong> Ubuntu incluye ciertos controladores (drivers de red o video) y códecs que son <strong>Propietarios</strong> para garantizar que el hardware moderno funcione correctamente.</li>
          </ul>
          <p style={{ marginTop: '10px' }}>
            En conclusión, Ubuntu es principalmente <strong>Software Libre y de Código Abierto (Open Source)</strong>, gobernado predominantemente por la licencia GPL, pero incluye excepciones propietarias por razones prácticas y de compatibilidad de hardware.
          </p>
        </div>
      </section>

      {/* Sección final: Relación con el proyecto */}
      <section style={{ marginTop: '30px', padding: '20px', backgroundColor: '#eef6ff', borderRadius: '8px', border: '1px solid #b3d7ff' }}>
        <h3>Relación con el proyecto</h3>
        <p>
          En la implementación de este laboratorio, el sistema operativo base  <strong> Ubuntu </strong>  
           utiliza una licencia <strong>Copyleft (GPL)</strong>, garantizando la libertad del software. 
          Por su parte, el servidor web <strong>Nginx</strong> emplea una licencia <strong>BSD (Permisiva)</strong>, 
          lo que permite su despliegue y uso eficiente en nuestra infraestructura[cite: 1]. 
          Finalmente, al realizar las pruebas en un entorno <strong>Windows</strong>, trabajamos bajo un 
          esquema de <strong>Software Propietario</strong>.
        </p>
      </section>

    </div>
  );
};

export default Licencias;