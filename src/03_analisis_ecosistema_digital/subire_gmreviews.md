---
title: Análisis General de Opiniones sobre Escuelas Privadas en ZMG
theme: ["glacier", wide]
toc: true
---

# Análisis General de Opiniones sobre Escuelas Privadas en ZMG
## Calificación histórica en Google Maps del ecosistema competitivo de Subiré

```js
const googleReviewsFile = FileAttachment("../data/historic_stars_reviews_gm_yearly_running_mean.csv").csv()
```

```js
import * as Plot from "npm:@observablehq/plot";
```
<div class="card">

```js
const schoolNames = Array.from(new Set(googleReviewsFile.map(d => d.title)));
```

```js
const selectedSchools = view(Inputs.select(schoolNames, {multiple: true, label: "Colegios a mostrar", value: schoolNames}));
```

```js
const filteredData = googleReviewsFile.filter(d => selectedSchools.includes(d.title))
```

```js
Plot.plot({
  marks: [
    Plot.lineY(filteredData, {
      x: "publishedAtDate",
      y: "stars_running_mean",
      stroke: "title",
      tip: true
    }),
    Plot.crosshair(filteredData, {x: "publishedAtDate", y: "stars_running_mean"})
  ],
  y: {
    grid: true,
    domain: [0, 5],
    ticks: [0, 1, 2, 3, 4, 5]
  },
  x: {
    tickFormat: d => {
      const [year] = d.split('-');
      return year;
    }
  },
  color: {
    legend: true,
    label: "Escuela"
  }
})
```

</div>

# Temas Positivos Recurrentes

**Instalaciones de Calidad**

- Los usuarios destacan las instalaciones deportivas y recreativas de varios colegios.
- Instituto Thomas Jefferson, IT Campus Guadalajara, Colegio Alemán y Subiré son elogiados por sus amplios espacios y modernas instalaciones.
- Comentarios de 5 estrellas resaltan que las instalaciones de Subiré son impresionantes, con canchas deportivas bien mantenidas y un teatro grande y cómodo.

**Nivel Académico**

- Se valora el equilibrio entre educación bilingüe/trilingüe, nivel académico exigente y actividades extracurriculares.
- Instituto de Ciencias, IT Campus Guadalajara y Colegio Franco Mexicano reciben menciones positivas en este aspecto.
- Reseñas de 5 estrellas del Instituto de Ciencias destacan su calidad educativa superior y su programa en inglés y francés.
- Colegio Alemán es reconocido por su estricto pero excelente nivel académico.

**Programas Específicos**

- El enfoque finlandés y el método antibullying KIVA en el Colegio Finlandés son altamente valorados.
- Los programas de emprendimiento en Subiré reciben comentarios positivos de los padres.
- Reseñas de 5 estrellas de Subiré mencionan que es un proyecto hecho para emprendedores de verdad, con balance entre valores, religión, deportes y competencia académica.

**Ambiente Escolar Positivo**

- Prepa Tec Santa Anita, Colegio Alemán, Instituto de Ciencias y American School se destacan por su buen ambiente social y académico.
- Reseñas de 5 estrellas de Prepa Tec resaltan su excelente ambiente y sentido de comunidad.
- El Instituto de Ciencias es descrito como un lugar donde los estudiantes encuentran todo lo que buscan en su desarrollo personal y académico.

---

# Temas Negativos Recurrentes

**Bullying y Maltrato**

- El bullying y el maltrato son problemas significativos en varias escuelas evaluadas.
- En el caso de Subiré, se reportan críticas severas por permitir el acoso escolar sin un protocolo claro de atención.
- Directivos, incluyendo al rector Julio Saucedo, han sido señalados por no atender conflictos graves.
- Se destaca la falta de un protocolo documentado y la atención deficiente por parte del personal, desde atención a padres hasta la dirección.
- Se percibe que la escuela prioriza intereses económicos sobre el bienestar estudiantil.

**Problemas Administrativos y Atención al Cliente**

- Instituciones como Subiré, Instituto de Ciencias, Finlandés, Thomas Jefferson y IT Campus Guadalajara reciben quejas por mala comunicación y falta de atención a problemas específicos.
- En Subiré, se critica la indiferencia del personal hacia alumnos y padres, reforzando la percepción de priorizar intereses económicos.

**Problemas de Vialidad y Logística**

- Escuelas grandes como Instituto de Ciencias, Prepa Tec, Thomas Jefferson y American School enfrentan problemas de tráfico y acceso vehicular.
- Estos problemas logísticos generan descontento en padres y vecinos, afectando la experiencia diaria de la comunidad.

**Relación Precio-Calidad**

- Quejas frecuentes sobre colegiaturas altas sin reflejo en calidad educativa o infraestructura.
- Subiré, Franco Mexicano y Finlandés destacan en críticas por este tema.
- En Subiré, se menciona que las aulas están mal equipadas, las pantallas no se ven claramente y no hay aire acondicionado, afectando el ambiente de aprendizaje.

---

# Evaluación Individual de Colegios Principales

**1. Colegio Subiré**

- **Puntos fuertes:** Instalaciones atractivas, programa de emprendimiento.
- **Puntos débiles:** Acoso escolar muy mencionado, deficiencias en protocolo de atención, trato impersonal, instalaciones mal equipadas (falta de aire acondicionado).
- **Conclusión:** No recomendado si se busca atención personalizada y seguridad emocional.

**2. Instituto de Ciencias**

- **Puntos fuertes:** Prestigio, fuerte formación en valores y diversidad educativa.
- **Puntos débiles:** Tráfico caótico, bullying no siempre atendido adecuadamente, infraestructura organizacional deficiente.
- **Conclusión:** Buena educación integral pero con desafíos logísticos importantes.

**3. Colegio Alemán de Guadalajara**

- **Puntos fuertes:** Alto nivel académico, reconocimiento internacional, excelente preparación universitaria.
- **Puntos débiles:** Percepción de elitismo y estricta disciplina que no se adapta a todos los alumnos.
- **Conclusión:** Excelente opción académica, adecuada para quienes toleran alta exigencia.

**4. Prepa TEC**

- **Puntos fuertes:** Muy buen nivel académico, preparación intensa para universidad, buenos profesores.
- **Puntos débiles:** Exceso de carga académica, tráfico complicado, alta presión que afecta bienestar emocional.
- **Conclusión:** Ideal para estudiantes disciplinados que buscan alto rendimiento.

**5. The American School Foundation of Guadalajara**

- **Puntos fuertes:** Instalaciones seguras, buena comunidad estudiantil, fuerte orientación académica.
- **Puntos débiles:** Ubicación conflictiva, percepción de ambiente impersonal en algunos casos.
- **Conclusión:** Recomendable especialmente para quienes buscan educación bilingüe con enfoque internacional.

**6. Summit School**

- **Puntos fuertes:** Ambiente familiar y agradable, atención personalizada, contacto con naturaleza.
- **Puntos débiles:** Denuncias graves sobre maltrato físico y psicológico en niveles preescolares.
- **Conclusión:** Considerar con cautela debido a la seriedad de algunas denuncias recientes.

**7. Instituto Thomas Jefferson**

- **Puntos fuertes:** Buen nivel académico y énfasis en idiomas, buenas instalaciones deportivas.
- **Puntos débiles:** Problemas administrativos, tráfico vehicular complicado, denuncias laborales internas.
- **Conclusión:** Buena opción educativa, pero requiere atención administrativa.

**8. Colegio Finlandés**

- **Puntos fuertes:** Programa innovador, énfasis en prevención de bullying (KIVA), buena comunicación con padres.
- **Puntos débiles:** Problemas serios de discriminación en admisiones, críticas por bajo nivel académico en algunos niveles.
- **Conclusión:** Potencialmente bueno, recomendable para quien valore enfoque antibullying.

**9. Colegio Franco Mexicano**

- **Puntos fuertes:** Instalaciones de calidad, bilingüismo (francés-español).
- **Puntos débiles:** Serios problemas de discriminación racial y clasista, bullying persistente.
- **Conclusión:** Riesgoso desde el punto de vista emocional para ciertos perfiles de alumnos.

**10. IT Campus Guadalajara**

- **Puntos fuertes:** Excelente infraestructura, deportes y énfasis en tecnología, nivel académico sólido.
- **Puntos débiles:** Administración deficiente, escasa atención psicológica efectiva, trato elitista reportado.
- **Conclusión:** Buena opción académica si se solucionan problemas administrativos y actitudinales.

---

# Recomendaciones Finales

**Ambiente Emocional y Prevención del Bullying: Retos y Oportunidades para Subiré**

El análisis de reseñas y percepciones digitales evidencia que el ambiente emocional y la gestión del bullying son factores críticos en la decisión de las familias. Subiré enfrenta el reto de fortalecer su reputación en este aspecto, aprendiendo de buenas prácticas como el programa KIVA del Colegio Finlandés y la cultura de comunidad cercana de Prepa TEC. Se recomienda implementar protocolos claros de prevención, atención y comunicación sobre casos de acoso escolar, así como campañas proactivas que visibilicen los esfuerzos institucionales para garantizar un entorno seguro y saludable.

**Nivel Académico: Posicionamiento y Diferenciación**

La percepción de alto nivel académico es un atributo clave para la competitividad de Subiré frente a instituciones como Colegio Alemán, Prepa TEC y Colegio Franco Mexicano. Es fundamental comunicar de manera estratégica los logros académicos, resultados en exámenes y competencias, así como la preparación de los estudiantes para la universidad y el entorno global. Se sugiere reforzar la narrativa de excelencia educativa y mostrar testimonios de egresados y padres satisfechos.

**Educación Integral: Valor Diferencial de Subiré**

Subiré puede capitalizar su propuesta de formación integral, destacando la combinación de excelencia académica, desarrollo socioemocional, actividades deportivas y culturales. Es importante visibilizar historias de éxito, proyectos colaborativos y experiencias que trascienden lo académico, diferenciándose así de competidores como Instituto de Ciencias y Thomas Jefferson. La gestión eficiente de aspectos administrativos y logísticos también debe ser comunicada como parte de la experiencia positiva Subiré.

**Gestión de Riesgos y Reputación Digital**

Dada la sensibilidad de las denuncias sobre maltrato y bullying en el sector educativo, es prioritario para Subiré implementar una estrategia de gestión de riesgos reputacionales. Esto incluye monitoreo activo de reseñas, respuestas empáticas y transparentes, y acciones correctivas visibles. La comunicación proactiva sobre mejoras y resultados en bienestar estudiantil contribuirá a recuperar y fortalecer la confianza de la comunidad escolar y de las familias potenciales.