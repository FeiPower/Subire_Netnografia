# Map Dashboard with Observable Plot

This document outlines how to create an interactive map visualization using Observable Plot and ObservableHQ for the Subiré Business School netnography project.

## Setup Instructions

1. First, create a new Observable notebook at [ObservableHQ](https://observablehq.com/)
2. Import the required dependencies:

```javascript
Plot = require("@observablehq/plot")
d3 = require("d3")
topojson = require("topojson")
```

## Data Preparation

Before creating the visualization, we need to convert the schools shapefile to GeoJSON format:

1. Install required Python dependencies:
```bash
pip install geopandas
```

2. Run the conversion script:
```bash
python src/data_processing/convert_shapefile.py
```

This will convert `data/raw/geo/Colegios.shp` to GeoJSON format and save it in `data/processed/geo/colegios.geojson`.

## Basic Map Implementation

Here's a basic implementation of a map centered on Zapopan, Jalisco, including the schools from our shapefile:

```javascript
// Define the map viewport centered on Zapopan
viewof map = {
  const width = 800;
  const height = 600;
  
  // Zapopan coordinates
  const zapopan = {
    longitude: -103.4068,
    latitude: 20.7214
  };
  
  // Load schools GeoJSON
  const schoolsData = FileAttachment("colegios.geojson").json()
  
  return Plot.plot({
    projection: {
      type: "mercator",
      domain: [
        [zapopan.longitude - 0.2, zapopan.latitude - 0.2],
        [zapopan.longitude + 0.2, zapopan.latitude + 0.2]
      ]
    },
    marks: [
      // Base map
      Plot.geo(mexico_geojson, {
        fill: "lightgray",
        stroke: "white"
      }),
      // Schools from shapefile
      Plot.geo(schoolsData, {
        stroke: "blue",
        strokeWidth: 1.5,
        fill: "none"
      }),
      Plot.dot(schoolsData.features, {
        x: d => d.geometry.coordinates[0],
        y: d => d.geometry.coordinates[1],
        r: 4,
        fill: "blue",
        fillOpacity: 0.6,
        title: d => d.properties.name || "School"
      }),
      // Highlight Subiré Business School
      Plot.dot([{
        longitude: zapopan.longitude,
        latitude: zapopan.latitude
      }], {
        x: "longitude",
        y: "latitude",
        fill: "red",
        r: 8,
        title: "Subiré Business School"
      })
    ]
  })
}
```

## Adding Interactive Features

To make the map interactive and display school-related data:

```javascript
// Sample school data with metrics
schoolData = [
  {
    name: "Subiré Business School",
    coordinates: [-103.4068, 20.7214],
    metrics: {
      socialMentions: 150,
      sentiment: 0.8,
      engagement: 2500
    }
  }
  // Add more schools/locations as needed
]

// Create interactive visualization
viewof interactiveMap = Plot.plot({
  marks: [
    // Base map
    Plot.geo(mexico_geojson, {
      fill: "lightgray",
      stroke: "white"
    }),
    // Schools from shapefile
    Plot.geo(schoolsData, {
      stroke: "blue",
      strokeWidth: 1.5,
      fill: "none"
    }),
    // Schools with metrics
    Plot.dot(schoolData, {
      x: d => d.coordinates[0],
      y: d => d.coordinates[1],
      r: d => Math.sqrt(d.metrics.engagement) / 10,
      fill: d => d3.interpolateRdYlBu(d.metrics.sentiment),
      title: d => `${d.name}\nMentions: ${d.metrics.socialMentions}\nEngagement: ${d.metrics.engagement}`,
      stroke: "white"
    })
  ],
  color: {
    scheme: "RdYlBu",
    label: "Sentiment Score"
  },
  width: 800,
  height: 600,
  projection: "mercator"
})
```

## Data Integration

To integrate the netnography data with the map:

1. Export your processed data from Python as GeoJSON or JSON:

```python
import pandas as pd
import json

def export_location_data(df):
    """
    Export location-based metrics for the map visualization
    """
    location_data = {
        "type": "FeatureCollection",
        "features": []
    }
    
    for _, row in df.iterrows():
        feature = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [row['longitude'], row['latitude']]
            },
            "properties": {
                "name": row['location_name'],
                "sentiment": row['sentiment_score'],
                "mentions": row['mention_count'],
                "engagement": row['engagement_score']
            }
        }
        location_data["features"].append(feature)
    
    with open('processed_location_data.json', 'w') as f:
        json.dump(location_data, f)
```

2. Load the data in Observable:

```javascript
// Load the processed data
data = FileAttachment("processed_location_data.json").json()

// Create visualization with the loaded data
viewof dataMap = Plot.plot({
  marks: [
    Plot.geo(mexico_geojson, {
      fill: "lightgray",
      stroke: "white"
    }),
    Plot.dot(data.features, {
      x: d => d.geometry.coordinates[0],
      y: d => d.geometry.coordinates[1],
      r: d => Math.sqrt(d.properties.engagement) / 10,
      fill: d => d3.interpolateRdYlBu(d.properties.sentiment),
      title: d => `${d.properties.name}\nMentions: ${d.properties.mentions}\nEngagement: ${d.properties.engagement}`,
      stroke: "white"
    })
  ],
  color: {
    scheme: "RdYlBu",
    label: "Sentiment Score"
  },
  width: 800,
  height: 600,
  projection: "mercator"
})
```

## Additional Features

You can enhance the map with:

1. Layer toggles for different metrics
2. Time-series animation
3. Clustering for dense areas
4. Custom tooltips with detailed information
5. Legend and scale controls

Example of adding a layer toggle:

```javascript
viewof layerSelect = Inputs.select(
  ["Sentiment", "Engagement", "Mentions"],
  {label: "Display Metric", value: "Sentiment"}
)

// Update map based on selection
mapWithLayers = {
  const metricScale = {
    "Sentiment": d => d.properties.sentiment,
    "Engagement": d => d.properties.engagement,
    "Mentions": d => d.properties.mentions
  }
  
  return Plot.plot({
    marks: [
      Plot.geo(mexico_geojson, {
        fill: "lightgray",
        stroke: "white"
      }),
      Plot.dot(data.features, {
        x: d => d.geometry.coordinates[0],
        y: d => d.geometry.coordinates[1],
        r: d => Math.sqrt(metricScale[layerSelect](d)) / 10,
        fill: d => d3.interpolateRdYlBu(metricScale[layerSelect](d)),
        title: d => `${d.properties.name}\n${layerSelect}: ${metricScale[layerSelect](d)}`,
        stroke: "white"
      })
    ],
    color: {
      scheme: "RdYlBu",
      label: layerSelect
    },
    width: 800,
    height: 600,
    projection: "mercator"
  })
}
```

## Best Practices

1. Always include proper attribution for map data
2. Optimize performance by limiting data points shown at once
3. Use appropriate color scales for different metrics
4. Provide clear legends and tooltips
5. Include zoom and pan controls for better exploration
6. Ensure responsive design for different screen sizes

## Next Steps

1. Integrate real-time data updates
2. Add custom styling for school-specific branding
3. Implement filters for different data categories
4. Add export functionality for reports
5. Create linked views with other visualizations 