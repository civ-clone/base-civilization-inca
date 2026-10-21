"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Inca_1 = require("./Inca");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Inca',
    nation: 'the Inca Empire',
    colors: ['#F2B705', '#6A1B9A'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Inca_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map