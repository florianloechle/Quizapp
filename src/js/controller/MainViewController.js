import DynamicView from '../views/DynamicView';
import SearchView from '../views/Main/searchView';
import Query from '../models/Query';
import { container } from '../index';

let view = null;
let searchView = null;

export const mainViewInit = () => {

    $.get('../dist/html/quiz_main.html', (html) => {

        view = new DynamicView(container.mainPanel);
        view.renderView(html,false);

        searchView = new SearchView('searchView',handleSearchEvents);
        DynamicView.registerView(searchView,$(container.searchView));

        componentHandler.upgradeElements($(container.mainPanel).children());

    },'html');
};

const handleSearchEvents = async (action,searchView) => {

    const input = searchView.getInput();

    if(!input) { return };

    let query = new Query(input);
    
    searchView.renderChips();

    searchView.clearInput();
    
    try {

        $(view.overlay).fadeIn('fast');

        await query.getResults();

        setTimeout( () => {
            $(view.overlay).fadeOut('fast');
            searchView.renderResults(query.result);
        },1000);
        
    } catch (error) {

        console.log(`Something went wrong: ${error}`);

    };
};