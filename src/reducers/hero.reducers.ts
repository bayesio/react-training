import { IPayloadAction } from '../constants/common.constants';
import { IHeroState, LIST, SELECT } from '../constants/hero.constants';
import { hero } from '../constants/initialStoreState';

export default function heroReducer(state: IHeroState = hero, action: IPayloadAction<any>): IHeroState {
  switch (action.type) {
    case LIST:
      return { ...state, list: action.payload };
    case SELECT:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
