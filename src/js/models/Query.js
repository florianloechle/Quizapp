import {request, showSnackbarMessage} from '../index';

const path = {
    fetchQuiz: '../srv/quiz_management/quiz_fetchQuiz.php',
};

export default class Query {

    constructor(query) {
        this.query = query;
    };

    async getResults() {

        try {
            let results = await request(path.fetchQuiz,this.query,'GET');
            this.results = results;

        } catch(error) {
            showSnackbarMessage(`Could not reach server: ${error}`)
        };
    };

}