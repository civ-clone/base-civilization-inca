"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuaynaCapac = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Inca_1 = require("../Inca");
class HuaynaCapac extends Leader_1.default {
    static civilization() {
        return Inca_1.default;
    }
    name() {
        return 'Huayna Capac';
    }
}
exports.HuaynaCapac = HuaynaCapac;
exports.default = HuaynaCapac;
//# sourceMappingURL=HuaynaCapac.js.map