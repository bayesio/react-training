import { combineReducers } from 'redux'
import HeroReducers from './Hero/Hero.reducers'

const reducers = {
  hero: HeroReducers
};

export default combineReducers(reducers);