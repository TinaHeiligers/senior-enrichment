import React from 'react';
import {Link} from 'react-router';

export default function Navbar (props) {


  return (
    <navbar>
      <section>
        <h4 className="menu-item">
          <Link to='/campuses'>HOME</Link>
        </h4>
      </section>
      {/*for now, I've added these links in the navbar to create a new campus and new Student directly from the navbar*/}
      <section>
        <h4 className="text-muted">NEW CAMPUS</h4>
          <Link className="btn btn-primary btn-block" to="/new-campus">
            <span className="glyphicon glyphicon-plus"></span> NEW CAMPUS
          </Link>
      </section>

      <section>
        <h4 className="menu-item">
          <Link to='/students'>STUDENTS</Link>
        </h4>
      </section>
      <hr />
      {/*for now, I've added these links in the navbar to create a new campus and new Student directly from the navbar*/}
      <section>
        <h4 className="text-muted">NEW STUDENT</h4>
          <Link className="btn btn-primary btn-block" to="/new-student">
            <span className="glyphicon glyphicon-plus"></span> NEW STUDENT
          </Link>
      </section>
      <hr />
    </navbar>
  );
}
