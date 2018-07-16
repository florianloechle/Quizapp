import $ from 'jquery';
import createState from '../../shared/state';

class HomeDashBoard  {

  constructor() {
    this.state = createState({
      search: {
        id: '',
        name: '',
        category: '',
        creator: ''
      },
      quiz: {
        easy: [],
        medium: [],
        hard: []
      }
    });

    this.methods

  }

  componentDidRender() {
    // Do Stuff
  }

  handleSearch(search) {

  }

  render() {

    return {
      html: `<div style="display: none" id="main-panel">`,
      children: '',
    }
  }

}

export default HomeDashBoard;