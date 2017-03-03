import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { listHeroes } from '../../../actions/hero.actions';
import * as heroApi from '../../../api/hero.api';
import { IStoreState } from '../../../constants/common.constants';

import Heroes from './Heroes.presenter';

export default connect(_mapStateToProps, _mapDispatchToProps)(Heroes);

function _mapStateToProps(state: IStoreState) {
  return { heroes: state.hero.list };
}

function _mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    listHeroes: () => heroApi.getHeroes().then((data) => dispatch(listHeroes(data))),
  };
}
