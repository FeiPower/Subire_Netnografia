// Network visualization component for Subiré Business School social media analysis
// Author: AI Assistant
// Last modified: 2024

import * as d3 from "npm:d3";
import * as Plot from "npm:@observablehq/plot";

/**
 * Creates a force-directed network visualization of word co-occurrences
 * @param {Object} data - The network data with nodes and links
 * @param {Object} options - Visualization options
 * @returns {Element} - The SVG element containing the visualization
 */

export function wordNetworkPlot(data, {
  width = 928, // width of the visualization
  height = 600, // height of the visualization
  nodeRadius = d => Math.sqrt(d.weight) * .1, // radius calculation for nodes
  linkStroke = "#999",
  linkStrokeOpacity = 0.6,
  linkStrokeWidth = .1,
  linkStrength = 250, // strength of repulsive force between nodes
  linkDistance = 500, // desired distance between connected nodes
  colors = d3.schemeTableau10, // color scheme for nodes
  title = "Word Co-occurrence Network" // title of the visualization
} = {}) {
  
  // Input validation
  if (!data?.nodes || !data?.links) {
    throw new Error("Data must contain 'nodes' and 'links' arrays");
  }

  // Create SVG container
  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  // Add title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text(title);

  // Create force simulation
  const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links)
      .id(d => d.id)
      .distance(linkDistance))
    .force("charge", d3.forceManyBody().strength(linkStrength))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => nodeRadius(d) + 5))
    .force("x", d3.forceX(width / 2).strength(0.1))
    .force("y", d3.forceY(height / 2).strength(0.1));

  // Create container for links
  const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(data.links)
    .join("line")
    .attr("stroke-width", d => Math.sqrt(d.value));

  // Create container for nodes
  const node = svg.append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1)
    .selectAll("circle")
    .data(data.nodes)
    .join("circle")
    .attr("r", nodeRadius)
    .attr("fill", (d, i) => colors[i % colors.length])
    .call(drag(simulation));

  // Add node labels
  const labels = svg.append("g")
    .attr("class", "labels")
    .selectAll("text")
    .data(data.nodes)
    .join("text")
    .attr("text-anchor", "middle")
    .attr("dy", 0) // Position label in the center of the node
    .style("font-size", "12px")
    .style("pointer-events", "none") // Prevent labels from interfering with drag
    .text(d => d.id);

  // Add tooltips
  // node.append("title")
  //   .text(d => `${d.id}\nWeight: ${d.weight}`);

  // Update positions on each tick
  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
    
    labels
      .attr("x", d => d.x)
      .attr("y", d => d.y);
  });

  // Implement drag behavior
  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
    
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  return Object.assign(svg.node(), {
    scales: {
      color: d3.scaleOrdinal(data.nodes.map(d => d.id), colors)
    }
  });
}