---
title: Subiré Business School | Netnografía
---

# Una resonancia del mundo digital alrededor de Subiré

Este reporte presenta los resultados preliminares obtenidos de la descarga y exploración de la información rescatada desde: Facebook, Reddit, SCINCE, DENUE y Google Maps para analizar el lugar que ocupa Subiré en el contexto escolar privado de la Zona Metropolitana de Guadalajara, así como el de su principal competencia: The American School Foundation de Guadalajara, la Prepa Tec Santa Anita, el Instituto de Ciencias, entre otros.

## Resonancia en Grupos de Facebook

La siguiente visualización muestra la actividad y engagement en grupos de Facebook relacionados con colegios en Guadalajara. Se analizan cuatro métricas principales:

- Posts: Cantidad de publicaciones realizadas
- Likes: Total de reacciones positivas
- Comentarios: Interacciones en forma de comentarios
- Compartidos: Veces que el contenido fue compartido

```js
import {multitimeline} from "./components/multitimeline.js";
import {groupstimeline} from "./components/groupstimeline.js";
```

```js
const facebookData = FileAttachment("./data/facebook_groups_resonance.json").json();
```

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

Esta información proporciona una base sólida para la toma de decisiones en la estrategia de comunicación digital de Subiré Business School.

## Contexto

The history of rocket launches dates back to ancient China, where gunpowder-filled tubes were used as primitive forms of propulsion.

Fast-forward to the 20th century during the Cold War era, the United States and the Soviet Union embarked on a space race, a competition to innovate and explore beyond Earth.

This led to the launch of the first artificial satellite, Sputnik 1, and the crewed moon landing by Apollo 11. As technology advanced, rocket launches became synonymous with space exploration and satellite deployment.

## The Space Shuttle era

```js
import {timeline} from "./components/timeline.js";
```

```js
const events = FileAttachment("./data/events.json").json();
```

```js
timeline(events, {height: 300})
```

```
### Sputnik 1 (1957)

This was the first artificial satellite. Launched by the Soviet Union, it marked the beginning of the space age.

### Apollo 11 (1969)

The historic Apollo 11 mission, led by NASA, marked the first successful human landing on the Moon. Astronauts Neil Armstrong and Buzz Aldrin became the first humans to set foot on the lunar surface.

### Viking 1 and 2 (1975)

NASA's Viking program successfully launched two spacecraft, Viking 1 and Viking 2, to Mars. These missions were the first to successfully land and operate on the Martian surface, conducting experiments to search for signs of life.

### Space Shuttle Columbia (1981)

The first orbital space shuttle mission, STS-1, launched the Space Shuttle Columbia on April 12, 1981. The shuttle program revolutionized space travel, providing a reusable spacecraft for a variety of missions.

### Hubble Space Telescope (1990)

The Hubble Space Telescope has provided unparalleled images and data, revolutionizing our understanding of the universe and contributing to countless astronomical discoveries.

### International Space Station (ISS) construction (1998—2011)

The ISS, a collaborative effort involving multiple space agencies, began construction with the launch of its first module, Zarya, in 1998. Over the following years, various modules were added, making the ISS a symbol of international cooperation in space exploration.

## Commercial spaceflight

After the Space Shuttle program, a new era emerged with a shift towards commercial spaceflight.

Private companies like Blue Origin, founded by Jeff Bezos in 2000, and SpaceX, founded by Elon Musk in 2002, entered the scene. These companies focused on developing reusable rocket technologies, significantly reducing launch costs.

SpaceX, in particular, achieved milestones like the first privately developed spacecraft to reach orbit (Dragon in 2010) and the first privately funded spacecraft to dock with the ISS (Dragon in 2012).

## Recent launch activity

The proliferation of commercial space companies has driven a surge in global launch activity within the last few years.

SpaceX's Falcon 9 and Falcon Heavy, along with other vehicles from companies like Rocket Lab, have become workhorses for deploying satellites, conducting scientific missions, and ferrying crew to the ISS.

The advent of small satellite constellations, such as Starlink by SpaceX, has further fueled this increase in launches. The push for lunar exploration has added momentum to launch activities, with initiatives like NASA's Artemis program and plans for crewed missions to the Moon and Mars.

## Looking forward

As technology continues to advance and global interest in space exploration grows, the future promises even more exciting developments in the realm of rocket launches and space travel.

Exploration will not only be limited to the Moon or Mars, but extend to other parts of our solar system such as Jupiter and Saturn's moons, and beyond.
