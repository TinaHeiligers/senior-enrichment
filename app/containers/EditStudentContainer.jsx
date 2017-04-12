import React, { Component } from 'react';
import StudentForm from '../components/StudentForm';
import { editStudent } from '../action-creators/students';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    student: state.students.selected,
    campuses: state.campuses.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editOne (studentFirstName, studentLastName, studentEmail, studentCampus) {
      dispatch(editStudent(studentFirstName, studentLastName, studentEmail, studentCampus))
    }
  };
};

class EditStudentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: props.student.firstName,
      lastName: props.student.lastName,
      email: props.student.email,
      campusId: props.student.campusId,
      dirty: false
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange (evt) {
    evt.preventDefault();
    let firstNameValue = evt.target.value
    this.setState({
      firstName: firstNameValue,
      dirty: true
    });
  }

  handleLastNameChange (evt) {
  evt.preventDefault();
  let lastNameValue = evt.target.value
  this.setState({
    lastName: lastNameValue,
    dirty: true
  });
}

  handleEmailChange (evt) {
    evt.preventDefault();
    let emailValue = evt.target.value
    this.setState({
      email: emailValue,
      dirty: true
    });
  }

  handleCampusChange (evt) {
    evt.preventDefault();
    let campusValue = evt.target.value
    this.setState({
      campusId: campusValue
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();//preventing bubling up
    this.props.editOne(this.state.firstName, this.state.lastName, this.state.email, this.state.campusId);//submit new items to props
  }

  render () {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;
    let campuses = this.props.campuses;
    let campusId = this.state.campusId;
    const dirty = this.state.dirty;
    let warning = '';

    if (!firstName && !lastName && !email && dirty) warning = 'You must enter details for a student';
    else if (firstName.length > 16 ) warning = 'The student\'s first name is too long (limit: 16 characters)';
    else if (lastName.length > 16 ) warning = 'The student\'s last name is too long (limit: 16 characters)';

    return (
      <StudentForm
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleEmailChange={this.handleEmailChange}
        handleCampusChange={this.handleCampusChange}
        handleSubmit={this.handleSubmit}
        firstName={firstName}
        lastName={lastName}
        email={email}
        campusId={campusId}
        campuses={campuses}
        warning={warning}
        formTitle="Edit Student"
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudentContainer);
