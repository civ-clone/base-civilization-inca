import Inca from './Inca';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Inca',
  nation: 'the Inca Empire',
  colors: ['#D84315', '#FDD835'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Inca, name, value))
);
