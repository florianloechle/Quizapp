export default class View {

    constructor() {
        throw new Exception("Can't create abstract class.");
    };

    static register(view,selector,handler) {
        if(!view) { view = {}; }

        if(typeof selector === 'function') {
            handler = selector;
        };

        if(!view.jObject) { view.jObject = $(selector) };
      
        if(handler) { View.observe(view,handler) };
        
        this.getDataSet(view);

        return view
    };

    static render(data,parent,force) {
        let html = $.parseHTML(data);

        if(force) {
            $(parent).html(html);
        } else {
            $(parent).append(html);
        };

        $(html).fadeIn('slow');

        componentHandler.upgradeElements($(parent).children())

        return $(html);
    };

    static getDataSet(view) {
        const sets = ['[data-info]','[data-input]'];
        let tArray = ['text', 'textarea', 'password', 'username', 'email'];

        sets.forEach(set => {
            let data = view.jObject[0].querySelectorAll(set);

            for(let element of data) {
                let object = {};
               
                if(set === '[data-info]') {
                    object = element;
                    this.appendDataToView(view,element.dataset['info'],object);
                };

                if(set === '[data-input]') {
                    object = {
                        input: element,
                        name: element.dataset['name']
                    };
                    if(tArray.includes(element.type)) {
                        object.error = element.parentElement.querySelector('[data-error]');
                    };
                    this.appendDataToView(view,element.dataset['input'],object);
                };
            };
        });
    };

    static appendDataToView(view,name,object) {

        if(!view[name]) {

            view[name] = object;

        } else {

            if (!Array.isArray(view[name])) {
                view[name] = $.makeArray(view[name]);
            }; 

            view[name].push(object);
        };
    };
    
    static observe(view,handler) {
       
        view.jObject.on('click', (e) => {
            if (e.target.dataset['action'] || e.target.parentElement.dataset['action']) {
                handler(e.target.dataset['action'] || e.target.parentElement.dataset['action'], view);
                e.preventDefault();
            };
            return false;
        });
    };

}




