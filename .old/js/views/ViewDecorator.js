export class ViewDecorator {

    static DataSetDecorator(obj,sets) {
        let tArray = ['text', 'textarea', 'password', 'username', 'email'];

        sets.forEach(set => {
            let data = obj.item[0].querySelectorAll(set);

            for(let element of data) {
                let object = {};
            
                if(set === '[data-info]') {
                    object = element;
                    appendData(obj,element.dataset['info'],object);
                };

                if(set === '[data-input]') {
                    object = {
                        input: element,
                        name: element.dataset['name']
                    };
                    if(tArray.includes(element.type)) {
                        object.error = element.parentElement.querySelector('[data-error]');
                    };
                    appendData(obj,element.dataset['input'],object);
                };
            };
        });

        function appendData(view,name,object) {

            if(!view[name]) {

                view[name] = object;

            } else {

                if (!Array.isArray(view[name])) {
                    view[name] = $.makeArray(view[name]);
                }; 

                view[name].push(object);
            };
        };
    };

    static EventListenerDecorator(obj,type,handler) {

        obj.item.on(type, (e) => {
            let t = e.target;

            if(t.dataset['action'] || t.parentElement.dataset['action'] ) {

                let action = t.dataset['action'] || t.parentElement.dataset['action']
                handler(action,obj);
            };
            e.preventDefault();
            return false;
        });

    };

    static EventDispatchDecorator(obj) {
            let list = {};
            obj.addEvent = (type,listener) => {
                if(!list[type]){
                    list[type] = [];
                };
    
                if(list[type].indexOf(listener) === -1){
                    list[type].push(listener);
                };
    
            };
    
            obj.removeEvent = (type, listener) => {
                let a = list[type];
                if(a){
                    let index = a.indexOf(listener);
                    if(index>-1){
                        a.splice(index, 1);
                    };
                };
            };
    
            obj.dispatchEvent = e => {
                let aList = list[e.type];
                if(aList){
                    if(!e.target){
                        e.target = this;
                    };
                    for(let index in aList){
                        aList[index](e);
                    };
                };
            };
    };
}


export class CompositeController {

    constructor(items) {
        this.items = items;
    };

    action(act) {
        let args = Array.prototype.slice.call(arguments);
            args.shift();
        for(let item of this.items) {
           item[act].apply(item,args);
        };
    };
};



