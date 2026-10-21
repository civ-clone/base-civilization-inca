"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Inca_1 = require("./Inca");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Inca',
    nation: 'the Inca Empire',
    colors: ['#D84315', '#FDD835'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Inca_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map