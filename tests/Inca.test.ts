import { Pachacuti, HuaynaCapac } from '../Leaders';
import Inca from '../Inca';
import Leader from '@civ-clone/core-civilization/Leader';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import '../index';

describe('Inca', (): void => {
  it('has its people, nation and colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Inca)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Inca');
    expect(attributes.nation).to.equal('the Inca Empire');
    // The first fills a unit's shield and a city's square; the second is the shield's edge and the city.
    expect(attributes.colors).to.eql(['#D84315', '#FDD835']);
  });

  it('has city names, all different, with its capital first', (): void => {
    const cityNames = cityNameRegistryInstance
      .entries()
      .filter((cityName) => cityName.civilization() === Inca);

    expect(cityNames.length).to.be.at.least(20);
    expect(new Set(cityNames.map((cityName) => cityName.name())).size).to.equal(
      cityNames.length
    );
    expect(
      cityNames
        .filter((cityName) => cityName.capital())
        .map((cityName) => cityName.name())
    ).to.eql(['Cusco']);
  });

  it('has its leaders', (): void => {
    (
      [
        [Pachacuti, 'Pachacuti'],
        [HuaynaCapac, 'Huayna Capac'],
      ] as [typeof Leader, string][]
    ).forEach(([LeaderType, name]) => {
      expect(LeaderType.civilization()).to.equal(Inca);
      expect(new LeaderType().name()).to.equal(name);
    });
  });
});
