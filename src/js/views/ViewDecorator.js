export default class ViewDecorator {

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
}




