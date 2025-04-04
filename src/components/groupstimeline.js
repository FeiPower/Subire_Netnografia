import * as Plot from "npm:@observablehq/plot";

export function groupstimeline(data, {width = 1000, height = 600} = {}) {
  // Process data to convert timestamps to Date objects and create a unified format
  const processedData = data.map(d => ({
    ...d,
    date: new Date(d.time),
    // Sum all metrics for total engagement
    totalEngagement: (d.likesCount || 0) + (d.commentsCount || 0) + (d.sharesCount || 0)
  }));

  // Calculate the date range from the data
  const minDate = new Date(Math.min(...processedData.map(d => d.date)));
  const maxDate = new Date(Math.max(...processedData.map(d => d.date)));

  return Plot.plot({
    title: "Actividad Total por Grupo",
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
      label: "Engagement Total",
      labelOffset: 40
    },
    color: {
      legend: true,
      label: "Grupos"
    },
    marks: [
      Plot.areaY(processedData, {
        x: "date",
        y: "totalEngagement",
        fill: "groupTitle",
        stroke: "white",
        strokeWidth: 1,
        opacity: 0.8
      }),
      Plot.ruleY([0])
    ]
  });
} 