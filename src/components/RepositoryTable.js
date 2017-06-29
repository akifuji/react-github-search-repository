import React, { Component } from 'react';

import RepositoryRow from './RepositoryRow';

class RepositoryTable extends Component {
  render () {
    var rows = [];
    this.props.repositories.forEach((repository) => {
      rows.push(<RepositoryRow repository={repository} key={repository.fullName} />);
    });
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default RepositoryTable;
