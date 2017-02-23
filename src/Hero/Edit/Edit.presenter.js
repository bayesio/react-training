import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.getNewState = this.getNewState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = this.getNewState(props);
  }

  getNewState(props) {
    return Object.assign({}, props.hero);
  }

  handleChange(event) {
    const newState = {
      uuid: this.props.params.id,
      realName: this.refs.real.value,
      heroName: this.refs.hero.value,
      powers: this.refs.powers.value,
      s3ImageUrl: this.refs.image.value,
      signedAccords: this.refs.signed.value,

      abilities: {
        fightingSkills: this.refs.skill_fight.value,
        strength: this.refs.skill_str.value,
        durability: this.refs.skill_dur.value,
        energyProjection: this.refs.skill_energy.value,
        speed: this.refs.skill_speed.value,
        intelligence: this.refs.skill_intel.value
      }
    };

    this.setState(newState);
  }

  handleSubmit(event) {
    const {addHero} = this.props;
    event.preventDefault();

    addHero(this.state);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getNewState(nextProps));
  }

  render() {
    return (<section>
      <h2>Hero Details</h2>
      <form onSubmit={this.handleSubmit} className="form">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="hero">Hero Name</label>
            <input type="text" value={this.state.heroName} onChange={this.handleChange} ref="hero" id="hero" className="form-control" placeholder="Enter hero alias" />
          </div>
          <div className="form-group">
            <label htmlFor="real">Real Name</label>
            <input type="text" value={this.state.realName} onChange={this.handleChange} ref="real" id="real" className="form-control" placeholder="Enter real name" />
          </div>
          <div className="form-group">
            <label htmlFor="powers">Powers</label>
            <textarea value={this.state.powers} onChange={this.handleChange} id="powers" rows="3" ref="powers" className="form-control" placeholder="Any special powers?" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="url" value={this.state.s3ImageUrl} onChange={this.handleChange} ref="image" id="image" className="form-control" placeholder="Enter url of hero image" />
          </div>
          <div className="form-group">
            <label htmlFor="signed">Signed Accords</label>
            <select value={this.state.signedAccords} onChange={this.handleChange} ref="signed" id="signed" className="form-control">
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
            <input type="range" min="0" max="7" value={this.state.abilities.fightingSkills} onChange={this.handleChange} ref="skill_fight" id="skill_fight" className="form-control" />
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="skill_str" className="col-md-4 text-right">Strength</label>
              <span className="col-md-1">{this.state.abilities.strength}</span>
            </div>
            <input type="range" min="0" max="7" value={this.state.abilities.strength} onChange={this.handleChange} ref="skill_str" id="skill_str" className="form-control" />
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="skill_dur" className="col-md-4 text-right">Durability</label>
              <span className="col-md-1">{this.state.abilities.durability}</span>
            </div>
            <input type="range" min="0" max="7" value={this.state.abilities.durability} onChange={this.handleChange} ref="skill_dur" id="skill_dur" className="form-control" />
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="skill_energy" className="col-md-4 text-right">Energy Projection</label>
              <span className="col-md-1">{this.state.abilities.energyProjection}</span>
            </div>
            <input type="range" min="0" max="7" value={this.state.abilities.energyProjection} onChange={this.handleChange} ref="skill_energy" id="skill_energy" className="form-control" />
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="skill_speed" className="col-md-4 text-right">Speed</label>
              <span className="col-md-1">{this.state.abilities.speed}</span>
            </div>
            <input type="range" min="0" max="7" value={this.state.abilities.speed} onChange={this.handleChange} ref="skill_speed" id="skill_speed" className="form-control" />
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="skill_intel" className="col-md-4 text-right">Intelligence</label>
              <span className="col-md-1">{this.state.abilities.intelligence}</span>
            </div>
            <input type="range" min="0" max="7" value={this.state.abilities.intelligence} onChange={this.handleChange} ref="skill_intel" id="skill_intel" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary col-md-offset-10 col-md-2">Submit</button>
      </form>
    </section>);
  }
}
