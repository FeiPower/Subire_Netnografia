// volumeChart.js

// Importa la librería Observable Plot
import * as Plot from "@observablehq/plot";

/**
 * Crea un gráfico de área apilada mostrando el volumen de datos por fuente a lo largo del tiempo.
 * @param {Array<Object>} data Array de objetos de datos. Cada objeto debe tener al menos 'timestamp' (Date) y 'source' (string).
 * @param {Object} options Opciones de configuración.
 * @param {number} [options.width=640] Ancho del gráfico en píxeles.
 * @param {string} [options.interval="month"] Intervalo de tiempo para la agregación ("day", "week", "month", "year").
 * @param {string} [options.colorScheme="tableau10"] Esquema de colores de Plot a usar.
 * @returns {object} Objeto de visualización de Observable Plot.
 */
export function createVolumeChart(data, { width = 640, interval = "month", colorScheme = "tableau10" } = {}) {

  // Verifica si hay datos para evitar errores
  if (!data || data.length === 0) {
    console.warn("No data provided to createVolumeChart.");
    // Podrías devolver un elemento HTML indicando que no hay datos
    // o simplemente un objeto Plot vacío/informativo.
    const p = document.createElement("p");
    p.textContent = "No hay datos disponibles para mostrar el gráfico.";
    return p; // Devuelve un elemento HTML simple
  }

  return Plot.plot({
    // --- Configuración General y Ejes ---
    title: "Volumen de Datos por Fuente a lo Largo del Tiempo",
    subtitle: `Número de registros por ${interval}`,
    width: width, // Usa el ancho proporcionado en las opciones
    marginTop: 50,
    marginLeft: 60,
    marginBottom: 50,
    x: {
      label: "Fecha",
      // tickFormat: "%b %Y", // Formato opcional
    },
    y: {
      label: "Número de Registros",
      grid: true
    },
    color: {
      scheme: colorScheme, // Usa el esquema de color proporcionado
      legend: true
    },

    // --- Marcas (Las capas visuales del gráfico) ---
    marks: [
      // 1. Área Apilada
      Plot.areaY(data, Plot.binX(
        { y: "count" }, // Agrega la cuenta de registros en el eje Y
        {
          x: "timestamp",      // Usa la columna 'timestamp' para el eje X
          fill: "source",      // Colorea y apila las áreas según la columna 'source'
          interval: interval,  // Usa el intervalo proporcionado en las opciones
          tip: {
              format: {
                  x: interval === "day" ? "%Y-%m-%d" : (interval === "week" ? "%Y W%W" : "%B %Y"), // Formato de fecha según intervalo
                  y: ",",     // Formato numérico para la cuenta
                  fill: true  // Muestra el nombre de la fuente
              },
              title: d => `${d.source}` // Título del tooltip (nombre de la fuente)
          }
        }
      )),

      // 2. Línea en Cero (opcional)
      Plot.ruleY([0])
    ]
  });
}

/**
 * Alternativa: Crea un gráfico de líneas múltiples.
 * (Mismos parámetros que createVolumeChart)
 */
export function createVolumeLineChart(data, { width = 640, interval = "month", colorScheme = "tableau10" } = {}) {
   if (!data || data.length === 0) {
    console.warn("No data provided to createVolumeLineChart.");
    const p = document.createElement("p");
    p.textContent = "No hay datos disponibles para mostrar el gráfico.";
    return p;
  }
  
  return Plot.plot({
    // ... (configuración similar a createVolumeChart, pero sin apilado implícito) ...
    title: "Tendencia del Volumen de Datos por Fuente",
    subtitle: `Número de registros por ${interval}`,
     width: width, 
     marginTop: 50,
     marginLeft: 60,
     marginBottom: 50,
     x: { label: "Fecha" },
     y: { label: "Número de Registros", grid: true },
     color: { scheme: colorScheme, legend: true },
    marks: [
      Plot.lineY(data, Plot.binX(
        { y: "count" },
        {
          x: "timestamp",
          stroke: "source", // Usa 'stroke' para colorear las LÍNEAS por fuente
          interval: interval,
          tip: {
              format: {
                  x: interval === "day" ? "%Y-%m-%d" : (interval === "week" ? "%Y W%W" : "%B %Y"),
                  y: ",",
                  stroke: true
              },
              title: d => `${d.source}`
          }
        }
      )),
      Plot.ruleY([0])
    ]
  });
}