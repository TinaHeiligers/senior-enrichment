import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampusAddStudent from '../components/CampusAddStudent';
import { addStudentToCampus } from '../action-creators/campuses';


const mapStateToProps = (state) => {
  return {
    campus: state.campuses.selected,
    students: state.students.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent (studentId) {
      dispatch(addStudentToCampus(studentId));
    }
  };
};

class CampusAddStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: '' //all I need is the student id from the drop-down list to pass into the action creator
    };

    this.handleStudentChange = this.handleStudentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStudentChange (evt) {
    evt.preventDefault();
    let studentValue = evt.target.value; //target from the selected student in the dropdown list
    this.setState({
      studentId: studentValue
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();//preventing bubling up
    this.props.addStudent(this.state.studentId); //submit new items to props
  }

  render () {
    let studentId = this.state.studentId;
    let campus = this.props.campus;
    let students = this.props.students;

    return (
      <CampusAddStudent
        handleStudentChange={this.handleStudentChange}
        handleSubmit={this.handleSubmit}
        studentId={studentId}
        campus={campus}
        students={students}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusAddStudentContainer);
