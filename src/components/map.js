import * as L from "npm:leaflet";
import colegiosData from '../data/colegios.geojson';

/**
 * Initializes a Leaflet map and adds a marker with a popup.
 * @param {Object} options - Configuration options for the map.
 * @param {number} options.latitude - Latitude for the map center.
 * @param {number} options.longitude - Longitude for the map center.
 * @param {number} options.zoom - Initial zoom level for the map.
 * @param {string} options.popupText - Text to display in the marker popup.
 */
export async function initializeMap({ containerId, latitude = 51.505, longitude = -0.09, zoom = 13 } = {}) {
  const mapContainer = document.getElementById(containerId);
  if (!mapContainer) {
    console.error("Map container not found");
    return;
  }
  mapContainer.style.height = "400px";

  const map = L.map(mapContainer).setView([latitude, longitude], zoom);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const response = await fetch("data/colegios.geojson");
  const geojsonData = await response.json();

  L.geoJSON(geojsonData, {
    onEachFeature: function (feature, layer) {
      const popupContent = feature.properties.Nombre || "No name available";
      layer.bindPopup(popupContent);
    }
  }).addTo(map);
}

export function createColegiosMap(container) {
  // Create map instance
  const map = L.map(container, {
    fullscreenControl: true,
    zoomControl: false
  });

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add zoom control to top-right
  L.control.zoom({ position: 'topright' }).addTo(map);

  // Add scale control
  L.control.scale().addTo(map);

  // Style for school markers
  const schoolStyle = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };

  // Add GeoJSON layer
  const colegiosLayer = L.geoJSON(colegiosData, {
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, schoolStyle);
    },
    onEachFeature: (feature, layer) => {
      if (feature.properties && feature.properties.Nombre) {
        layer.bindPopup(`<b>${feature.properties.Nombre}</b>`);
      }
    }
  }).addTo(map);

  // Fit map to schools bounds
  map.fitBounds(colegiosLayer.getBounds(), {
    padding: [50, 50],
    maxZoom: 14
  });

  return map;
}