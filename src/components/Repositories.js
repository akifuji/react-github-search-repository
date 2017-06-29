import React, { Component } from 'react';

class Repositories extends Component {
  render() {
    return (
      <div className="repositories">
      {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Repositories;
