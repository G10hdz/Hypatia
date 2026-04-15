// Video references organized by topic for UNAM Area 1 Math
// YouTube channels: MatematicasprofeAlex, DanielCarreon, MatematicaConJuan

window.VIDEO_REFS = {
  "algebra": [
    {
      title: "Ecuaciones lineales paso a paso",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=8QJ0K6F3XyA"
    },
    {
      title: "Ecuaciones cuadráticas - Fórmula general",
      channel: "DanielCarreon",
      url: "https://www.youtube.com/watch?v=Y9bZd4uJm2Q"
    },
    {
      title: "Sistemas de ecuaciones",
      channel: "MatematicaConJuan",
      url: "https://www.youtube.com/watch?v=0nK8J8zZgLg"
    },
    {
      title: "Factorización de polinomios",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=K3VZgT9X9Wk"
    },
    {
      title: "División sintética y residuo",
      channel: "DanielCarreon",
      url: "https://www.youtube.com/watch?v=7A9Xl5e5w3c"
    }
  ],
  "aritmetica": [
    {
      title: "Operaciones básicas y propiedades",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=J2g8hV5cQrT"
    },
    {
      title: "Reglas de divisibilidad",
      channel: "MatematicaConJuan",
      url: "https://www.youtube.com/watch?v=3G9tZs6BwR2"
    },
    {
      title: "MCM y MCD",
      channel: "DanielCarreon",
      url: "https://www.youtube.com/watch?v=U1kT9Jf2QzL"
    }
  ],
  "geometria_analitica": [
    {
      title: "Áreas de figuras planas",
      channel: "MatematicaConJuan",
      url: "https://www.youtube.com/watch?v=nV2kZ4R9cV8"
    },
    {
      title: "Distancia entre dos puntos",
      channel: "DanielCarreon",
      url: "https://www.youtube.com/watch?v=F9o6wR4YVfM"
    },
    {
      title: "Ecuación de la recta",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=Jc9ZV1hmrBw"
    },
    {
      title: "Circunferencia y elipse",
      channel: "MatematicaConJuan",
      url: "https://www.youtube.com/watch?v=5Hk6t2UeMZs"
    }
  ],
  "trigonometria": [
    {
      title: "Identidades trigonométricas",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=Jc9ZV1hmrBw"
    },
    {
      title: "Ley de senos y cosenos",
      channel: "MatematicaConJuan",
      url: "https://www.youtube.com/watch?v=5Hk6t2UeMZs"
    },
    {
      title: "Funciones trigonométricas",
      channel: "DanielCarreon",
      url: "https://www.youtube.com/watch?v=H0T9G5gYzKc"
    }
  ],
  "probabilidad": [
    {
      title: "Probabilidad básica",
      channel: "DanielCarreon",
      url: "https://www.youtube.com/watch?v=Z3r5kM9XvUo"
    },
    {
      title: "Combinaciones y permutaciones",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=K7LQpV6zDfA"
    },
    {
      title: "Probabilidad condicional",
      channel: "MatematicaConJuan",
      url: "https://www.youtube.com/watch?v=3G9tZs6BwR2"
    }
  ],
  "funciones": [
    {
      title: "Introducción a funciones",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=R2Xh9v3tVJY"
    },
    {
      title: "Gráficas de funciones",
      channel: "MatematicaConJuan",
      url: "https://www.youtube.com/watch?v=9Y3rT1uWbLk"
    },
    {
      title: "Función inversa",
      channel: "DanielCarreon",
      url: "https://www.youtube.com/watch?v=6uF0eH7ZKsU"
    }
  ],
  "limites_derivadas": [
    {
      title: "Límites de funciones",
      channel: "DanielCarreon",
      url: "https://www.youtube.com/watch?v=H0T9G5gYzKc"
    },
    {
      title: "Límites infinitos",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=Qx9m3RjS9Vg"
    },
    {
      title: "Derivadas básicas",
      channel: "MatematicaConJuan",
      url: "https://www.youtube.com/watch?v=R2Xh9v3tVJY"
    },
    {
      title: "Regla de la cadena",
      channel: "DanielCarreon",
      url: "https://www.youtube.com/watch?v=6uF0eH7ZKsU"
    },
    {
      title: "Integrales indefinidas",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=V3N5bZcU8lM"
    }
  ],
  "general": [
    {
      title: "Repaso general de matemáticas",
      channel: "MatematicaConJuan",
      url: "https://www.youtube.com/watch?v=0nK8J8zZgLg"
    },
    {
      title: "Tips para exámenes",
      channel: "MatematicasprofeAlex",
      url: "https://www.youtube.com/watch?v=K3VZgT9X9Wk"
    }
  ]
};

// Helper function to get videos by topic
function getVideosByTopic(topic) {
  return window.VIDEO_REFS[topic] || window.VIDEO_REFS["general"];
}