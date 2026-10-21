import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Inca from '../Inca';

export class HuaynaCapac extends Leader {
  static civilization(): typeof Civilization {
    return Inca;
  }

  name(): string {
    return 'Huayna Capac';
  }
}

export default HuaynaCapac;
