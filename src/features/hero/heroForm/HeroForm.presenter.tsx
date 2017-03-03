import * as React from 'react';
import { defaultHero, IHero } from '../../../constants/hero.constants';

export interface IHeroFormProps {
  hero: IHero;
  params: { id: string };
  router: { push(url: string): void; };
  selectHero(id: string | null): Promise<any>;
  addHero(newHero: IHero): Promise<any>;
}

export default class extends React.Component<IHeroFormProps, IHero> {
  constructor(props: IHeroFormProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = defaultHero();
  }

  componentDidMount() {
    const { selectHero, params } = this.props;

    selectHero(params.id)
      .then((response) => this.setState(this.props.hero));
  }

  render() {
    return (
      <section>
        <h2>Hero Details</h2>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="hero">Hero Name</label>
              <input type="text" value={this.state.heroName} onChange={this.handleChange} id="hero"
                className="form-control" placeholder="Enter hero alias" />
            </div>
            <div className="form-group">
              <label htmlFor="real">Real Name</label>
              <input type="text" value={this.state.realName} onChange={this.handleChange} id="real"
                className="form-control" placeholder="Enter real name" />
            </div>
            <div className="form-group">
              <label htmlFor="powers">Powers</label>
              <textarea value={this.state.powers} onChange={this.handleChange} id="powers" rows={3}
                className="form-control" placeholder="Any special powers?" />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input type="url" value={this.state.s3ImageUrl} onChange={this.handleChange} id="image"
                className="form-control" placeholder="Enter url of hero image" />
            </div>
            <div className="form-group">
              <label htmlFor="signed">Signed Accords</label>
              <select value={this.state.signedAccords} onChange={this.handleChange} id="signed"
                className="form-control">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <div className="row">
                <label htmlFor="skill_fight" className="col-md-4 text-right">Fighting Skills</label>
                <span className="col-md-1">{this.state.abilities.fightingSkills}</span>
              </div>
              <input type="range" min="0" max="7" value={this.state.abilities.fightingSkills}
                onChange={this.handleChange} id="skill_fight" className="form-control" />
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="skill_str" className="col-md-4 text-right">Strength</label>
                <span className="col-md-1">{this.state.abilities.strength}</span>
              </div>
              <input type="range" min="0" max="7" value={this.state.abilities.strength} onChange={this.handleChange}
                id="skill_str" className="form-control" />
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="skill_dur" className="col-md-4 text-right">Durability</label>
                <span className="col-md-1">{this.state.abilities.durability}</span>
              </div>
              <input type="range" min="0" max="7" value={this.state.abilities.durability} onChange={this.handleChange}
                id="skill_dur" className="form-control" />
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="skill_energy" className="col-md-4 text-right">Energy Projection</label>
                <span className="col-md-1">{this.state.abilities.energyProjection}</span>
              </div>
              <input type="range" min="0" max="7" value={this.state.abilities.energyProjection}
                onChange={this.handleChange} id="skill_energy" className="form-control" />
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="skill_speed" className="col-md-4 text-right">Speed</label>
                <span className="col-md-1">{this.state.abilities.speed}</span>
              </div>
              <input type="range" min="0" max="7" value={this.state.abilities.speed} onChange={this.handleChange}
                id="skill_speed" className="form-control" />
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="skill_intel" className="col-md-4 text-right">Intelligence</label>
                <span className="col-md-1">{this.state.abilities.intelligence}</span>
              </div>
              <input type="range" min="0" max="7" value={this.state.abilities.intelligence} onChange={this.handleChange}
                id="skill_intel" className="form-control" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary col-md-offset-10 col-md-2">Submit</button>
        </form>
      </section>
    );
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    // const newState = {
    //   uuid: this.props.params.id,
    //   realName: this.refs.real.value,
    //   heroName: this.refs.hero.value,
    //   powers: this.refs.powers.value,
    //   s3ImageUrl: this.refs.image.value,
    //   signedAccords: this.refs.signed.value,

    //   abilities: {
    //     fightingSkills: this.refs.skill_fight.value,
    //     strength: this.refs.skill_str.value,
    //     durability: this.refs.skill_dur.value,
    //     energyProjection: this.refs.skill_energy.value,
    //     speed: this.refs.skill_speed.value,
    //     intelligence: this.refs.skill_intel.value
    //   }
    // };

    // this.setState(newState);
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const { addHero, router } = this.props;
    event.preventDefault();

    addHero(this.state)
      .then((response) => router.push('/heroes'));
  }
}
