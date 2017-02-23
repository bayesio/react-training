import React from 'react'

import { connect } from 'react-redux';
import { selectHero, addHero } from '../Hero.actions';

import Edit from './Edit.presenter';

class EditContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addHero = this.addHero.bind(this);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;

    dispatch(selectHero(params.id));
  }

  addHero(newHero) {
    const { dispatch, router} = this.props;

    dispatch(addHero(newHero, router));
  }

  render() {
    return (<Edit hero={this.props.hero} params={this.props.params} addHero={this.addHero} />);
  }
}

export default connect(state => ({ hero: state.hero }))(EditContainer);
