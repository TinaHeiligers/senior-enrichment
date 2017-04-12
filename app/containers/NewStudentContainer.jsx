import React, { Component } from 'react';
import StudentForm from '../components/StudentForm';
import { addNewStudent } from '../action-creators/students'; //TODO: define the action creator to operate on a new campus action;
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    campuses: state.campuses.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //have two items to pass into adding a new campus: the name and the image
    addNewStudent (studentFirstName, studentLastName, studentEmail, studentCampus) {
      dispatch(addNewStudent(studentFirstName, studentLastName, studentEmail, studentCampus));//dispatching the action to add a new campus
    }
  };
};

class NewStudentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      campusId: '',
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
    this.props.addNewStudent(this.state.firstName, this.state.lastName, this.state.email, this.state.campusId);//submit new items to props
    //resetting the form fields after submission
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      campusId: '',
      dirty: false
    });
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
      <NewStudent
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
        formTitle="Add Student"
      />
    );
  }
}

export default connect(
  mapStateToProps,//no mapping state to props
  mapDispatchToProps
)(NewStudentContainer);//this is wrong, I need to dispatch these to the component, not the container! I do, however, need to export the container.
