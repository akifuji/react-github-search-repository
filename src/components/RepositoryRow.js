import React, { Component } from 'react';

class RepositoryRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.repository.fullName}</td>
        <td>{this.props.repository.description}</td>
        <td>{this.props.repository.language}</td>
      </tr>
    );
  }
}

export default RepositoryRow;
