// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Subiré Business School | Netnografía",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Introducción",
      pages: [
        { name: "Objetivo y Alcance del Proyecto", path: "./01_introduction/intro" },
        { name: "Importancia de la Percepción Digital", path: "./01_introduction/importancia_percepcion_digital" },
        { name: "¿Qué es una Netnografía?", path: "./01_introduction/que_es_netnografia" }
      ]
    },
    {
      name: "Metodología",
      pages: [
        { name: "Enfoque del Análisis", path: "./02_metodologia/enfoque_analisis" },
        { name: "Fases del Estudio", path: "./02_metodologia/fases_estudio" },
        { name: "Benchmark Competitivo", path: "./02_metodologia/benchmark_competitivo_metodologia" },
        { name: "Ciencia de Redes y Mapas de Audiencia", path: "./02_metodologia/ciencia_redes_metodologia" },
        { name: "Gap Analysis", path: "./02_metodologia/brechas_y_recomendaciones" },

      ]
    },
    {
      name: "Análisis",
      pages: [
        { name: "Benchmark Competitivo de Oferta de Valor (Web)", path: "./05_comparativa_competitiva/benchmark_competitivo_web" },
        { name: "Resonancia Digital General", path: "./03_analisis_ecosistema_digital/resonancia_digital" },
        { name: "Percepción en Google Maps", path: "./03_analisis_ecosistema_digital/subire_gmreviews" },
        { name: "Facebook Pages: Narrativas Clave y Valores Asociados", path: "./04_percepcion_marca/narrativas_valores" },
        { name: "Estilos de Comunicación", path: "./05_comparativa_competitiva/estilos_comunicacion" },
        { name: "Canales y Plataformas", path: "./03_analisis_ecosistema_digital/canales_plataformas" },
        { name: "Gap Analysis de Subiré", path: "./04_percepcion_marca/gap_analysis_subire" },
        { name: "EVA | Análisis de eco digital", path: "./03_analisis_ecosistema_digital/viz_analysis" }


      ]
    },
    {
      name: "Thinking",
      pages: [
        { name: "Fortalezas y Oportunidades Competitivas", path: "./05_comparativa_competitiva/fortalezas_oportunidades" },
        { name: "Oportunidades Estratégicas", path: "./06_oportunidades_y_amenazas/oportunidades_estrategicas" },
        { name: "Amenazas Emergentes", path: "./06_oportunidades_y_amenazas/amenazas_educativas" }
      ]
    },
    {
      name: "Recomendaciones Estratégicas",
      pages: [
        { name: "Contenido y Narrativas Prioritarias", path: "./07_recomendaciones_estrategicas/contenido_narrativas" },
        // { name: "Colaboraciones Estratégicas y Activaciones", path: "./07_recomendaciones_estrategias/colaboraciones_activaciones" }
        { name: "Anexos", path: "./07_recomendaciones_estrategicas/anexos" },

      ]
    }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="./static/subire.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: ["glacier", "wide"], // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "Construído por STRTGY AI.", // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  toc: false, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  typographer: true, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
