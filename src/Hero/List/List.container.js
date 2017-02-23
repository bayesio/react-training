import React from 'react';

import { connect } from 'react-redux';

import { listHeroes } from '../Hero.actions';

import List from './List.presenter';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(listHeroes());
  }

  render() {
    return (<List heroes={this.props.heroes} />);
  }
}

export default connect(state => ({ heroes: state.heroes }))(ListContainer);
