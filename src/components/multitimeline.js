import * as Plot from "npm:@observablehq/plot";

export function multitimeline(data, {width = 1000, height = 600} = {}) {
  // Process data to convert timestamps to Date objects and create a unified format
  const processedData = data.map(d => ({
    ...d,
    date: new Date(d.time)
  }));

  // Calculate the date range from the data
  const minDate = new Date(Math.min(...processedData.map(d => d.date)));
  const maxDate = new Date(Math.max(...processedData.map(d => d.date)));

  // Define metrics configuration for cleaner code
  const metrics = [
    { key: "likesCount", label: "Likes", color: "#f28e2c" },
    { key: "commentsCount", label: "Comentarios", color: "#e15759" },
    { key: "sharesCount", label: "Compartidos", color: "#76b7b2" }
  ];

  // Transform data for stacking
  const stackedData = processedData.flatMap(d => 
    metrics.map(metric => ({
      date: d.date,
      metric: metric.label,
      value: d[metric.key] || 0,
      color: metric.color
    }))
  );

  return Plot.plot({
    title: "Resonancia en Grupos de Facebook",
    width,
    height,
    style: {
      backgroundColor: "#FFFFFF00",
      fontSize: "12px",
      fontFamily: "system-ui, -apple-system, sans-serif"
    },
    margin: 50,
    x: {
      type: "time",
      label: "Fecha",
      tickFormat: "%b %Y",
      grid: true,
      labelAngle: 45,
      labelOffset: 30,
      domain: [minDate, maxDate]
    },
    y: {
      grid: true,
      label: "Cantidad Total",
      labelOffset: 40
    },
    color: {
      legend: true,
      label: "Métricas"
    },
    marks: [
      Plot.areaY(stackedData, {
        x: "date",
        y: "value",
        fill: "metric",
        stroke: "white",
        strokeWidth: 1,
        opacity: 0.8
      }),
      Plot.ruleY([0])
    ]
  });
}
