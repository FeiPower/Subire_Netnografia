---
title: Análisis de Percepción Digital y Posicionamiento Competitivo
toc: false
---

```js
import * as Plot from "npm:@observablehq/plot";
const facebookPageData = FileAttachment("./data/facebook_pages.json").json();
```

# El Pulso Digital de Subiré y su Entorno Competitivo

Este reporte presenta un análisis exhaustivo de la percepción y conversación digital en torno a Subiré, contrastándola con sus competidores clave en el sector educativo de la Zona Metropolitana de Guadalajara: **Instituto de Ciencias**, **Thomas Jefferson School** y **The American School Foundation of Guadalajara**.

El objetivo es comprender en profundidad el posicionamiento digital de Subiré, identificar sus fortalezas, debilidades y oportunidades, y proporcionar insights estratégicos basados en datos. El análisis abarca un periodo de **14 meses** y se basa en información recopilada de diversas fuentes digitales clave, incluyendo:

* **Redes Sociales:** Facebook, Instagram, TikTok, Twitter (X), LinkedIn, YouTube.
(Se tomaron en cuenta para análisis de lenguaje natural: FB y X)
* **Espacios Especializados:** Reddit, reseñas en Google, foros relevantes y grupos privados (segmento socioeconómico medio-alto y alto).

Se utiliza una metodología mixta (cuantitativa y cualitativa) apoyada en herramientas avanzadas de social listening para capturar métricas de volumen, alcance, sentimiento, engagement y para identificar las narrativas predominantes asociadas a cada institución.

## Visión General del Ecosistema Digital

En esta sección, se presenta un análisis detallado del ecosistema digital en torno a Subiré y sus competidores. Los competidores clave incluyen:

```js
import {initializeMap} from "./components/map.js";
```

```js
import {ScatterPlot} from "./components/scatterPlot.js";
```
```js
ScatterPlot(facebookPageData, {x: "likes", y: "ratingOverall", stroke: "title"});
```


* **Instituto de Ciencias:** Ubicado en la Zona Metropolitana de Guadalajara, conocido por su enfoque académico riguroso.
* **Instituto Thomas Jefferson - Campus Valle Real:** Destacado por su metodología educativa innovadora y su fuerte presencia en redes sociales.
* **The American School Foundation of Guadalajara:** Reconocido por su enfoque bilingüe y su prestigio internacional.
* **Prepa Tec - Campus Santa Margarita:** Parte del sistema Tecnológico de Monterrey, con un enfoque en la educación integral.
* **Colegio Finlandés - Campus Zapopan:** Conocido por su enfoque en la educación personalizada y el bienestar estudiantil.
* **Summit School:** Enfocado en la educación bilingüe y el desarrollo integral de sus estudiantes.
* **Colegio Franco Mexicano:** Ofrece un enfoque educativo bicultural, combinando lo mejor de las culturas francesa y mexicana.
* **Colegio Signos:** Destacado por su enfoque en la educación inclusiva y personalizada.
* **Colegio Once México:** Conocido por su enfoque en la innovación educativa y el uso de tecnología avanzada.
* **Colegio Alemán de Guadalajara:** Ofrece un enfoque educativo trilingüe, con un fuerte énfasis en la cultura alemana.
* **Instituto Tepeyac - Campus Guadalajara:** Reconocido por su enfoque en valores y educación integral.

### Volumen de Conversación y Tendencias Temporales

La visualización siguiente ilustra cómo ha evolucionado el volumen de menciones para Subiré y sus competidores a lo largo del periodo analizado, destacando las tendencias temporales y los picos de conversación en las plataformas digitales más relevantes.