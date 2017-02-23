import { LIST } from '../Hero.actions';

export default (state = [], action) => {
  switch (action.type) {
    case LIST:
      return Object.assign([], action.payload);
    default:
      return state;
  }
}