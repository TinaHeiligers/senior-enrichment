//Start with single student view
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

export default function Student (props, state) {
  //get data we need from props passed down by the CampusContainer
  const student = props.selectedStudent;

  return (
    <div>
      <div className="centered">
        <h2>Student Details: </h2>
      </div>
      <table className='table'>
        <tbody>
          <tr>
            <td>First Name:</td><td>{student.firstName}</td>
          </tr>
          <tr>
            <td>Last Name:</td><td>{student.lastName}</td>
          </tr>
          <tr>
            <td>Email:</td><td>{student.email}</td>
          </tr>
          <tr>
            <td>Campus:</td><td><Link to={`/campuses/${student.campusId}`}><td>{student.campus ? student.campus.name : 'None'}</td></Link></td>
          </tr>
        </tbody>
      </table>
      <Link to={`/students/${student.id}/edit`}>Edit</Link>
    </div>
  );
}
