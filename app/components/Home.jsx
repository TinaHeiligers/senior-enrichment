import React from 'react';

export default function Home (props) {
  const students = props.students;
  const campuses = props.campuses;

  return (
    <div className="centered background">
      <div>
        <h2>Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript!</h2>
        <h3>Academy details:</h3>
        <div />
        <h4 className="fantasy">We currently have <span className="stats">{ campuses.length }</span> campuses accross the galaxy with
        <span className="stats"> { students.length }</span> students enrolled.</h4>
        <h4 className="fantasy">Have a look around at our campuses and our students</h4>
      </div>
    </div>
  );
}
