import { connect } from 'react-redux';
import { selectHero, addHero } from '../Hero.actions';

import Edit from './Edit.presenter';

export default connect(_mapStateToProps, _mapDispatchToProps)(Edit);

function _mapStateToProps(state) {
  return { hero: state.hero.selected };
}

function _mapDispatchToProps(dispatch) {
  return {
    addHero: (newHero) => dispatch(addHero(newHero)),
    selectHero: (id) => dispatch(selectHero(id))
  };
}