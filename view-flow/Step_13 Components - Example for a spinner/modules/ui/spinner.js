/**
 * Spinner functions for UI components.
 * The namespace ui.spinner is created at the end with the macro #export.
 */
const spinner = {
    enabled() {
        const spinner = document.querySelector("#spinner\\@ui");
        spinner.setAttribute("enabled", "true");
    },
    disable() {
        const spinner = document.querySelector("#spinner\\@ui");
        if (spinner.hasAttribute("enabled"))
            spinner.removeAttribute("enabled");
    }
}

// The spinner is registered for the change from the URL hash.
//     see also https://github.com/seanox/aspect-js/blob/master/manual/events.md#events
// As modules are only loaded once, we do not need to check anything else.

// Due to the reflow and repaint of the browser, a very early event such as
// popstate must be used for activation so that the changes to the spinner
// attribute take effect before the change from the hash.

// Because everything is very fast, you can use network throttling in the
// browser to see the spinner.
window.addEventListener('popstate', (event) => {
    spinner.enabled();
});
Composite.listen(Composite.EVENT_RENDER_END, (event) => {
    spinner.disable();
});

#export spinner@ui;