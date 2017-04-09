import React, {Component} from 'react';

//import navbaar component
import Navbar from '../components/Navbar';
//import actions and action creators

export default function App ({ children }) {
  console.log("IN APP COMPONENT CHILDREN: ", children)
  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-12 navbar">
        <Navbar />
      </div>
      <div className="col-xs-12">
        { children }
      </div>
    </div>
  );
}
