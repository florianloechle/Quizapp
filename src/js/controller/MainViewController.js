import View from '../views/View';
import SearchView from '../views/Main/searchView';
import Query from '../models/Query';
import { container } from '../index';

let mainView = null;
let searchView = null;
let quizIDs = null;

export const mainViewInit = () => {

    $.get('../dist/html/quiz_main.html', html => {
        View.render(html,container.mainPanel,true) 

        mainView = View.register(mainView,container.mainPanel);
    
        searchView = new SearchView('searchView',handleSearchEvents);

        componentHandler.upgradeElements($(container.mainPanel).children());

    },'html');
};

const handleSearchEvents = async (action,view) => {

    if(action === 'clickedFilter') {
      
        searchView.removeChip(view);

        return;
    };

    const input = searchView.getInput();

    if(!input) { return };

    let query = new Query(input);
    
    searchView.renderChips();

    searchView.clearInput();
    
    try {

        $(mainView.overlay).fadeIn('fast');

        await query.getResults();

        setTimeout( () => {
            $(mainView.overlay).fadeOut('fast');

            quizIDs = searchView.renderQueryResults(query.results);

        },1000);
        
    } catch (error) {

        console.log(`Something went wrong: ${error}`);

    };
};