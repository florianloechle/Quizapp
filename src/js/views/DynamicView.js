export default class DynamicView {

    constructor(parent,handler) {
        this.jObject = null;
        this.handler = handler;
        this.parent = parent;
    };

    /**
     * Takes an html string and appends and registers the view on the dom.
     * @param {String} data - A html string.
     */
    renderView(data,append) {
        let html;

        if(typeof data === 'boolean') {
            html = $.parseHTML(this.markup)
            append = data;
        } else {
            html = data ? $.parseHTML(data) : $.parseHTML(this.markup);
        };

        if(append) {  
            $(`#${this.parent}`).append(html);
        } else {
            $(`#${this.parent}`).html(html);
        };
        
        this.jObject = $(html);

        componentHandler.upgradeElements($(this.jObject).children());

        this.fetchDataSet();

        $(this.jObject).fadeIn('slow');

    };

    removeSubView(view,animation) {
       
        if(!animation) {
            animation = 'minimize';
        };
    
       view.jObject.fadeOut('slow', ()  => {
           view.jObject.remove();
       });          
    }

    static registerView(view,jQueryObject) {
       
        view.jObject = jQueryObject;
        view.fetchDataSet();
        
    };

    /**
     * 
     * @param {} 
     */
    fetchDataSet() {
        let tArray = ['text', 'textarea', 'password', 'username', 'email'];

        sets.forEach(set => {
            
            let data = this.jObject[0].querySelectorAll(set);
            let key = null;
    
            for(let element of data) {
                let object = {};

                if(element.dataset['info']) {
                    object = element;
                    key = 'info';
                };

                if(element.dataset['action']) {
                    key = 'action';
                    object.obj = element;
                    object.name = element.dataset['action'];
                    if(this.handler) { this.observe(object) }
                };

                if(element.dataset['input']) {
                    key = 'input';
                    object.obj = element;
                    object.name = element.dataset['name'];
                    if(tArray.includes(element.type)) {
                        object.error = element.parentElement.querySelector('[data-error]');
                    };
                }

                if (!this[element.dataset[key]]) {
                    this[element.dataset[key]] = object;

                } else {
    
                    if (Array.isArray(this[element.dataset[key]])) {
                        this[element.dataset[key]].push(object);
    
                    } else {
                        this[element.dataset[key]] = $.makeArray(this[element.dataset[key]]);
                        this[element.dataset[key]].push(object);
                    };
                };
            }
        });
    };

    observe(dObject, internalHandler, type) {
        let object = dObject.obj ? dObject.obj : dObject;

        $(object).on(`${type = type ? type : 'click'}`, (event) => {
            if (!event.target.dataset || !event.target.parentElement.dataset) {
                event.preventDefault(); return false;
            };

            if (internalHandler) {
                internalHandler(dObject, this);
                event.stopPropagation();

            } else {

                this.handler(dObject, this);
            };
            
        });
    };

}

const sets = ['[data-info]','[data-action]','[data-input]'];