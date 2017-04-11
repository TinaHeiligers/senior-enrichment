//Start with single campus view
import React from 'react';
import PropTypes from 'prop-types';
import StudentsContainer from '../containers/StudentsContainer';//will reuse this container but with a filtered list of students for just the current campus
import { Link } from 'react-router';

export default function Campus (props, state) {
  //get data we need from props passed down by the CampusContainer
  //get a list of students for the CURRENT campus here
  const campus = props.selectedCampus;
  const students = props.selectedCampusStudents;
  const remove = props.removeOne;

  return (
    <div>
      <div className="centered">
        <h2>{ campus.name }</h2>
        <h4>{`Number of Students: ${students.length}`}</h4>
        <img src={ campus.image } className="campus img-thumbnail"/>
      </div>
      <Link to={`/campuses/${campus.id}/students/add`}>Add A Student:</Link>
      <h2>Students:</h2>
      <table className='table'>{/* TODO: render the table conditionally if there are students for a campus*/}
        <thead>
          <tr>
            <th><h3>First Name</h3></th>
            <th><h3>Last Name</h3></th>
          </tr>
        </thead>
        <tbody>
          {students ? students.map(student => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td><Link to={`/students/${student.id}`}>View</Link></td>
              <td>
                <button className="btn btn-danger" onClick={() => remove(student, students)}>
                <span>Remove</span></button>
              </td>
            </tr>)) : `No students assigned to ${campus.name} yet.`

          }
        </tbody>
      </table>
    </div>
  );
}
