import { IHeroState } from './hero.constants';

export interface IPayloadAction<T> {
  type: string;
  payload: T;
}

export interface IStoreState {
  hero: IHeroState;
}
