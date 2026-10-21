import Inca from './Inca';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
  [
    'Cusco',
    'Machu Picchu',
    'Ollantaytambo',
    'Pisac',
    'Vilcabamba',
    'Quito',
    'Cajamarca',
    'Tumbes',
    'Huanuco Pampa',
    'Pachacamac',
    'Tiwanaku',
    'Jauja',
    'Vilcashuaman',
    'Choquequirao',
    'Tomebamba',
    'Huamachuco',
    'Chan Chan',
    'Copacabana',
    'Paucartambo',
    'Andahuaylas',
    'Ingapirca',
    'Incallajta',
    'Samaipata',
    'Arequipa',
    'Nazca',
    'Chinchero',
    'Limatambo',
    'Vitcos',
    'Hatun Colla',
    'Tarmatambo',
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Inca, i === 0))
);
