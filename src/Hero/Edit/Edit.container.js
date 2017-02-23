import React from 'react'

import { connect } from 'react-redux';
import { selectHero, addHero } from '../Hero.actions';

import Edit from './Edit.presenter';

const stateMapper = state => { 
  return { hero: state.hero };
};
const dispatchProperties = dispatch => {
  return {
    addHero: (newHero) => dispatch(addHero(newHero)),
    selectHero: (id) => dispatch(selectHero(id))
  };
};

export default connect(stateMapper, dispatchProperties)(Edit);
