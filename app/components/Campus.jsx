//Start with single campus view
import React from 'react';
import PropTypes from 'prop-types';
import StudentsContainer from '../containers/StudentsContainer';//will reuse this container but with a filtered list of students for just the current campus

export default function Campus (props) {
	//get data we need from props passed down by the CampusContainer
	const campusName = props.campusName;
	const students = props.students;
	return (
        <div>
        	<h3>{ campusName } Campus</h3>
        	<StudentsContainer students={students} />
        </div>
    );
}
