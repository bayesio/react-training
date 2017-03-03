import { defaultHero, IHeroState } from './hero.constants';

export const hero: IHeroState = {
  list: [],
  selected: defaultHero(),
};
