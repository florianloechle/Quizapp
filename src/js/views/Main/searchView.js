import DynamicView from '../DynamicView';
import Validation from '../Validation';

export default class SearchView extends DynamicView {

    constructor(parent,handler) {
        super(parent, handler);

        this.chips = [];
        this.quizInfo = []

    };

    getInput() {

        let validFilter = false;

            for (let i = 0; i < this.filter.length; i++)  {
                if (this.filter[i].obj.value) {
                    validFilter = true;
                    this.isSet = false;
                    break;
                };
            };
            if (validFilter) {
                return $(this.jObject[0]).children().serialize();
            };
            if (!this.isSet) {
                this.isSet = true;
                return $(this.jObject[0]).children().serialize();
            };

    };

    clearInput() {
        this.filter.forEach(filter => {
            filter.obj.parentElement.MaterialTextfield.change();
        });
    };

    async renderChips() {

        this.filter.forEach(filter => {
            let present = false;

            for (let i = 0; i < this.chips.length; i++) {
                if (filter.name === this.chips[i].setFilter.name) {
                    present = true;
                    this.chips[i].update();
                    break;
                };
            };

            if (!present && filter.obj.value) {

                let chip = new Chip(filter,this.handler)
                this.chips.push(chip);
                
                chip.renderView(true);
                chip.update();

            };
        });
    }
}

class Chip extends DynamicView {

    constructor(filter,handler) {
        super('filter-list-container',handler);

        this.setFilter = filter;
        this.markup = `<span class="mdl-chip mdl-chip--deletable">
        <span data-info="filter" class="mdl-chip__text"></span>
        <button type="button" class="mdl-chip__action"><i data-action="clickedFilter" class="material-icons">cancel</i></button>
        </span>`;
    };

    update() {
        if (this.setFilter.obj.value) {
            $(this.filter).html(`<strong>${this.setFilter.name}:</strong> ${this.setFilter.obj.value}`);
        };
    };
    
};
    

