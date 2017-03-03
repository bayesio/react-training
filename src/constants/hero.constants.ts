export const LIST = 'LIST_HERO';
export const SELECT = 'SELECT_HERO';

export function defaultHero(): IHero {
  return {
    'abilities': {
      durability: 0,
      energyProjection: 0,
      fightingSkills: 0,
      intelligence: 0,
      speed: 0,
      strength: 0,
    },
    'groups': [],
    'heroName': '',
    'powers': '',
    'realName': '',
    's3ImageUrl': '',
    'signedAccords': '',
    'uuid': '',
  };
}

export interface IHeroAbilities {
  durability: number;
  energyProjection: number;
  fightingSkills: number;
  intelligence: number;
  speed: number;
  strength: number;
}

export interface IHero {
  abilities: IHeroAbilities;
  groups: any[];
  heroName: string;
  powers: string;
  realName: string;
  s3ImageUrl: string;
  signedAccords: string;
  uuid: string;
}

export interface IHeroState {
  list: IHero[];
  selected: IHero;
}
