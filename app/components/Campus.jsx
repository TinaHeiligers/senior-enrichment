//Start with single campus view
import React from 'react';
import PropTypes from 'prop-types';
import StudentsContainer from '../containers/StudentsContainer';//will reuse this container but with a filtered list of students for just the current campus

export default function Campus (props, state) {
	//get data we need from props passed down by the CampusContainer
	//get a list of students for the CURRENT campus here
	//const students = props.students? make sure these are only students with the current campus as campusId!
	const campus = props.selectedCampus;
	const students = props.selectedCampusStudents;
	console.log("IN CAMPUS COMPONTENT: props.selectedCampusStudents", props.selectedCampusStudents);

	return (
        <div>
	        <div className="centered">
	        	<h3>{ campus.name }</h3>
	        	<img src={ campus.image } className="campus img-thumbnail"/>
	        	<p>STUDENTS</p>
	        	{students ? students.map(student => (
	        		<tr key={student.id}>
	        		<td>{student.firstName}</td>
	        		</tr>)) : `No students assigned to ${campus.name} yet.`
	        }
	    	</div>
        </div>
    );
}
