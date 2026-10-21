import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Inca from '../Inca';

export class Pachacuti extends Leader {
  static civilization(): typeof Civilization {
    return Inca;
  }

  name(): string {
    return 'Pachacuti';
  }
}

export default Pachacuti;
