import DynamicView from '../views/DynamicView';
import { container } from '../index';

let searchView = null;

export const mainViewInit = () => {

    $.get('../dist/html/quiz_main.html', (html) => {

        let view = new DynamicView(container.mainPanel);
        view.loadView(html,false);

        searchView = DynamicView.register($('#searchView'),handleSearchEvents);

        componentHandler.upgradeElements($(container.mainPanel).children());

    },'html');
};

const handleSearchEvents = (action,view) => {

    console.log(action);

};