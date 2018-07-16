import $ from 'jquery';
import createState from '../../shared/state';

class SearchBar {
  constructor(props) {
    this.state = createState({
      search: {
        id: '',
        titel: '',
        category: '',
        creator: ''
      }
    });
  }

  componentDidRender() {
    // Do Stuff
  }

  handleSearchInput(e) {
    let newSearch = this.state.get();
    newSearch[e.target.name] = e.target.value;

    this.state.update({
      search: newSearch
    });
  };

  render() {
    return {
      html: `<div class="mdl-grid">
      <div class="mdl-cell mdl-cell--2-col mdl-cell--12-col-phone mdl-cell--3-col-tablet">
              <div class="mdl-textfield mdl-js-textfield">
                  <input cb_onChange="handleSearchInput" cb_name="title" class="mdl-textfield__input" type="text">
                  <label class="mdl-textfield__label" for="filter-title">Suche nach Titel..</label>
              </div>
      </div>   
      <div class="mdl-cell mdl-cell--2-col mdl-cell--12-col-phone mdl-cell--3-col-tablet">
              <div class="mdl-textfield mdl-js-textfield">
                  <input cb_onChange="handleSearchInput" cb_name="creator" class="mdl-textfield__input" type="text">
                  <label class="mdl-textfield__label" for="filter-creator">Suche nach Ersteller..</label>
              </div>
      </div>  
      <div class="mdl-cell mdl-cell--2-col mdl-cell--12-col-phone mdl-cell--3-col-tablet">
              <div class="mdl-textfield mdl-js-textfield">
                  <input cb_onChange="handleSearchInput" cb_name="id" class="mdl-textfield__input" type="text">
                  <label class="mdl-textfield__label" for="filter-number">Suche nach Nummer..</label>
              </div>
      </div>
      <div class="mdl-cell mdl-cell--2-col mdl-cell--12-col-phone mdl-cell--3-col-tablet">
              <div class="mdl-textfield mdl-js-textfield">
                  <input cb_onChange="handleSearchInput" cb_name="category" class="mdl-textfield__input" type="text">
                  <label class="mdl-textfield__label" for="filter-title">Suche nach einer Kategorie..</label>
              </div>
      </div>
      <div class="mdl-cell mdl-cell--10-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
              <button cb_onClick="handleSearch" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="button" id="filter-search">Suche</button>
      </div>  
      <div id="filter-list-container" class="mdl-cell mdl-cell--12-col">
              <span class="mdl-chip">
                      <span class="mdl-chip__text"><strong>Quizze gefiltert nach:</strong></span>
              </span>
      </div>
      </div>  `
    };
  }
}

export default HomeDashBoard;
