/**
 * Copyright (c) 2018-present, Florian Löchle.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory.
 *
 */

import Component from '../../shared/base';

class SearchFormFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, value } = this.props;

    return {
      html: `
      <span class="mdl-chip">
           <span class="mdl-chip__text"><strong>${name}:</strong> ${value}</span>
      </span>
      `
    };
  }
}

export default SearchFormFilter;
