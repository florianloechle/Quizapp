/**
 * Copyright (c) 2018-present, Florian Löchle.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory.
 *
 */

class Component {
  constructor(props) {
    this.props = props || {};
  }
}

Component.prototype.isComponent = {};

export default Component;