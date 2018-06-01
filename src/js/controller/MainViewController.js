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

        //we register out "main" view to access its overlay
        mainView = View.register(mainView,container.mainPanel);
        
        //we initialize a new SearchView to handle search and quiz events
        searchView = new SearchView('#searchView',handleSearchEvents);

        //mdl upgrade..
        componentHandler.upgradeElements($(container.mainPanel).children());

        //we initalize an empty query to get quiz results
        let query = new Query(searchView.getInput());

        //we fill our searchview with the infos we get
        updateUIWithQuery(query);

    },'html');
};

const handleSearchEvents = async (action,view) => {

    //User tapped filter chip and wants to remove it
    if(action === 'clickedFilter') {
      
        searchView.removeChip(view);

        return;
    };

    //User tapped Quiz info and wants to play
    if(action === 'play') {

        console.log(view,action);
        return;
    }

    //User tapped the seach button
    const input = searchView.getInput();

    //we initialize a query with the input
    let query = new Query(input);
    
    //render the chip and clear the searchview for further input
    searchView.renderChips();
    searchView.clearInput();
    
    //display results..
    updateUIWithQuery(query);

};

const updateUIWithQuery = async query => {

    try {

        $(mainView.overlay).fadeIn('fast');

        await query.getResults();

        //fake 'response time'
        setTimeout( () => {
            $(mainView.overlay).fadeOut('fast');

            searchView.renderQueryResults(query.results);

        },1000);
        
    } catch (error) {

        console.log(`Something went wrong: ${error}`);

    };
};