import { combineReducers, ReducersMapObject } from 'redux';
import heroReducers from './hero.reducers';

const reducers = {
  hero: heroReducers,
};

export default combineReducers(reducers);
