import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { selectHero } from '../../../actions/hero.actions';
import * as heroApi from '../../../api/hero.api';
import { IStoreState } from '../../../constants/common.constants';
import { defaultHero, IHero } from '../../../constants/hero.constants';
import HeroForm from './HeroForm.presenter';

export default connect(_mapStateToProps, _mapDispatchToProps)(HeroForm);

function _mapStateToProps(state: IStoreState) {
  return { hero: state.hero.selected };
}

function _mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    addHero: (newHero: IHero) => heroApi.addHero(newHero),
    selectHero: (id: string | null) => _selectHero(id, dispatch),
  };
}

function _selectHero(id: string | null = null, dispatch: Dispatch<any>) {
  if (!id) {
    dispatch(selectHero(defaultHero()));
    return;
  }

  heroApi.getHeroes()
    .then((heroes) => dispatch(selectHero(heroes.filter((h) => h.uuid === id)[0])));
}
