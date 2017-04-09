import React from 'react';
import {Link} from 'react-router';

//navbar is simply for navigation, it does not receive any props
export default function Navbar () {

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">MHIAJ</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to='/campuses'>HOME</Link></li>
          <li><Link to='/students'>STUDENTS</Link></li>
          <li>
            <Link className="btn btn-primary" to="/new-campus">
            <span className="glyphicon glyphicon-plus"></span> NEW CAMPUS
          </Link>
          </li>
          <li>
            <Link className="btn btn-primary" to="/new-student">
              <span className="glyphicon glyphicon-plus"></span> NEW STUDENT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


