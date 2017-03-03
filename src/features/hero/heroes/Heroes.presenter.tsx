import * as React from 'react';
import { Link } from 'react-router';
import { IHero } from '../../../constants/hero.constants';

import './Heroes.css';

interface IHeroesProps {
  heroes: IHero[];
  listHeroes(): Promise<any>;
}

export default class HeroList extends React.Component<IHeroesProps, void> {
  constructor(props: IHeroesProps) {
    super(props);
  }

  componentDidMount() {
    const { listHeroes } = this.props;
    listHeroes();
  }

  render() {
    return (
      <section>
        <div className="row">
          <h2 className="col-md-2">Heroes</h2>
        </div>
        <div className="row">
          <Link to="/hero/" className="btn btn-xs btn-success col-md-2">
            <span className="glyphicon glyphicon-plus" aria-hidden="true" />
            &nbsp;Add
          </Link>
        </div>
        <br />
        <div className="row">
          {this.props.heroes.map((p) => (<Hero key={p.uuid} {...p} />))}
        </div>
      </section>
    );
  }
}

const Hero = ({uuid, heroName, s3ImageUrl}: IHero) => (
  <div className="col-xs-3">
    <Link to={`/hero/${uuid}`}>
      <h4>{heroName}</h4>
      <img src={s3ImageUrl} className="img-responsive hero-img" />
    </Link>
  </div>);
