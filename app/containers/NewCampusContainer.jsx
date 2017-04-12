import React, { Component } from 'react';
import NewCampus from '../components/NewCampus';
import { addNewCampus } from '../action-creators/campuses'; //TODO: define the action creator to operate on a new campus action;
import { connect } from 'react-redux';

//modify this container to double as an edit container as well.? Or create a new container
//if so, I need to pass down the currently selected campus to the whole form
//get the currently selected campus from state.

const mapDispatchToProps = (dispatch) => {
  return {
    //have two items to pass into adding a new campus: the name and the image
    addNewCampus (campusName, campusImage) {
      dispatch(addNewCampus(campusName, campusImage));//dispatching the action to add a new campus
    },
    editOne (campus) {//here I have to pass the whole instance of the campus in to update it.
      dispatch(editCampus(campus))
    }
  };
};

class NewCampusContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      dirty: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange (evt) {
    evt.preventDefault();
    let nameValue = evt.target.value
    this.setState({
      name: nameValue,
      dirty: true
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
    this.props.addNewCampus(this.state.name, this.state.image);//submit new items to props
    //resetting the form fields after submission
    this.setState({
      name: '',
      image: '',
      dirty: false
    });
  }

  render () {
    let image = this.state.image;
    let name = this.state.name;
    const dirty = this.state.dirty;
    let warning = '';

    if (!name && dirty) warning = 'You must enter a name';
    else if (name.length > 16) warning = 'The campus name is too long (limit: 16 characters)';

    return (
      <NewCampus
        handleNameChange={this.handleNameChange}
        handleImageChange={this.handleImageChange}
        handleSubmit={this.handleSubmit}
        name={name}
        image={image}
        warning={warning}
      />
    );
  }
}

export default connect(
  null,//no mapping state to props
  mapDispatchToProps
)(NewCampusContainer);
