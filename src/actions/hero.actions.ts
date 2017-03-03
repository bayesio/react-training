import { IPayloadAction } from '../constants/common.constants';
import { IHero, LIST, SELECT } from '../constants/hero.constants';

export function selectHero(payload: IHero): IPayloadAction<IHero> {
  return { type: SELECT, payload };
}

export function listHeroes(payload: IHero[]): IPayloadAction<IHero[]> {
  return { type: LIST, payload };
}
