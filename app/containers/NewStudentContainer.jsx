import React, { Component } from 'react';
import NewStudent from '../components/NewStudent';
import { addNewStudent } from '../action-creators/students'; //TODO: define the action creator to operate on a new campus action;
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    //have two items to pass into adding a new campus: the name and the image
    addNewStudent (studentFirstName, studentLastName, studentEmail) {
      dispatch(addNewStudent(studentFirstName, studentLastName, studentEmail));//dispatching the action to add a new campus
    }
  };
};

class NewStudentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange (evt) {
    evt.preventDefault();
    let firstNameValue = evt.target.value
    this.setState({
      firstName: firstNameValue
    });
  }

  handleLastNameChange (evt) {
  evt.preventDefault();
  let lastNameValue = evt.target.value
  this.setState({
    lastName: lastNameValue
  });
}

  handleEmailChange (evt) {
    evt.preventDefault();
    let emailValue = evt.target.value
    this.setState({
      email: emailValue
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();//preventing bubling up
    this.props.addNewStudent(this.state.firstName, this.state.lastName, this.state.email);//submit new items to props
    //resetting the form fields after submission
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  render () {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;


    return (
      <NewStudent
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleEmailChange={this.handleEmailChange}
        handleSubmit={this.handleSubmit}
        firstName={firstName}
        lastName={lastName}
        email={email}
      />
    );
  }
}

export default connect(
  null,//no mapping state to props
  mapDispatchToProps
)(NewStudentContainer);
