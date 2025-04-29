---
title: Subiré Business School | Netnografía
toc: false
---

```js
import {multitimeline} from "./components/multitimeline.js";
import {groupstimeline} from "./components/groupstimeline.js";
import {wordNetworkPlot} from "./components/wordNetworkPlot.js";
// import {createVolumeChart} from "./components/volumeChart.js";
const facebookData = FileAttachment("./data/facebook_groups_resonance.json").json();

```

# Una resonancia del mundo digital alrededor de Subiré

Este reporte presenta los resultados preliminares obtenidos de la descarga y exploración de la información rescatada desde: Facebook, Reddit, SCINCE, DENUE y Google Maps para analizar el lugar que ocupa Subiré en el contexto escolar privado de la Zona Metropolitana de Guadalajara, así como el de su principal competencia: The American School Foundation de Guadalajara, la Prepa Tec Santa Anita, el Instituto de Ciencias, entre otros.

## Resonancia en Grupos de Facebook

La siguiente visualización muestra la actividad y engagement en grupos de Facebook relacionados con colegios en Guadalajara. Se analizan cuatro métricas principales:

- Posts: Cantidad de publicaciones realizadas
- Likes: Total de reacciones positivas
- Comentarios: Interacciones en forma de comentarios
- Compartidos: Veces que el contenido fue compartido

### Distribución de Tipos de Engagement

```js
multitimeline(facebookData, {height: 600})
```

#### Hallazgos Clave de la Distribución por Tipo de Interacción

1. **Predominancia de Likes**
   - Los likes representan la forma más común de interacción
   - Se observan picos significativos que coinciden con eventos o anuncios importantes
   - La tendencia general muestra un crecimiento sostenido en el engagement

2. **Patrones de Comentarios**
   - Los comentarios muestran una distribución más volátil
   - Hay períodos de alta discusión que podrían indicar temas controversiales o de alto interés
   - La proporción comentarios/likes puede servir como indicador de temas que generan debate

3. **Comportamiento de Compartidos**
   - Los compartidos son menos frecuentes pero más significativos
   - Los picos en compartidos suelen corresponder a contenido de alto valor informativo
   - Se observa una correlación entre eventos importantes y aumentos en compartidos

### Engagement por Grupo

```js
groupstimeline(facebookData, {height: 600})
```

#### Análisis Detallado por Grupo

1. **Participación por Comunidad**
   - Se identifican grupos dominantes que consistentemente generan más engagement
   - Existe una clara estratificación entre grupos más activos y menos activos
   - Algunos grupos muestran patrones estacionales de actividad

2. **Tendencias Temporales**
   - Los períodos de mayor actividad coinciden con:
     * Inicio y fin de ciclos escolares
     * Eventos escolares significativos
     * Períodos de inscripciones
   - Se observan valles de actividad durante vacaciones y días festivos

3. **Insights Estratégicos**
   - Los grupos más exitosos mantienen una base constante de engagement
   - Existe oportunidad para aumentar la participación en grupos menos activos
   - La diversidad de grupos sugiere diferentes segmentos de audiencia con necesidades específicas

### Implicaciones para la Estrategia Digital

1. **Optimización de Contenido**
   - Identificar y replicar el tipo de contenido que genera más engagement
   - Adaptar la estrategia de publicación según los patrones temporales observados
   - Fomentar la participación activa en períodos tradicionalmente menos activos

2. **Gestión de Comunidad**
   - Fortalecer la presencia en grupos de alto rendimiento
   - Desarrollar estrategias específicas para grupos menos activos
   - Mantener un calendario de contenido alineado con los ciclos escolares

3. **Monitoreo y Respuesta**
   - Establecer sistema de alerta para picos inusuales de actividad
   - Preparar respuestas rápidas para temas que generan alto engagement
   - Mantener seguimiento continuo de la evolución de las conversaciones

```js
const facebookGroupNetworkData = FileAttachment("./data/fb_groups_with_comments_word_graph.json").json();
```

```js
wordNetworkPlot(facebookGroupNetworkData, {height: 600,title: "Subiré Business School Word Network"})
```