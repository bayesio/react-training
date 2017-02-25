import { connect } from 'react-redux';
import { listHeroes } from '../Hero.actions';
import List from './List.presenter';

export default connect(_mapStateToProps, _mapDispatchToProps)(List);

function _mapStateToProps(state) {
  return { heroes: state.hero.list };
}

function _mapDispatchToProps(dispatch) {
  return { listHeroes: () => dispatch(listHeroes()) };
}