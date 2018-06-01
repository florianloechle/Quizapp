export default class ViewAnimator {

    static fadeOut(view) {

        $(view.jObject).fadeOut('slow', () => {
             view.jObject.remove();
        });

    };
}