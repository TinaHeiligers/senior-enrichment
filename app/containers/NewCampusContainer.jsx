import React, { Component } from 'react';
import NewCampus from '../components/NewCampus';
import { addNewCampus } from '../action-creators/campuses'; //TODO: define the action creator to operate on a new campus action;
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    //have two items to pass into adding a new campus: the name and the image
    addNewCampus (campusName, campusImage) {
      dispatch(addNewCampus(campusName, campusImage));//dispatching the action to add a new campus
    }
  };
};

class NewCampusContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange (evt) {
    evt.preventDefault();
    let nameValue = evt.target.value
    this.setState({
      name: nameValue
    });
  }

  handleImageChange (evt) {
    evt.preventDefault();
    let imageValue = evt.target.value
    this.setState({
      image: imageValue
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();//preventing bubling up
    console.log('***********name*******', this.state.name)
    console.log('***********image*******', this.state.image)
    this.props.addNewCampus(this.state.name, this.state.image);//submit new items to props
    //resetting the form fields after submission
    this.setState({
      name: '',
      image: ''
    });
  }

  render () {
    let image = this.state.image;
    let name = this.state.name;

    return (
      <NewCampus
        handleNameChange={this.handleNameChange}
        handleImageChange={this.handleImageChange}
        handleSubmit={this.handleSubmit}
        name={name}
        image={image}
      />
    );
  }
}

export default connect(
  null,//no mapping state to props
  mapDispatchToProps
)(NewCampusContainer);
