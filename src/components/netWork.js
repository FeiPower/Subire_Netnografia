import * as d3 from "npm:d3";

const width = 640;
const height = 640;
const color = d3.scaleOrdinal(d3.schemeObservable10);

// Copy the data to protect against mutation by d3.forceSimulation.
const links = data.links.map((d) => Object.create(d));
const nodes = data.nodes.map((d) => Object.create(d));

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id((d) => d.id))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

const link = svg.append("g")
    .attr("stroke", "var(--theme-foreground-faint)")
    .attr("stroke-opacity", 0.6)
  .selectAll("line")
  .data(links)
  .join("line")
    .attr("stroke-width", (d) => Math.sqrt(d.value));

const node = svg.append("g")
    .attr("stroke", "var(--theme-background)")
    .attr("stroke-width", 1.5)
  .selectAll("circle")
  .data(nodes)
  .join("circle")
    .attr("r", 5)
    .attr("fill", (d) => color(d.group))
    .call(drag(simulation));

node.append("title")
    .text((d) => d.id);

function ticked() {
  link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

  node
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y);
}

display(svg.node());