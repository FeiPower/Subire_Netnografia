import * as Plot from "npm:@observablehq/plot";

export function ScatterPlot(data, {width = 1000, height = 600, x = "likes", y = "ratingOverall", stroke = "title"} = {}) {
  // Process data to handle potential null values
  const processedData = data.filter(d => d[x] != null && d[y] != null);

  // Calculate the data ranges
  const xMin = Math.min(...processedData.map(d => d[x]));
  const xMax = Math.max(...processedData.map(d => d[x]));
  const yMin = Math.min(...processedData.map(d => d[y]));
  const yMax = Math.max(...processedData.map(d => d[y]));

  return Plot.plot({
    title: "Comparación entre páginas de Facebook",
    width,
    height,
    style: {
      backgroundColor: "#FFFFFF00",
      fontSize: "12px",
      fontFamily: "system-ui, -apple-system, sans-serif"
    },
    margin: 50,
    x: {
      type: "linear",
      label: x === "likes" ? "Número de Likes" : x,
      domain: [xMin, xMax],
      grid: true
    },
    y: {
      type: "linear",
      label: y === "ratingOverall" ? "Calificación General" : y,
      domain: [yMin, yMax],
      grid: true
    },
    color: {
      legend: true,
      label: "Escuela"
    },
    marks: [
      Plot.dot(processedData, {
        x: x,
        y: y,
        fill: stroke,
        stroke: "white",
        strokeWidth: 1,
        r: 8,
        title: d => `${d.title}\n${x}: ${d[x]}\n${y}: ${d[y]}`
      }),
      Plot.text(processedData, {
        x: x,
        y: y,
        text: d => d.title,
        dx: 15,
        dy: -10,
        fontSize: 10,
        fill: "black"
      })
    ]
  });
}
