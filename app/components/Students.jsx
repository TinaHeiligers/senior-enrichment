import React from 'react';

export default function Students (props) {
	const students = props.students;
	//somehow I need to include the campus for each student here but this should come from the axios request and should be accessible via student.campus.name if there is a campusId for the student
	//I need conditional rendering out here for when to show all students for all campuses and when to render out students for only a single campus
	return(
       <table className='table'>
	       <thead>
	       	<tr>
	       		<th><h3>FirstName</h3></th>
	       		<th><h3>LastName</h3></th>
	       		<th><h3>Campus</h3></th>
	       	</tr>
	       </thead>
	       <tbody>
	       	{students && students.map(student => (
	       		<tr key={student.id}>
		       		<td>{ student.firstName }</td>
		       		<td>{ student.lastName }</td>
		       	{/*consider when to use a selective campusId to render a list of students for the current campus if this is rendered out as a child component via the current campus view.*/}
		       		<td><span>{ student.campusId ? student.campus.name : null }</span></td>
		       	</tr>
		       	))
	       }
	       </tbody>
       </table>
   );
};
