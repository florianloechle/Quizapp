/**
 * Copyright (c) 2018-present, Florian Löchle.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory.
 *
 */

import Component from '../../shared/base';

class HomeDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearching: false
    };
  }

  handleNewSearch = search => {
    this.updateState({
      isSearching: true
    });
    // ToDO: Ask api for search results.
  };

  render() {
    return {
      children: [{ comp: SearchForm, options: { newSearch: this.handleNewSearch } }]
    };
  }
}

export default HomeDashboard;
