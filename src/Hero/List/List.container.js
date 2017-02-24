import { connect } from 'react-redux';
import { listHeroes } from '../Hero.actions';
import List from './List.presenter';

const mapStateToProps = state => {
  return { heroes: state.hero.list };
};
const mapDispatchToProps = dispatch => {
  return { listHeroes: () => dispatch(listHeroes()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
