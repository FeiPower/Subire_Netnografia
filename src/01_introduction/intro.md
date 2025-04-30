---
title: Análisis de Percepción Digital y Posicionamiento Competitivo
toc: false
theme: ["glacier", "wide"]
---

# 💡 El Pulso Digital de Subiré y su Entorno Competitivo

<div class="card" style="background: #E5E7EB; padding: 1.5rem; margin-bottom: 2rem;">
  <h2 style="font-size: 2rem; color: #1E3A8A; font-weight: bold;">Panorama General</h2>
  <p style="font-size: 1rem;">
    En el contexto educativo actual, la <b>percepción digital</b> de una institución es mucho más que su presencia en línea: es el reflejo de su reputación, su capacidad de atracción y su posicionamiento frente a la competencia. Este informe integra análisis cuantitativos y cualitativos para mapear la conversación digital, identificar fortalezas y debilidades, y comparar a Subiré con sus principales competidores en la Zona Metropolitana de Guadalajara.
  </p>
</div>

---

## 🎯 Objetivo del Informe

El propósito de este análisis es ofrecer una visión estratégica y profunda sobre la percepción digital de Subiré, así como su posicionamiento frente a instituciones educativas de alto perfil. Se busca generar **insights accionables** que permitan optimizar la reputación institucional, atraer nuevos estudiantes y consolidar la lealtad de la comunidad escolar.

<div class="tip" label="¿Por qué es clave la percepción digital?" style="background: #E5E7EB; padding: 1.5rem; margin-top: 1rem;">
  <p style="font-size: 1rem;">
    Gestionar la percepción digital es una <b>necesidad estratégica</b> para cualquier institución educativa que aspire a destacar y mantenerse relevante. Un análisis riguroso de la percepción digital permite comprender la posición actual, identificar áreas de mejora y diseñar un camino claro hacia una <b>presencia digital más sólida, coherente y competitiva</b>.
  </p>
</div>

---

## 🧩 Metodología Integral

<div class="grid grid-cols-2 gap-4" style="margin-bottom: 2rem;">
  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h3 style="font-size: 1.5rem; color: #059669;">Fases del Análisis</h3>
    <ul style="font-size: 1rem;">
      <li>🔍 <b>Mapeo del ecosistema digital:</b> Identificación de plataformas, foros y espacios clave donde se conversa sobre Subiré y la competencia.</li>
      <li>📊 <b>Recolección de datos:</b> Uso de herramientas avanzadas de <i>social listening</i> y análisis semántico.</li>
      <li>⚖️ <b>Benchmark competitivo:</b> Comparación sistemática con instituciones líderes.</li>
      <li>🕵️‍♂️ <b>Detección de brechas:</b> Análisis de la diferencia entre la identidad proyectada y la percepción real.</li>
    </ul>
  </div>
  <div class="card" style="background: #E5E7EB; padding: 1.5rem;">
    <h3 style="font-size: 1.5rem; color: #059669;">Enfoque Metodológico</h3>
    <ul style="font-size: 1rem;">
      <li>Combinación de técnicas <b>cuantitativas</b> (volumen, alcance, sentimiento, engagement) y <b>cualitativas</b> (narrativas, atributos, valores).</li>
      <li>Apoyo en entrevistas a profundidad y análisis de entorno competitivo.</li>
      <li>Periodo de análisis: <b>14 meses</b> para máxima profundidad y contexto.</li>
    </ul>
  </div>
</div>

---

## 🏆 Criterios de Selección de la Competencia

<div class="card" style="background: #E5E7EB; padding: 1.5rem;">
  <ul style="font-size: 1rem;">
    <li>Metodología <b>DDD (Domain Driven Design)</b> para identificar a los principales competidores.</li>
    <li>Variables consideradas:
      <ul>
        <li>Reconocimiento de marca</li>
        <li>Nivel socioeconómico del público objetivo</li>
        <li>Propuesta de valor académica</li>
        <li>Presencia digital</li>
        <li>Percepción de prestigio</li>
      </ul>
    </li>
    <li>Validación mediante entrevistas con el cliente y análisis de entorno competitivo local.</li>
  </ul>
</div>

---

## 📈 Análisis General

Este informe presenta un análisis exhaustivo de la percepción y conversación digital en torno a Subiré, contrastado con las principales instituciones educativas de la región. El objetivo central es comprender en profundidad el posicionamiento digital de Subiré, identificar sus fortalezas, debilidades y áreas de oportunidad, y generar insights estratégicos basados en datos verificables.

## Visión General del Ecosistema Digital

```js
const colegios = FileAttachment("../data/colegios.geojson").json()
const nse = FileAttachment("../data/ColegioSubireSolares_JAL_NSE.geojson").json()
const isocronas = FileAttachment("../data/ColegioSubire_Isocronas_5-60min.geojson").json()
```

<div class="grid grid-cols-2 gap-4" style="margin-bottom: 2rem;">

  <div class="card" style="background: #f0fdfa;">
    <h2 style="color: #0e7490; font-size: 1.25rem; margin-bottom: 0.75rem;">Fuentes de Datos Analizadas</h2>
    <ul style="margin-bottom: 0;">
      <li><b>Redes sociales:</b> Facebook, Instagram, TikTok, X (Twitter), LinkedIn, YouTube (análisis de lenguaje natural aplicado a Facebook y X)</li>
      <li><b>Espacios especializados:</b> Reddit, reseñas en Google, foros temáticos, grupos privados</li>
      <li><b>Segmento socioeconómico:</b> Foco en audiencias de nivel medio-alto y alto</li>
    </ul>
  </div>

  <div class="card" style="background: #fef9c3;">
    <h2 style="color: #b45309; font-size: 1.25rem; margin-bottom: 0.75rem;">Variables Analizadas</h2>
    <ul style="margin-bottom: 0;">
      <li>Volumen y frecuencia de menciones</li>
      <li>Sentimiento y engagement</li>
      <li>Narrativas predominantes y atributos de marca</li>
      <li>Brechas entre identidad proyectada y percepción real</li>
    </ul>
  </div>

</div>

```js
import createMap from "../components/simplemap.js";
const container = document.createElement("div");
container.style.height = "1000px";
display(container);
createMap(container, [colegios, nse]);
```

Se ofrece a continuación un panorama detallado del ecosistema digital en torno a Subiré y su competencia directa, conformada por las siguientes instituciones:

- **Instituto de Ciencias**: Reconocido por su enfoque académico riguroso.
- **Instituto Thomas Jefferson - Campus Valle Real**: Destacado por su metodología educativa innovadora y sólida presencia digital.
- **The American School Foundation of Guadalajara**: Prestigioso por su enfoque bilingüe e impacto internacional.
- **Prepa Tec - Campus Santa Margarita**: Parte del sistema Tecnológico de Monterrey, con una propuesta educativa integral.
- **Colegio Finlandés - Campus Zapopan**: Enfocado en la educación personalizada y el bienestar estudiantil.
- **Summit School**: Con énfasis en la educación bilingüe y el desarrollo integral de los estudiantes.
- **Colegio Franco Mexicano**: Fomenta una formación bicultural, combinando los valores francés y mexicano.
- **Colegio Signos**: Destacado por su propuesta inclusiva y personalizada.
- **Colegio Once México**: Reconocido por su innovación educativa y uso intensivo de tecnologías avanzadas.
- **Colegio Alemán de Guadalajara**: Ofrece un modelo educativo trilingüe con fuerte arraigo en la cultura alemana.
- **Instituto Tepeyac - Campus Guadalajara**: Comprometido con una formación basada en valores y educación integral.

<div class="card" style="background: linear-gradient(90deg, #e0e7ff 0%, #f0fdfa 100%); margin-bottom: 1rem;">
  <p>
    El siguiente mapa interactivo muestra la distribución geográfica de los colegios analizados y su relación con el nivel socioeconómico de la zona, permitiendo visualizar el contexto competitivo de Subiré en la ZMG.
  </p>
</div>
