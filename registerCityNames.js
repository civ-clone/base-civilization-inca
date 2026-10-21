"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Inca_1 = require("./Inca");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
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
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Inca_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map