// For the HTML element with the ID error, the browser automatically creates a
// corresponding HTML element in JavaScript. However, we want our own that uses
// Reactive so that we don't have to worry about updating the view.
window.error = Reactive({
    message: null,
    exists() {
        return !!(this.message || "").trim();
    }
});

Composite.listen(Composite.EVENT_ERROR, function(event, error) {
    window.error.message = error.message;
});