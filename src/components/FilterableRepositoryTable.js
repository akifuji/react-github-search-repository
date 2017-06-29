import React, { Component } from 'react';

import SearchBar from './SearchBar';
import RepositoryTable from './RepositoryTable';

class FilterableRepositoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
        />
        <RepositoryTable
          repositories={this.props.repositories}
          filterText={this.state.filterText}
        />
      </div>
    )
  }
}

export default FilterableRepositoryTable;
