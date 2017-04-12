import React from 'react';
import {Link} from 'react-router';

export default function Students(props) {
  const students = props.students;
  const deleteOne = props.deleteOne;

  return (
   <table className="table">
      <thead>
        <tr>
          <th><h3>FirstName</h3></th>
          <th><h3>LastName</h3></th>
          <th><h3>Campus</h3></th>
          <th>
            <Link className="btn btn-success add-new" to="/new-student">
              <span className="glyphicon glyphicon-plus" /> New Student
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          students && students.map(student => (
            <tr key={student.id}>
              <td>{ student.firstName }</td>
              <td>{ student.lastName }</td>
              <td><span>{ student.campusId ? student.campus.name : null }</span></td>
              <td>
                <Link className="btn btn-info" to={`/students/${student.id}`}>View</Link>
                <button className="btn btn-danger" onClick={() => deleteOne(student.id)}>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>
   </table>
 );
}
