import { SELECT, LIST } from './Hero.actions';

const initialState = {
  list: [],
  selected: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST:
      return {...state, list: action.payload};
    case SELECT:
      return {...state, selected: action.payload};
    default:
      return state;
  }
}