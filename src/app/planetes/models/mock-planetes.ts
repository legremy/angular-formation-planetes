import { Planete } from "./planete";
export const planetes: Planete[] = [
  {
    id: 1,
    name: "Mercure",
    rank: 1,
    type: "Métallique",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/280px-Mercury_in_color_-_Prockter07_centered.jpg",
    description: `Mercure est la planète la plus proche du Soleil et la moins massive du Système solaire. 
      Son éloignement au Soleil est compris entre 0,31 et 0,47 unité astronomique (46 et 70 millions de kilomètres), 
      ce qui correspond à une excentricité orbitale de 0,2 — plus de douze fois supérieure à celle de la Terre, et de loin la 
      plus élevée pour une planète du système solaire. Elle est visible à l'œil nu depuis la Terre avec un diamètre apparent 
      de 4,5 à 13 secondes d'arc, et une magnitude apparente de 5,7 à −2,3.`
  },
  {
    id: 2,
    name: "Venus",
    rank: 2,
    type: "Tellurique silicates",
    image:
      "https://download.vikidia.org/vikidia/fr/images/thumb/8/85/Venus_globe.jpg/270px-Venus_globe.jpg",
    description: `Venus est la déesse de l'amour (et du rasage des jambes), on ne badine pas avec ça.`
  },
  {
    id: 3,
    name: "Terre",
    rank: 3,
    type: "Tellurique silicates",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png/280px-Earth_by_the_EPIC_Team_on_21_April_2018.png",
    description: `La Terre : globalement inoffensive`
  },
  {
    id: 4,
    name: "Mars",
    rank: 4,
    type: "Tellurique silicates",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg",
    description: `Mars est le dieu de la guerre.`
  },
  {
    id: 5,
    name: "Jupiter",
    rank: 5,
    type: "Jupiter froid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter.jpg/280px-Jupiter.jpg",
    description: `Jupiter, par Toutatis`
  },
  {
    id: 6,
    name: "Saturne",
    rank: 6,
    type: "Jupiter froid",
    image:
      "https://static.lexpress.fr/medias_11609/w_1183,h_1183,c_crop,x_0,y_0/w_600,h_600,c_fill,g_north/v1505322243/saturne-cassini-systeme-solaire-nasa-10_5943904.jpg",
    description: `Saturne a des anneaux`
  },
  {
    id: 7,
    name: "Uranus",
    rank: 7,
    type: "Neptune froid",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Uranus.jpg",
    description: `Dans ton c...onfort moderne, as-tu le temps d'observer Uranus?`
  },
  {
    id: 8,
    name: "Neptune",
    rank: 8,
    type: "Neptune froid",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg",
    description: `Neptune est un dieu romain`
  }
];
