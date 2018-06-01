export default class ViewAnimator {

    static minimize(view,duration,complete) {
    
        $(view.jObject).fadeOut('slow', () => {
            $(view.jObject).css({visibility: "hidden",display: "block"}).slideUp(duration,complete);
        });
    };

    static fadeOut(view) {

        $(view).fadeOut('slow', () => {
             view.remove();
        });

    };
}