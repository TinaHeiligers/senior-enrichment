import React, {Component} from 'react';

//import navbaar component
import Navbar from '../components/Navbar';
//import actions and action creators

export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
      <div>
        <Navbar />
      </div>
      <div>
        { children }
      </div>
    </div>
  );
}
