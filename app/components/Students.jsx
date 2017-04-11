import React from 'react';
import {Link} from 'react-router';

export default function Students (props, state) {
  const students = props.students;
  const deleteOne = props.deleteOne;
  return(
       <table className='table'>
         <thead>
          <tr>
            <th><h3>FirstName</h3></th>
            <th><h3>LastName</h3></th>
            <th><h3>Campus</h3></th>
            <th></th>
          </tr>
         </thead>
         <tbody>
          {students && students.map(student => (
            <tr key={student.id}>
              <td>{ student.firstName }</td>
              <td>{ student.lastName }</td>
            {/*consider when to use a selective campusId to render a list of students for the current campus if this is rendered out as a child component via the current campus view.*/}
              <td><span>{ student.campusId ? student.campus.name : null }</span></td>
              <td>
                <Link className="btn btn-info" to={`/students/${student.id}`}>View</Link>
                <button className="btn btn-danger" onClick={() => deleteOne(student.id)}>Delete</button>
              </td>
            </tr>

         ))}
         </tbody>
       </table>
   );
};
