import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import { connect } from 'react-redux'

const Navbar = ({ logout, isAuthenticated }) => {

  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated) 

  const guestLinks = () => (
    <Fragment>
       <li className="nav-item">
          <Link className="nav-link btn btn-warning" to="/login">Login</Link>
       </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-warning" to="/signup">Sign up</Link>
        </li>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <li className="nav-item">
          <a className="nav-link btn btn-warning" href={`/shelter/${localStorage.getItem('userId')}`}>My Shelter</a>
      </li>
      <li className="nav-item">
          <a className="nav-link btn btn-warning" href="/" onClick={logout}>Logout</a>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src='../images/logo.png' className="img-fluid logo" alt="logo"></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStatetoProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStatetoProps, { logout })(Navbar);
