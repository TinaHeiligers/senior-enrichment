import React, {Component} from 'react';
import store from '../store';
import Nevbar from '../components/Navbar';

class NavbarContainer extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Navbar playlists={this.state}/>
    );
  }

}

export default NavbarContainer;
