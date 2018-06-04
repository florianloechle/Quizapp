import View from '../views/View';
import Query from '../models/Query';
import { container } from '../index';

let yourView = null;

export const yourQuizViewInit = () => {

    $.get('../dist/html/quiz_yourquiz.html', html => {
        View.render(html,container.mainPanel,true) 

        //we register out "main" view to access its overlay
        yourView = View.register(yourView,container.mainPanel);
        
        //mdl upgrade..
        componentHandler.upgradeElements($(container.mainPanel).children());

        //we initalize a query to get correct quizes
        let query = new Query({current: 'true'});

        //we fill our searchview with the infos we get
        updateUIWithQuery(query);

    },'html');
};

const updateUIWithQuery = async query => {

    try {

        await query.getResults();

        //fake 'response time'
        setTimeout( () => {
           

        },700);
        
    } catch (error) {

        console.log(`Something went wrong: ${error}`);

    };
};

