import React from 'react';
import './Loader.style.css';

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    );
  }
}