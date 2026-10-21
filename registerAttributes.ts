import Inca from './Inca';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Inca',
  nation: 'the Inca Empire',
  colors: ['#F2B705', '#6A1B9A'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Inca, name, value))
);
