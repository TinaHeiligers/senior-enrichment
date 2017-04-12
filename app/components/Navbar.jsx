import React from 'react';
import {Link} from 'react-router';

//navbar is simply for navigation, it does not receive any props
export default function Navbar () {

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to='/home'>MHIAJ</Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to='/campuses'>CAMPUSES</Link></li>
          <li><Link to='/students'>STUDENTS</Link></li>
        </ul>
      </div>
    </nav>
  );
}


