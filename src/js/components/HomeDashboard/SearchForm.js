/**
 * Copyright (c) 2018-present, Florian Löchle.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory.
 *
 */

import Component from '../../shared/base';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        category: '',
        creator: '',
        id: '',
        title: ''
      }
    };
  }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.newSearch(this.state.search);
  }

  onInputChange = e => {
    const newSearch = this.state.search;

    newSearch[e.target.name] = e.target.value;

    this.updateState({
      search: newSearch
    });
  };

  render() {
    return {
      children: []
    };
  }
}

export default SearchForm;
