/**
 * A stage which defines an area for dynamiclly created content.
 * Each item gets an unique id for indentification.
 */
export class Stage {

    /**
     * A stage which defines an area for dynamiclly created content.
     * @param {String} - The selector which represent the stage. This will be the stage context.
     */
    constructor(id) {
        this.index = 0;
        this.context = $(id);
        this.items = [];
    };

    /**
     * Adds an item to the stage and fades it in.
     * @param {Object} - A jQuery Object.
     */
    add(item) {
        ++this.index;
        item.attr('data-id', this.index);
        this.context.append(item);
        this.items.push(item);
        componentHandler.upgradeElements(item.children());
        item.fadeIn('slow');
    };

    /**
     * Opposite of add. Removes an object from the stage. Requires the correct index.
     * @param {Int} - The index of the item which we want to delete.
     */
    remove(index) {
        this.context.remove(`[data-id=${index}]`);
    };

    /**
     * Clears the complete stage and resets the index count.
     */
    clear() {
        this.context.empty();
        this.index = 0;
    };

};

/**
 * An abstract factory which contructs whatever builder we throw into it.
 */
class ViewFactory {

    constructor() {
        this.types = {};
    };
    
    create(type) {
        return new this.types[type]().get();
    };

    register(type,cls) {
        if(cls.prototype.get){
                this.types[type] = cls;
        };
    };
};

class ViewGeneratorSingleton {

    constructor() {
        this._stage = null;
        this._vf = new ViewFactory();
    };

    register(name,cls) {
        this._vf.register(name, cls);
    };

    setStage(stage) {
        this._stage = stage;
    };

    create(type) {
        var view = this._vf.create(type);
        return view;
    };

    add(view) {
        this._stage.add(view.get());
    };

};

//Exporting our singleton..
export let QuizViewGenerator = new ViewGeneratorSingleton();

