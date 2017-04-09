import React from 'react';

export default function Students (props) {
	const students = props.students;
	//somehow I need to include the campus for each student here but this should come from the axios request and should be accessible via student.campus.name if there is a campusId for the student
	return(
       <table className='table'>
	       <thead>
	       	<tr>
	       		<th><h4>FirstName</h4></th>
	       		<th><h4>LastName</h4></th>
	       		<th><h4>Campus</h4></th>
	       	</tr>
	       </thead>
	       <tbody>
	       	{students && students.map(student => (
	       		<tr key={student.id}>
		       		<td>{ student.firstName }</td>
		       		<td>{ student.lastName }</td>
		       		<td><span>{ student.campusId ? student.campus.name : null }</span></td>
		       	</tr>
		       	))
	       }
	       </tbody>
       </table>
   );
};
