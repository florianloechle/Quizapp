import {ViewDecorator} from '../views/ViewDecorator';
import SearchView from '../views/Main/searchView';
import { QuizInit } from '../controller/QuizController';
import Query from '../models/Query';
import Question from '../models/Quiz';
import { container } from '../index';

let searchView = null;
let quizArray = [];

export const mainViewInit = () => {

    $(container.mainPanel).load('../dist/html/quiz_main.html', () => {
        $('#main-panel').fadeIn('slow)');

        //We initialize a new SearchView to handle search and quiz events
        searchView = new SearchView('#searchView',handleSearchEvents);

        //mdl upgrade..
        componentHandler.upgradeElements($(container.mainPanel).children());

        //We initalize an empty query to get quiz results
        let query = new Query(searchView.getInput());

        //We fill our searchview with the infos we get
        updateUIWithQuery(query);

    });
};

const handleSearchEvents = async (action,view) => {

    //User tapped Quiz info and wants to play
    if(action === 'play') {

        //let question = Question.fetchFor(id);

        $('#main-panel').fadeOut('slow', () => {
            QuizInit(view.quiz);
        });

        return;
    };

    //User tapped the seach button
    const input = searchView.getInput();

    //we initialize a query with the input we got from the user
    let query = new Query(input);
    
    //render the chip and clear the searchview for further input
    searchView.renderChips();
    searchView.clearInput();
    
    //display results..
    updateUIWithQuery(query);

};

const updateUIWithQuery = async query => {

    try {
        $('#overlay').fadeIn('fast');

        await query.getResults();

        //fake 'response time'
        setTimeout( () => {
            $('#overlay').fadeOut('fast');

            quizArray = query.results;
            
            searchView.renderQueryResults(query.results);

        },1000);
        
    } catch (error) {

        console.log(`Something went wrong: ${error}`);

    };
};