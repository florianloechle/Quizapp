import Query from '../models/Query';
import YourQuizView from '../views/YourQuiz/yourQuizView';
import { container , showSnackbarMessage } from '../app';
import Quiz from '../models/Quiz';

let yourView = null;

export const yourQuizViewInit = () => {

    $(container.mainPanel).load('../dist/html/quiz_yourquiz.html',() => {

        yourView = new YourQuizView('#yourView',handleYourQuizEvents);

        //mdl upgrade..
        componentHandler.upgradeElements($(container.mainPanel).children());

        //we initalize a query to get correct quizes
        let query = new Query({current: 'true'});

        //we fill our searchview with the infos we get
        updateUIWithQuery(query);

    });
};

const handleYourQuizEvents = (action,view) => {

    if(action !== 'delete') {
        return false;
    };

    Quiz.delete(view.quiz.id).then(response => {

         //We got a response..
         if(response.success) {

            view.get().animate({
                width: "0px",
                opacity: "0"
            },1500, () => yourView.removeItem(view));

            showSnackbarMessage('Quiz erfolgreich gelöscht',1500);

        };

        //No response..
    }, rejection => {

        showSnackbarMessage('Could not reach server. Please check your connection',3000);

    });

}

const updateUIWithQuery = async query => {

    try {

        await query.getResults();

        yourView.renderQueryResults(query.results);

    } catch (error) {

        console.log(`Something went wrong: ${error}`);

    };
};

