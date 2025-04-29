import * as L from "npm:leaflet";

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