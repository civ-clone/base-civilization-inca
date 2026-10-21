"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pachacuti = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Inca_1 = require("../Inca");
class Pachacuti extends Leader_1.default {
    static civilization() {
        return Inca_1.default;
    }
    name() {
        return 'Pachacuti';
    }
}
exports.Pachacuti = Pachacuti;
exports.default = Pachacuti;
//# sourceMappingURL=Pachacuti.js.map