/**
 * A stage adapter which defines an area for dynamically created content. 
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
        this.SIG = id;
    };

    /**
     * Adds an item to the stage and fades it in.
     * @param {Object} - A jQuery Object.
     */
    add(item) {
        ++this.index;
        item.addClass('stageView_', this.index);
        this.context.append(item);
        componentHandler.upgradeElements(item.children());
        item.fadeIn('slow');
    };

    /**
     * Opposite of add. Removes an object from the stage. 
     * @param {Object} - The jQuery object that is associated with the view that needs to be removed.
     */
    remove(item) {
        item.remove();
    };

    /**
     * Clears the complete stage and resets the index count.
     */
    clear() {
        this.context.children().remove();
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

    remove(view) {
        this._stage.remove(view.get());
    };

    removeAll() {
        this._stage.clear();
    };

};

//Exporting our singleton..
export let ViewGenerator = new ViewGeneratorSingleton();

