import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props, { signedAccords: props.signedAccords === "Yes" ? "true" : "false" });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newState = {
      uuid: this.refs.uuid.value,
      realName: this.refs.real.value,
      heroName: this.refs.hero.value,
      powers: this.refs.powers.value,
      s3ImageUrl: this.refs.image.value,
      signedAccords: this.refs.signed.value,

      abilities: {
        'fighting skills': this.refs.skill_fight.value,
        'strength': this.refs.skill_str.value,
        'durability': this.refs.skill_dur.value,
        'energy projection': this.refs.skill_energy.value,
        'speed': this.refs.skill_speed.value,
        'intelligence': this.refs.skill_intel.value
      }
    };

    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();

    let userToUpdate;

    userToUpdate = this.state;

    this.props.addHero(userToUpdate);
  }

  render() {
    return (<section>
      <h2>Hero Details</h2>
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" value={this.state.uuid} onChange={this.handleChange} ref="uuid" />
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
          <input type="checkbox" value={this.state.signedAccords} onChange={this.handleChange} ref="signed" id="signed" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="skill_fight">Fight</label>
          <input type="range" min="0" max="10" value={this.state.abilities['fighting skills']} onChange={this.handleChange} ref="skill_fight" id="skill_fight" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="skill_str">Strength</label>
          <input type="range" min="0" max="10" value={this.state.abilities['strength']} onChange={this.handleChange} ref="skill_str" id="skill_str" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="skill_dur">Durability</label>
          <input type="range" min="0" max="10" value={this.state.abilities['durability']} onChange={this.handleChange} ref="skill_dur" id="skill_dur" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="skill_energy">Energy Projection</label>
          <input type="range" min="0" max="10" value={this.state.abilities['energy projection']} onChange={this.handleChange} ref="skill_energy" id="skill_energy" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="skill_speed">Speed</label>
          <input type="range" min="0" max="10" value={this.state.abilities['speed']} onChange={this.handleChange} ref="skill_speed" id="skill_speed" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="skill_intel">Intelligence</label>
          <input type="range" min="0" max="10" value={this.state.abilities['intelligence']} onChange={this.handleChange} ref="skill_intel" id="skill_intel" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>);
  }
}
