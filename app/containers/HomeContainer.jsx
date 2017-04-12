import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses.list,
    students: state.students.list
  };
};

const HomeContainer = connect(
    mapStateToProps
)(Home);

export default HomeContainer;
