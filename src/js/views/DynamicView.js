export default class DynamicView {

    constructor(parent,handler) {
        this.jObject = null;
        this.handler = handler;
        this.parent = parent;
    };

    /**
     * Takes an html string and appends and registers the view on the dom.
     * @param {String} data - An html string.
     */
    loadView(data,append) {

        let html = data ? $.parseHTML(data) : $.parseHTML(this.markup);

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

    static register(jQueryObject,handler) {
        let view = new DynamicView(jQueryObject[0].id,handler);

        view.jObject = jQueryObject;
        view.fetchDataSet();
        
        return view;
    };

    /**
     * 
     * @param {} 
     */
    fetchDataSet() {
        let tArray = ['text', 'textarea', 'password', 'username', 'email'];

        sets.forEach(set => {
            
            let data = this.jObject[0].querySelectorAll(set);
    
            for(let element of data) {
                let object = {};

                if (!this[element]) {
                    this[element.dataset[0]] = object;

                } else {
    
                    if (Array.isArray(this[element])) {
                        this[element].push(object);
    
                    } else {
                        this[element] = $.makeArray(this[element]);
                        this[element].push(object);
                    };
                };

                if(element.dataset['info']) {
                    object = element;
                    continue;
                };

                if(element.dataset['action']) {
                    object.obj = element;
                    object.name = element.dataset['action'];
                    if(this.handler) { this.observe(object) }
                    continue;
                };

                if(element.dataset['input']) {
                    object.name = element.dataset['input'];
                    if(tArray.includes(element.type)) {
                        object.error = element.parentElement.querySelector('[data-error]');
                    }
                }

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