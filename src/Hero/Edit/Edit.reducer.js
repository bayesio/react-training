import { defaultHero, SELECT } from '../Hero.actions';

export default (state = defaultHero(), action) => {
  switch (action.type) {
    case SELECT:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}