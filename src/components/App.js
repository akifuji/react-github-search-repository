import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import FilterableRepositoryTable from './FilterableRepositoryTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableRepositoryTable repositories={REPOSITORIES} />
      </div>
    );
  }
}

var REPOSITORIES = [
  {fullName: 'apple/swift', description: 'The Swift Programming Language', language: 'C++'},
  {fullName: 'apple/swift2', description: 'The Swift Programming Language', language: 'C++'},
  {fullName: 'apple/swift3', description: 'The Swift Programming Language', language: 'C++'},
  {fullName: 'apple/swift4', description: 'The Swift Programming Language', language: 'C++'},
  {fullName: 'apple/swift5', description: 'The Swift Programming Language', language: 'C++'}
];

export default App;
