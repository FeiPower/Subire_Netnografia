import * as L from "npm:leaflet";

export default function createMap(container, geoJsonDataList = []) {
  // Create map instance
  const map = L.map(container, {
    fullscreenControl: true,
    zoomControl: false  // We'll add this control separately
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Add zoom control to the top-right corner
  L.control.zoom({ position: 'topright' }).addTo(map);

  // Add scale control
  L.control.scale().addTo(map);

  if (geoJsonDataList.length > 0) {
    // Create feature groups to hold different layer types
    const nseFeatureGroup = L.featureGroup().addTo(map);
    const pointFeatureGroup = L.featureGroup().addTo(map);
    const isochroneFeatureGroup = L.featureGroup().addTo(map);

    // Create an object to store all layers
    const layers = {};

    // Define color scheme for NSE grades
    const nseColors = {
      'A/B': '#0066cc',  // Azul para NSE más alto
      'C+': '#33cc33',   // Verde brillante
      'C': '#ffcc00',    // Amarillo
      'C-': '#ff9900',   // Naranja
      'D+': '#ff3300',   // Rojo brillante
      'D': '#cc0000',    // Rojo oscuro
      'E': '#660000'     // Rojo muy oscuro
    };

    // Define isochrone colors and opacity
    const isochroneStyle = (minutes) => ({
      5: { color: '#1a9850', weight: 2, opacity: 0.8, fillOpacity: 0.4 },
      10: { color: '#91cf60', weight: 2, opacity: 0.8, fillOpacity: 0.4 },
      15: { color: '#d9ef8b', weight: 2, opacity: 0.8, fillOpacity: 0.4 },
      20: { color: '#fee08b', weight: 2, opacity: 0.8, fillOpacity: 0.4 },
      25: { color: '#fc8d59', weight: 2, opacity: 0.8, fillOpacity: 0.4 },
      30: { color: '#d73027', weight: 2, opacity: 0.8, fillOpacity: 0.4 }
    }[minutes] || { color: '#808080', weight: 1, opacity: 0, fillOpacity: 0 });

    // Add each GeoJSON dataset
    geoJsonDataList.forEach((geoJsonData, index) => {
      const layerName = geoJsonData.name || `Layer ${index + 1}`;
      
      const geoJsonLayer = L.geoJSON(geoJsonData, {
        style: (feature) => {
          // Check if this is an isochrone layer by looking for value or contour property
          if (feature.properties && (feature.properties.value || feature.properties.contour)) {
            const minutes = parseInt(feature.properties.value || feature.properties.contour);
            // Only show isochrones for 5, 10, 15, 20, 25, and 30 minutes
            if ([5, 10, 15, 20, 25, 30].includes(minutes)) {
              return isochroneStyle(minutes);
            }
            return { opacity: 0, fillOpacity: 0 }; // Hide other isochrones
          }
          // Check if this is the NSE layer
          else if (feature.properties && feature.properties.NSE_Grade) {
            const nseGrade = feature.properties.NSE_Grade;
            return {
              fillColor: nseColors[nseGrade] || '#808080',
              weight: 0,
              opacity: 1,
              color: '#666',
              fillOpacity: 0.8
            };
          } else {
            // Style for non-NSE layers (schools)
            return {
              fillColor: '#000000',
              color: '#000',
              weight: 0,
              opacity: 1,
              fillOpacity: 1
            };
          }
        },
        pointToLayer: (feature, latlng) => {
          // Only create circle markers for points (schools)
          return L.circleMarker(latlng, {
            radius: 8,
            fillColor: '#000000',
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 1
          });
        },
        onEachFeature: (feature, layer) => {
          // Create popup content based on feature properties
          let popupContent = '';
          if (feature.properties) {
            if (feature.properties.Nombre) {
              popupContent = `<b>${feature.properties.Nombre}</b>`;
            } else if (feature.properties.NSE_Grade) {
              popupContent = `<b>NSE: ${feature.properties.NSE_Grade}</b>`;
              if (feature.properties.Population) {
                popupContent += `<br>Población: ${feature.properties.Population}`;
              }
            } else if (feature.properties.value || feature.properties.contour) {
              const minutes = parseInt(feature.properties.value || feature.properties.contour);
              popupContent = `<b>Tiempo: ${minutes} minutos</b>`;
            }
            if (popupContent) {
              layer.bindPopup(popupContent);
            }
          }

          // Add labels for schools
          if (feature.properties && feature.properties.Nombre) {
            layer.bindTooltip(feature.properties.Nombre, {
              permanent: true,
              direction: 'right',
              className: 'map-label small-label',
              offset: [0, -25],
              opacity: 0.8
            });
          }

          // Add to appropriate feature group
          if (feature.properties && feature.properties.NSE_Grade) {
            layer.addTo(nseFeatureGroup);
          } else if (feature.properties && (feature.properties.value || feature.properties.contour)) {
            layer.addTo(isochroneFeatureGroup);
          } else {
            layer.addTo(pointFeatureGroup);
          }
        }
      });
      
      layers[layerName] = geoJsonLayer;

      // Center the map on the first layer
      if (index === 0) {
        const bounds = geoJsonLayer.getBounds();
        map.fitBounds(bounds, {
          padding: [50, 50],
          maxZoom: 18
        });
      }
    });

    // Ensure proper layer order
    isochroneFeatureGroup.bringToBack();
    nseFeatureGroup.bringToBack();
    pointFeatureGroup.bringToFront();

    // Add layer control
    L.control.layers(null, layers, { position: 'topright' }).addTo(map);

    // Add legend for NSE grades
    const nseLegend = L.control({ position: 'bottomright' });
    nseLegend.onAdd = function(map) {
      const div = L.DomUtil.create('div', 'info legend');
      div.style.cssText = 'background:white; padding:5px; border-radius:3px; border:1px solid #ccc; margin-bottom:10px;';
      
      div.innerHTML = '<h5>Nivel Socioeconómico</h5>';
      Object.entries(nseColors).forEach(([grade, color]) => {
        div.innerHTML += `<div><i style="background:${color};width:15px;height:15px;display:inline-block;margin-right:3px;"></i>${grade}</div>`;
      });
      return div;
    };
    nseLegend.addTo(map);

    // // Add legend for isochrones
    // const isochroneLegend = L.control({ position: 'bottomright' });
    // isochroneLegend.onAdd = function(map) {
    //   const div = L.DomUtil.create('div', 'info legend');
    //   div.style.cssText = 'background:white; padding:5px; border-radius:3px; border:1px solid #ccc;';
      
    //   div.innerHTML = '<h5>Isócronas (minutos)</h5>';
    //   [5, 10, 15, 20, 25, 30].forEach(minutes => {
    //     const style = isochroneStyle(minutes);
    //     div.innerHTML += `<div><i style="background:${style.color};width:15px;height:15px;display:inline-block;margin-right:3px;"></i>${minutes} min</div>`;
    //   });
    //   return div;
    // };
    // isochroneLegend.addTo(map);

  } else {
    // If no GeoJSON data, set a default view
    map.setView([20.7214, -103.4068], 12); // Center on Zapopan, Jalisco
  }

  return map;
}