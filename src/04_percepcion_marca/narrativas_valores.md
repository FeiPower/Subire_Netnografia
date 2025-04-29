---
title: Análisis de Narrativas y Valores en Facebook (ObservableHQ)
---

<h1 style="font-size:2.5rem; color:#1E3A8A; margin-top:2rem; margin-bottom:1.5rem;">Resumen General del Reporte</h1>

<div class="grid grid-cols-2" style="gap:2rem; margin-bottom:2rem;">
  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h3 style="font-size:1.5rem; color:#1E3A8A; margin-bottom:0.5rem;">Fecha y Hora de Generación</h3>
    <p style="font-size:1rem;">2025-04-02 17:42:56</p>
    <h3 style="font-size:1.5rem; color:#1E3A8A; margin-bottom:0.5rem;">Total de Colegios Analizados</h3>
    <p style="font-size:1rem;">10</p>
    <h3 style="font-size:1.5rem; color:#1E3A8A; margin-bottom:0.5rem;">Total de Publicaciones Analizadas</h3>
    <p style="font-size:1rem;">2711</p>
    <h3 style="font-size:1.5rem; color:#1E3A8A; margin-bottom:0.5rem;">Rango de Fechas del Análisis</h3>
    <p style="font-size:1rem;">01 de Enero de 2024 al 27 de Febrero de 2025</p>
  </div>
</div>

<h1 style="font-size:2.5rem; color:#1E3A8A; margin-top:2rem; margin-bottom:1.5rem;">Métricas de Engagement por Colegio</h1>

<div style="overflow-x:auto; margin-bottom:2rem;">
  <table style="width:100%; font-size:1rem; border-collapse:collapse;">
    <thead style="background:#1E3A8A; color:white;">
      <tr>
        <th style="padding:0.5rem; color:white;">Nombre del Colegio</th>
        <th style="padding:0.5rem; color:white;">Engagement Promedio</th>
        <th style="padding:0.5rem; color:white;">Publicaciones Totales</th>
        <th style="padding:0.5rem; color:white;">Tasa de Engagement</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#E5E7EB;">
        <td style="font-size:1rem;">Colegio Alemán Guadalajara</td>
        <td style="font-size:1rem;">48.40</td>
        <td style="font-size:1rem;">161</td>
        <td style="font-size:1rem;">30.06%</td>
      </tr>
      <tr>
        <td style="font-size:1rem;">Guerreros Jaguar Colegio SuBire Guadalajara</td>
        <td style="font-size:1rem;">48.06</td>
        <td style="font-size:1rem;">372</td>
        <td style="font-size:1rem;">12.92%</td>
      </tr>
      <tr style="background:#E5E7EB;">
        <td style="font-size:1rem;">Subire Business School</td>
        <td style="font-size:1rem;">29.10</td>
        <td style="font-size:1rem;">145</td>
        <td style="font-size:1rem;">20.07%</td>
      </tr>
      <tr>
        <td style="font-size:1rem;">Instituto de Ciencias</td>
        <td style="font-size:1rem;">27.39</td>
        <td style="font-size:1rem;">730</td>
        <td style="font-size:1rem;">3.75%</td>
      </tr>
      <tr style="background:#E5E7EB;">
        <td style="font-size:1rem;">Colegio Finlandés</td>
        <td style="font-size:1rem;">25.37</td>
        <td style="font-size:1rem;">369</td>
        <td style="font-size:1rem;">6.87%</td>
      </tr>
      <tr>
        <td style="font-size:1rem;">Colegio Once México</td>
        <td style="font-size:1rem;">19.38</td>
        <td style="font-size:1rem;">125</td>
        <td style="font-size:1rem;">15.50%</td>
      </tr>
      <tr style="background:#E5E7EB;">
        <td style="font-size:1rem;">Colegio Tepeyac Guadalajara</td>
        <td style="font-size:1rem;">16.59</td>
        <td style="font-size:1rem;">282</td>
        <td style="font-size:1rem;">5.88%</td>
      </tr>
      <tr>
        <td style="font-size:1rem;">Summit School MX</td>
        <td style="font-size:1rem;">10.45</td>
        <td style="font-size:1rem;">134</td>
        <td style="font-size:1rem;">7.80%</td>
      </tr>
      <tr style="background:#E5E7EB;">
        <td style="font-size:1rem;">Prepa Tec GDL</td>
        <td style="font-size:1rem;">8.76</td>
        <td style="font-size:1rem;">147</td>
        <td style="font-size:1rem;">5.96%</td>
      </tr>
      <tr>
        <td style="font-size:1rem;">ITJ Gdl Valle Real</td>
        <td style="font-size:1rem;">7.20</td>
        <td style="font-size:1rem;">246</td>
        <td style="font-size:1rem;">2.93%</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size:1rem; margin-top:0.5rem;"><i>Nota: La Tasa de Engagement se calcula como (Engagement Promedio / Publicaciones Totales) x 100.</i></p>
</div>

<h1 style="font-size:2.5rem; color:#1E3A8A; margin-top:2rem; margin-bottom:1.5rem;">Análisis Temporal</h1>

<div class="grid grid-cols-2" style="gap:2rem; margin-bottom:2rem;">
  <div class="card" style="max-width: 640px; background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Publicaciones por Mes</h2>
    <h3 style="font-size:1.5rem; color:#374151; margin-bottom:0.5rem;">Cantidad de publicaciones mensuales</h3>
    ${Plot.barY(
      [
        {mes: "Enero", publicaciones: 331},
        {mes: "Febrero", publicaciones: 419},
        {mes: "Marzo", publicaciones: 222},
        {mes: "Abril", publicaciones: 194},
        {mes: "Mayo", publicaciones: 277},
        {mes: "Junio", publicaciones: 221},
        {mes: "Julio", publicaciones: 144},
        {mes: "Agosto", publicaciones: 131},
        {mes: "Septiembre", publicaciones: 170},
        {mes: "Octubre", publicaciones: 216},
        {mes: "Noviembre", publicaciones: 240},
        {mes: "Diciembre", publicaciones: 146}
      ],
      {
        x: d => d.mes,
        y: d => d.publicaciones,
        fill: "#1E3A8A",
        tip: true,
        order: d => [
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ].indexOf(d.mes)
      }
    ).plot({
      marginLeft: 60,
      marginBottom: 40,
      height: 280,
      width: 600,
      x: {label: "Mes", tickRotate: -45, domain: [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ]}
    })}
  </div>

  <div class="card" style="max-width: 640px; background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Engagement Promedio por Mes</h2>
    <h3 style="font-size:1.5rem; color:#374151; margin-bottom:0.5rem;">Promedio mensual de engagement</h3>
    ${Plot.lineY(
      [
        {mes: "Enero", engagement: 22.30},
        {mes: "Febrero", engagement: 22.70},
        {mes: "Marzo", engagement: 29.38},
        {mes: "Abril", engagement: 29.28},
        {mes: "Mayo", engagement: 31.22},
        {mes: "Junio", engagement: 27.77},
        {mes: "Julio", engagement: 34.84},
        {mes: "Agosto", engagement: 29.72},
        {mes: "Septiembre", engagement: 27.34},
        {mes: "Octubre", engagement: 18.08},
        {mes: "Noviembre", engagement: 27.20},
        {mes: "Diciembre", engagement: 20.08}
      ],
      {
        x: d => d.mes,
        y: d => d.engagement,
        stroke: "#1E3A8A",
        marker: "circle",
        tip: true,
        order: d => [
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ].indexOf(d.mes)
      }
    ).plot({
      marginLeft: 60,
      marginBottom: 40,
      height: 280,
      width: 600,
      x: {label: "Mes", tickRotate: -45, domain: [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ]}
    })}
  </div>
</div>

<h1 style="font-size:2.5rem; color:#1E3A8A; margin-top:2rem; margin-bottom:1.5rem;">Tópicos Principales por Colegio</h1>

<div class="grid grid-cols-2" style="gap:2rem; margin-bottom:2rem;">

  <!-- Ordenado por engagement promedio mensual (ver gráfico superior) y profundizando en las temáticas principales de comunicación de cada colegio según el análisis de tópicos de Facebook -->

  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Colegio Once México</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 1: Formación a través del deporte y construcción de historias de éxito</h3>
    <p style="font-size:1rem;">
      La narrativa principal se centra en la <b>formación a través del deporte</b> y la <b>construcción de historias de éxito</b>, destacando valores como el <b>amor</b>, la <b>pasión</b> y el <b>sentido de comunidad</b>. Palabras clave como <i>formaciónatrávesdeldeportir</i>, <i>construyendohistoriasdeéxito</i>, <i>amor</i>, <i>pasión</i>, <i>comunidad</i> y <i>celebramos</i> reflejan una comunicación orientada a la identidad institucional, la pertenencia y el agradecimiento. Se enfatiza la <b>participación activa</b> y el <b>reconocimiento de logros colectivos</b>, así como la celebración de los éxitos de la comunidad escolar.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 6: Relaciones interpersonales y reconocimiento a docentes</h3>
    <p style="font-size:1rem;">
      Este tópico resalta las <b>relaciones interpersonales</b> y el <b>reconocimiento a los docentes</b> (por ejemplo, <i>maestrar</i>), así como el <b>inicio de ciclos escolares</b>, la <b>ciencia</b> y la <b>vida escolar cotidiana</b>. Se observa un enfoque en la <b>calidad humana</b>, el <b>acompañamiento educativo</b> y la <b>cercanía entre estudiantes y maestros</b>. Palabras como <i>ciclo</i>, <i>vida</i>, <i>ciencia</i> y <i>maestrar</i> sugieren una comunicación que valora tanto el desarrollo académico como el personal.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Otros tópicos relevantes</h3>
    <ul style="font-size:1rem;">
      <li><b>Tópico 2:</b> Identidad escolar, equipo, amistad y apoyo mutuo, reforzando la idea de comunidad y pertenencia.</li>
      <li><b>Tópico 3:</b> Felicidad y orgullo académico en eventos como graduaciones, logros personales y actos académicos.</li>
      <li><b>Tópico 4:</b> Participación en torneos, desarrollo personal, trabajo en equipo, salud física y deporte.</li>
    </ul>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Resumen de valores comunicados</h3>
    <p style="font-size:1rem;">
      El Colegio Once México comunica de manera consistente valores de <b>formación integral</b>, <b>comunidad</b>, <b>reconocimiento</b>, <b>pasión</b> y <b>celebración de logros</b>. La narrativa institucional refuerza la pertenencia, el agradecimiento y la importancia de la vida escolar como espacio de crecimiento personal y colectivo.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> formaciónatrávesdeldeportir, construyendohistoriasdeéxito, amor, pasión, comunidad, celebramos, equipo, amistad, felicidad, graduado, torneo, saludfisico, maestrar, ciclo, vida, ciencia.
    </div>
  </div>

  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Prepa Tec GDL</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 1: Trabajo en equipo, espíritu competitivo y logros</h3>
    <p style="font-size:1rem;">
      La narrativa principal gira en torno al <b>trabajo en equipo</b>, el <b>espíritu competitivo</b> y la <b>emoción por los logros</b>, con fuerte presencia de palabras como <i>First</i>, <i>competencia</i>, <i>entusiasmo</i> y <i>equipo</i>. Se destaca la <b>participación activa en eventos</b> y competencias, reforzando el sentido de pertenencia y la motivación por alcanzar el éxito. La comunicación institucional enfatiza la <b>colaboración</b>, la <b>innovación</b> y el <b>orgullo por los logros colectivos</b>, promoviendo una cultura de <b>superación</b> y <b>desarrollo de habilidades</b>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 5: Reconocimiento, memoria institucional y equidad de género</h3>
    <p style="font-size:1rem;">
      Este tópico aborda temas de <b>reconocimiento</b>, <b>memoria institucional</b> y <b>equidad de género</b>, con palabras clave como <i>mujer</i>, <i>alumna</i>, <i>trayectoria</i> y <i>logro</i>. Se pone en valor la <b>participación individual</b> y el <b>recorrido personal</b> dentro de la comunidad, destacando historias de éxito y la importancia de la <b>diversidad</b> y la <b>inclusión</b> en la vida escolar. La comunicación refuerza el reconocimiento de los logros únicos y la construcción de una identidad institucional basada en el respeto y la igualdad.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Otros tópicos relevantes</h3>
    <ul style="font-size:1rem;">
      <li><b>Tópico 2:</b> Innovación educativa, proyectos académicos y desarrollo de habilidades científicas y tecnológicas.</li>
      <li><b>Tópico 3:</b> Vida estudiantil, amistad, convivencia y experiencia escolar como formación integral.</li>
      <li><b>Tópico 4:</b> Participación en actividades extracurriculares, liderazgo y responsabilidad social.</li>
    </ul>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Resumen de valores comunicados</h3>
    <p style="font-size:1rem;">
      La Prepa Tec GDL comunica de manera consistente valores de <b>colaboración</b>, <b>espíritu competitivo</b>, <b>innovación</b>, <b>reconocimiento</b>, <b>equidad de género</b> y <b>desarrollo integral</b>. La narrativa institucional refuerza la pertenencia, el orgullo por los logros colectivos e individuales, y la importancia de la formación académica y personal en un ambiente inclusivo y motivador.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> First, competencia, entusiasmo, equipo, mujer, alumna, trayectoria, logro, innovación, proyecto, amistad, convivencia, liderazgo, responsabilidad social.
    </div>
  </div>

  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Colegio Franco Mexicano</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 6: Gratitud, experiencias significativas y vida escolar</h3>
    <p style="font-size:1rem;">
      La comunicación institucional destaca fuertemente la <b>gratitud</b>, el <b>recuerdo de experiencias significativas</b>, el <b>amor</b> y la <b>vida escolar</b>. Se observa una presencia constante de la <b>identidad marista</b> y la <b>participación en eventos</b>, reforzando el sentido de <b>comunidad</b> y <b>pertenencia</b>. Palabras como <i>gracias</i>, <i>comunidad</i>, <i>servicio</i> y <i>alegría</i> son recurrentes, reflejando una narrativa de <b>agradecimiento</b> y <b>celebración de la vida escolar</b>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 7: Vocación, logros femeninos y empoderamiento</h3>
    <p style="font-size:1rem;">
      Se abordan temas de <b>vocación</b>, <b>logros femeninos</b>, <b>celebración de éxitos</b>, <b>proyectos escolares</b> y <b>actividades deportivas</b> como el voleibol. Hay un enfoque en el <b>desarrollo personal y académico</b> de las alumnas, así como en la <b>diversidad</b> y el <b>reconocimiento de trayectorias individuales</b>. Palabras clave como <i>hija</i>, <i>mujer</i>, <i>alegría</i>, <i>servicio</i> y <i>comunidad</i> refuerzan la importancia de la <b>inclusión</b> y el <b>empoderamiento femenino</b> dentro de la institución.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Otros tópicos relevantes</h3>
    <ul style="font-size:1rem;">
      <li><b>Tópico 1:</b> Importancia de la palabra, celebración e identidad cristiana, fiesta, obra y valores.</li>
      <li><b>Tópico 2:</b> Familia, hermandad y vivencias compartidas, promoviendo unidad y apoyo mutuo.</li>
      <li><b>Tópico 3:</b> Felicidad, bendición y celebración de cumpleaños y eventos especiales.</li>
      <li><b>Tópico 4:</b> Oración, espiritualidad, virtud, fe y esperanza en la formación integral.</li>
      <li><b>Tópico 5:</b> Servicio, justicia, perdón, compromiso social y solidaridad.</li>
    </ul>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Resumen de valores comunicados</h3>
    <p style="font-size:1rem;">
      El Colegio Franco Mexicano comunica de manera consistente valores de <b>comunidad</b>, <b>gratitud</b>, <b>servicio</b>, <b>alegría</b>, <b>identidad marista</b>, <b>inclusión</b> y <b>empoderamiento femenino</b>. La narrativa institucional refuerza la pertenencia, el reconocimiento de logros individuales y colectivos, la importancia de la vida escolar como espacio de crecimiento personal y espiritual, y el compromiso con la formación integral basada en la fe, la solidaridad y la celebración de la diversidad.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> gracias, comunidad, servicio, alegría, mujer, hija, celebración, vocación, bendición, oración, familia, hermandad, cumpleaños, fe, justicia, perdón, solidaridad, identidad marista, voleibol, proyecto, logro.
    </div>
  </div>

  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Colegio Finlandés</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 1: Roles escolares y convivencia</h3>
    <p style="font-size:1rem;">
      Se destacan roles escolares como <b>coordinador</b> y <b>auxiliar</b>, así como la <b>convivencia</b>, <b>talleres</b> y la atención a temas de <b>acoso escolar</b>. La narrativa institucional resalta la <b>historia</b> del colegio, la <b>asistencia</b> a eventos y la importancia de la <b>participación activa</b> en la vida escolar.
      <br>
      <b>Palabras clave asociadas:</b> coordinador, secundario, auxiliar, escolar, sueño, convivencia, taller, historia, acoso, asistir.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 2: Crecimiento personal y comunicación con familias</h3>
    <p style="font-size:1rem;">
      Se abordan temas de <b>crecimiento personal</b>, <b>pláticas informativas</b>, <b>sesiones</b> y la participación de <b>ponentes</b>. Se promueve la <b>comunicación con las familias</b>, el <b>valor de la experiencia escolar</b> y el <b>desarrollo integral</b> de los estudiantes.
      <br>
      <b>Palabras clave asociadas:</b> crecimiento, plática, hijo, informativo, sesión, ponente, campus, colegiofinlandés, dejar, valioso.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 3: Atención personalizada y pertenencia</h3>
    <p style="font-size:1rem;">
      Se enfatiza la <b>atención personalizada</b>, el <b>sentido de pertenencia</b> y la <b>importancia de la experiencia escolar</b> para los estudiantes más pequeños. Se destacan valores como la <b>empatía</b>, el <b>juego</b> y el <b>apoyo emocional</b>.
      <br>
      <b>Palabras clave asociadas:</b> pequeño, sabiar, atención, sentir, tiempo, forma, experimentar, momento, jugar, lleno.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 4: Aprendizaje, creatividad y educación positiva</h3>
    <p style="font-size:1rem;">
      La comunicación institucional promueve el <b>aprendizaje</b>, la <b>creatividad</b>, la <b>enseñanza</b> y la <b>educación positiva</b>. Se refuerza la <b>identidad institucional</b> y la <b>vivencia de valores</b> en el ambiente escolar.
      <br>
      <b>Palabras clave asociadas:</b> aprender, crear, enseñar, colegiofinland, educaciónpositivo, ambienteescolar, soycolegiofinland, tipseducativo, campus, finlandés.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 5: Comunidad, gratitud y justicia</h3>
    <p style="font-size:1rem;">
      Se resalta la <b>importancia de la comunidad</b>, la <b>gratitud</b>, el <b>servicio</b> y la <b>alegría</b> en la vida escolar, así como el <b>compromiso social</b> y la <b>justicia</b>.
      <br>
      <b>Palabras clave asociadas:</b> hijo, gracias, comunidad, servicio, padre, alegría, acontecimiento, hombre, perdón, justicia.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Otros tópicos relevantes</h3>
    <ul style="font-size:1rem;">
      <li><b>Tópico 6:</b> Felicidad, cumpleaños, bendición y actos escolares, reforzando alegría colectiva y bienestar emocional.</li>
      <li><b>Tópico 7:</b> Vocación, celebración de logros, participación en eventos especiales, diversidad y reconocimiento de trayectorias individuales.</li>
      <li><b>Tópico 8:</b> Oración, espiritualidad, virtud y esperanza como parte de la formación integral.</li>
      <li><b>Tópico 9:</b> Familia, hermandad, vivencias compartidas y apoyo mutuo.</li>
      <li><b>Tópico 10:</b> Importancia de la palabra, celebración e identidad cristiana en la vida escolar.</li>
    </ul>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Resumen de valores comunicados</h3>
    <p style="font-size:1rem;">
      El Colegio Finlandés comunica de manera consistente valores de <b>convivencia</b>, <b>crecimiento personal</b>, <b>servicio</b>, <b>alegría</b>, <b>identidad institucional</b>, <b>educación positiva</b>, <b>justicia</b> y <b>formación integral</b>. La narrativa institucional refuerza la pertenencia, el reconocimiento de logros individuales y colectivos, la importancia de la vida escolar como espacio de desarrollo personal y social, y el compromiso con la formación basada en valores, la empatía y la participación activa.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> coordinador, convivencia, taller, historia, acoso, asistir, crecimiento, plática, hijo, comunidad, servicio, alegría, aprender, crear, enseñar, educación, ambiente escolar, gratitud, justicia, perdón, familia, hermandad, cumpleaños, oración, espiritualidad, palabra, celebración, identidad, valores.
    </div>
  </div>

  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Subiré Business School</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 1: Emprendimiento, identidad y pertenencia</h3>
    <p style="font-size:1rem;">
      El discurso institucional se enfoca en el <b>emprendimiento</b>, la <b>identidad escolar</b> (con términos como <i>colegiosubiré</i> y <i>wearesubiré</i>), los <b>ciclos académicos</b> y las <b>premiaciones</b>. Se refuerza el sentido de <b>pertenencia</b> y la <b>historia institucional</b>, promoviendo el orgullo de formar parte de la comunidad Subiré.
      <br>
      <b>Palabras clave asociadas:</b> emprendimiento, identidad, pertenencia, historia, premiación, ciclo académico.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 4: Aprendizaje, cultura y valores</h3>
    <p style="font-size:1rem;">
      Se abordan temas de <b>aprendizaje</b>, <b>cultura</b>, <b>valores</b>, <b>actividades extracurriculares</b> y <b>eventos culturales</b>. La narrativa institucional promueve la <b>vivencia de valores</b> y la <b>participación activa</b> en actividades diversas, resaltando la formación integral de los estudiantes.
      <br>
      <b>Palabras clave asociadas:</b> aprendizaje, cultura, valores, actividades, eventos, participación.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Principales palabras y conceptos en la comunicación</h3>
    <p style="font-size:1rem;">
      El análisis temático revela la presencia recurrente de términos como <i>emprendimiento</i>, <i>identidad</i>, <i>premiación</i>, <i>ciclo</i>, <i>historia</i>, <i>valores</i>, <i>cultura</i>, <i>participación</i> y <i>orgullo</i>. Estos conceptos refuerzan la narrativa de una institución orientada al desarrollo personal, la excelencia y la pertenencia.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Resumen de valores comunicados</h3>
    <p style="font-size:1rem;">
      Subiré Business School comunica de manera consistente valores de <b>emprendimiento</b>, <b>identidad institucional</b>, <b>pertenencia</b>, <b>excelencia</b>, <b>participación</b> y <b>formación integral</b>. La narrativa institucional destaca el orgullo de ser parte de la comunidad Subiré, la importancia de los logros individuales y colectivos, y el compromiso con el desarrollo académico, cultural y personal de sus estudiantes.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> emprendimiento, identidad, pertenencia, premiación, ciclo, historia, valores, cultura, participación, orgullo, excelencia, formación integral.
    </div>
  </div>

  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">ITJ Gdl Valle Real</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 1: Familia, admisión y confianza</h3>
    <p style="font-size:1rem;">
      La comunicación institucional destaca fuertemente la <b>familia</b>, los <b>programas de admisión</b>, la <b>confianza</b>, las <b>instalaciones</b> y el <b>crecimiento</b> de los estudiantes. Se enfatiza el <b>acompañamiento</b> a las familias y la importancia de un entorno seguro y de calidad para el desarrollo integral. Palabras clave recurrentes: <i>familia, admisión, confianza, instalaciones, crecimiento, acompañamiento</i>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 2: Exploración académica y proyección internacional</h3>
    <p style="font-size:1rem;">
      Se abordan temas de <b>exploración académica</b>, <b>conferencias</b>, <b>oportunidades universitarias</b> y <b>logros académicos</b>. La narrativa fomenta la <b>proyección internacional</b> y el <b>desarrollo académico</b> de los estudiantes, resaltando la importancia de la formación continua y la excelencia educativa. Palabras clave asociadas: <i>exploración, académico, conferencias, universidad, logros, internacional</i>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 3: Proyectos, innovación y tecnología</h3>
    <p style="font-size:1rem;">
      El análisis temático revela la presencia de conceptos como <b>proyectos</b>, <b>innovación</b>, <b>tecnología</b> y <b>creatividad</b>. Se promueve la participación en actividades que impulsan el pensamiento crítico y la solución de problemas, así como el uso de herramientas tecnológicas para el aprendizaje. Palabras clave: <i>proyectos, innovación, tecnología, creatividad, solución de problemas</i>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 4: Trabajo en equipo y orgullo institucional</h3>
    <p style="font-size:1rem;">
      Se identifican valores como <b>trabajo en equipo</b>, <b>esfuerzo</b>, <b>dedicación</b> y <b>orgullo institucional</b>. La comunicación resalta la importancia de la colaboración, el reconocimiento de logros y la construcción de una comunidad escolar sólida. Palabras clave: <i>equipo, esfuerzo, dedicación, orgullo, comunidad</i>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 5: Bienestar emocional y celebraciones</h3>
    <p style="font-size:1rem;">
      La narrativa institucional también incluye temas de <b>bienestar emocional</b>, <b>celebraciones</b> y <b>agradecimiento</b>, promoviendo un ambiente positivo y de gratitud dentro de la comunidad escolar. Palabras clave: <i>bienestar, celebración, agradecimiento, alegría, familia</i>.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> familia, admisión, confianza, instalaciones, crecimiento, acompañamiento, exploración, académico, conferencias, universidad, logros, internacional, proyectos, innovación, tecnología, creatividad, equipo, esfuerzo, dedicación, orgullo, comunidad, bienestar, celebración, agradecimiento, alegría.
    </div>
  </div>

  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Instituto de Ciencias</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 1: Servicio, identidad jesuita y misión</h3>
    <p style="font-size:1rem;">
      La comunicación institucional destaca valores como el <b>servicio</b>, la <b>identidad jesuita</b>, la <b>misión</b> y la <b>pertenencia</b>. Se observa una fuerte emoción por participar en eventos interjesuíticos, así como un énfasis en la <b>preparación académica</b> y el <b>compromiso social</b>. Palabras clave recurrentes: <i>servicio, identidad, misión, pertenencia, preparación, compromiso</i>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 2: Trabajo en equipo, esfuerzo y logros</h3>
    <p style="font-size:1rem;">
      Se abordan temas de <b>trabajo en equipo</b>, <b>esfuerzo</b>, <b>logros</b>, <b>felicitaciones</b> y <b>orgullo institucional</b>. La narrativa reconoce y celebra el esfuerzo y la dedicación de los estudiantes, así como la importancia de la colaboración y el sentido de comunidad. Palabras clave asociadas: <i>equipo, esfuerzo, logros, felicitaciones, orgullo, comunidad</i>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Principales palabras y conceptos en la comunicación</h3>
    <p style="font-size:1rem;">
      El análisis temático revela la presencia recurrente de términos como <i>servicio</i>, <i>familia</i>, <i>comunidad</i>, <i>valores</i>, <i>identidad</i>, <i>misión</i>, <i>orgullo</i>, <i>logros</i>, <i>equipo</i> y <i>felicitaciones</i>. Estos conceptos refuerzan la narrativa de una institución orientada a la formación integral, el compromiso social y la excelencia académica.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Resumen de valores comunicados</h3>
    <p style="font-size:1rem;">
      El Instituto de Ciencias comunica de manera consistente valores de <b>servicio</b>, <b>identidad jesuita</b>, <b>misión</b>, <b>pertenencia</b>, <b>trabajo en equipo</b>, <b>esfuerzo</b> y <b>orgullo institucional</b>. La narrativa institucional destaca la importancia de la comunidad, el reconocimiento de logros y la formación de estudiantes comprometidos con su entorno.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> servicio, identidad, misión, pertenencia, preparación, compromiso, equipo, esfuerzo, logros, felicitaciones, orgullo, comunidad, valores, familia.
    </div>
  </div>

  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Summit School MX</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 1: Desarrollo integral, deporte y trabajo en equipo</h3>
    <p style="font-size:1rem;">
      La comunicación institucional enfatiza el desarrollo integral de los estudiantes, promoviendo valores como el <b>amor</b>, la <b>salud física</b>, el <b>deporte</b> y el <b>trabajo en equipo</b>. Se observa una constante invitación a la participación en actividades deportivas y jornadas que refuerzan la convivencia y la colaboración entre estudiantes. El deporte es presentado no solo como una actividad física, sino como un espacio para fortalecer la disciplina, la perseverancia y el sentido de pertenencia.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 2: Curiosidad, felicidad y aprendizaje activo</h3>
    <p style="font-size:1rem;">
      Se identifican conceptos relacionados con la <b>curiosidad</b>, la <b>felicidad</b> y el <b>aprendizaje activo</b>. La narrativa institucional fomenta la exploración a través de actividades extracurriculares, talleres y experiencias compartidas, promoviendo el bienestar emocional y el desarrollo de habilidades socioemocionales. Se destaca la importancia de crear un ambiente escolar donde los estudiantes puedan experimentar, descubrir y disfrutar el proceso de aprendizaje.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 3: Creatividad, innovación y proyectos escolares</h3>
    <p style="font-size:1rem;">
      El análisis temático revela la presencia de valores como la <b>creatividad</b>, la <b>innovación</b> y la <b>participación en proyectos escolares</b>. Se impulsa el pensamiento crítico y la resolución de problemas mediante actividades que integran la tecnología y el trabajo colaborativo, preparando a los estudiantes para enfrentar retos de manera creativa y proactiva.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 4: Comunidad, pertenencia y celebración</h3>
    <p style="font-size:1rem;">
      Se resalta la importancia de la <b>comunidad escolar</b>, el <b>sentido de pertenencia</b> y el <b>reconocimiento de logros individuales y colectivos</b>. La comunicación institucional promueve la celebración de éxitos, el agradecimiento y la construcción de un ambiente positivo, donde la alegría y la gratitud son valores recurrentes.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> desarrollo integral, amor, salud, deporte, trabajo en equipo, curiosidad, felicidad, aprendizaje, actividades extracurriculares, bienestar emocional, creatividad, innovación, comunidad, pertenencia, celebración, agradecimiento, alegría.
    </div>
  </div>

  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Colegio Alemán Guadalajara</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 1: Identidad alemana, ciencia y proyectos</h3>
    <p style="font-size:1rem;">
      La comunicación institucional resalta fuertemente la <b>identidad alemana</b> y el sentido de pertenencia a una comunidad educativa internacional. Se observa un énfasis en la <b>participación en competencias académicas y científicas</b>, así como en <b>proyectos escolares</b> que promueven la <b>curiosidad</b>, el <b>disfrute del aprendizaje</b> y el <b>fomento de la ciencia</b>. Palabras clave recurrentes: <i>identidad, ciencia, proyecto, aprendizaje, emoción, curiosidad</i>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 2: Colaboración, logros y reconocimiento</h3>
    <p style="font-size:1rem;">
      Se abordan temas de <b>colaboración</b>, <b>compartir logros</b> y <b>reconocimiento</b> tanto en el ámbito académico como deportivo. La comunicación institucional promueve la <b>participación en distintas categorías</b>, el <b>agradecimiento</b> y el <b>trabajo en equipo</b>, reforzando la importancia de la <b>comunidad escolar</b> y el <b>apoyo mutuo</b>. Palabras clave asociadas: <i>compartir, logros, colaboración, agradecimiento, equipo, reconocimiento</i>.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 3: Innovación, creatividad y experimentación</h3>
    <p style="font-size:1rem;">
      El análisis temático revela la presencia de valores como la <b>innovación</b>, la <b>creatividad</b> y la <b>experimentación</b> en el proceso educativo. Se impulsa el <b>pensamiento crítico</b> y la <b>resolución de problemas</b> a través de actividades que integran la ciencia y la tecnología, preparando a los estudiantes para enfrentar retos de manera creativa y proactiva.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 4: Familia, comunidad y convivencia</h3>
    <p style="font-size:1rem;">
      Se destaca la <b>importancia de la familia</b> y el <b>sentido de comunidad</b> en la vida escolar. La narrativa institucional promueve la <b>convivencia</b>, el <b>respeto</b> y la <b>alegría</b> en el entorno educativo, así como la celebración de logros individuales y colectivos.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Principales palabras y conceptos en la comunicación</h3>
    <p style="font-size:1rem;">
      El análisis de los temas recurrentes muestra la presencia constante de términos como <i>identidad</i>, <i>ciencia</i>, <i>proyecto</i>, <i>aprendizaje</i>, <i>emoción</i>, <i>curiosidad</i>, <i>colaboración</i>, <i>logros</i>, <i>agradecimiento</i>, <i>equipo</i>, <i>innovación</i>, <i>familia</i> y <i>comunidad</i>. Estos conceptos refuerzan la narrativa de una institución orientada al desarrollo integral, la excelencia académica y la formación de estudiantes creativos y comprometidos.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Resumen de valores comunicados</h3>
    <p style="font-size:1rem;">
      El Colegio Alemán Guadalajara comunica de manera consistente valores de <b>identidad</b>, <b>curiosidad</b>, <b>innovación</b>, <b>colaboración</b>, <b>reconocimiento</b>, <b>familia</b> y <b>comunidad</b>. La narrativa institucional destaca la importancia del aprendizaje activo, la participación en proyectos y competencias, y la formación de estudiantes con pensamiento crítico y sentido de pertenencia.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> identidad, ciencia, proyecto, aprendizaje, emoción, curiosidad, colaboración, logros, agradecimiento, equipo, innovación, familia, comunidad, creatividad, experimentación, respeto, convivencia, celebración.
    </div>
  </div>
  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h2 style="font-size:2rem; color:#1E3A8A; margin-bottom:0.75rem;">Colegio Tepeyac Guadalajara</h2>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 1: Familia, tradiciones y comunidad</h3>
    <p style="font-size:1rem;">
      La comunicación institucional se centra en la <b>familia</b> como núcleo fundamental, resaltando la importancia de las <b>tradiciones</b>, la <b>espiritualidad</b> y el <b>sentido de comunidad</b>. Se valora el inicio de nuevos ciclos, la celebración de momentos significativos y la transmisión de valores culturales y religiosos. La identidad institucional se refuerza a través de la pertenencia a una comunidad educativa que promueve el respeto, la gratitud y la convivencia armónica.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 2: Vida espiritual, amor y fe</h3>
    <p style="font-size:1rem;">
      Se destacan temas relacionados con la <b>vida espiritual</b>, el <b>amor</b>, la <b>fe</b> y el <b>acompañamiento</b> en el crecimiento personal. La comunicación institucional promueve la formación integral de los estudiantes, enfatizando el desarrollo de virtudes como la solidaridad, la empatía y el servicio a los demás. El tiempo litúrgico y las celebraciones religiosas ocupan un lugar relevante, fomentando la reflexión, la oración y el fortalecimiento de los lazos espirituales dentro de la comunidad escolar.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 3: Gratitud, alegría y logros</h3>
    <p style="font-size:1rem;">
      El análisis temático revela la presencia de valores como la <b>gratitud</b>, la <b>alegría</b> y el <b>reconocimiento de logros individuales y colectivos</b>. Se impulsa la participación en actividades que refuerzan el sentido de pertenencia, la colaboración y el apoyo mutuo, promoviendo un ambiente positivo y de crecimiento personal.
    </p>
    <h3 style="font-size:1.5rem; color:#059669; margin-bottom:0.5rem;">Tópico 4: Educación en valores y acompañamiento familiar</h3>
    <p style="font-size:1rem;">
      Se observa una narrativa que integra la importancia de la <b>educación en valores</b>, el <b>acompañamiento familiar</b> y la <b>vivencia de la fe</b> en la vida cotidiana. La comunicación institucional refuerza la idea de que la formación académica va de la mano con el desarrollo espiritual y humano, preparando a los estudiantes para enfrentar los retos de la vida con responsabilidad y compromiso.
    </p>
    <div style="font-size:1rem; color:#6B7280; margin-top:1rem;">
      <b>Palabras clave más frecuentes:</b> familia, tradiciones, espiritualidad, fe, amor, comunidad, pertenencia, gratitud, alegría, valores, acompañamiento, servicio, celebración, respeto, convivencia, formación integral, identidad, reflexión.
    </div>
  </div>
</div>