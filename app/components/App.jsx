import React, {Component} from 'react';
import {connect} from 'react-redux';

//import navbaar component
import NavbarContainer from '../containers/NavbarContainer';
//import actions and action creators
import store from '../store.jsx';

export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
      <div className="nav navbar-nav">
        <NavbarContainer />
      </div>
      {/*<div className="col-xs-10">
              { children }
            </div>*/}
    </div>
  );
}
