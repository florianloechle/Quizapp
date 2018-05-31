import DynamicView from '../views/DynamicView';
import { container } from '../index';

export const loginViewInit = () => {

    $.get('../dist/html/quiz_login.html', (html) => {

        let view = new DynamicView(container.mainPanel,handleLoginEvents);
        view.loadView(html,false);

        componentHandler.upgradeElements($(container.mainPanel).children());

    },'html');
};

const handleLoginEvents = (action,name) => {




}
