import * as React from 'react';
import { Link } from 'react-router';
import NavLink from '../NavLink';

import './Layout.css';

export default class Layout extends React.Component<any, undefined> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const footerSmall = "navbar-text navbar-center visible-xs visible-sm col-xs-12 text-center";
    const footerBig = "navbar-text navbar-center hidden-xs hidden-sm col-xs-12 text-center";
    return (
      <div>
        <header>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <Link to="/" className="navbar-brand" activeClassName="active"><img src="/assets/SHIELD-Logo.png"
                className="brand-logo" /></Link>
              <ul className="nav navbar-nav">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/heroes">Heroes</NavLink>
              </ul>
            </div>
          </nav>
        </header>
        <section className="container-fluid">
          <div className="container starter-template">
            {this.props.children}
          </div>
        </section>
        <footer>
          <div className="navbar navbar-fixed-bottom navbar-inverse">
            <div className="container">
              <p className={footerSmall}>© 2017 S.H.I.E.L.D.</p>
              <p className={footerBig}>© 2017 Strategic Homeland Intervention Enforcement and Logistics Division</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
