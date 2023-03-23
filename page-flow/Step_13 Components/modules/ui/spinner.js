Namespace.using("ui");

/** Namespace ui.spinner for spinner functions for UI components */
ui.spinner = {

    /**
     * Adds an animated spinner to the element.
     * The spinner is removed when the final markup is added to the element.
     * @param element
     */    
    append(element) {
        if (typeof element === "string")
            element = document.querySelector(element);
        if (!(element instanceof Element))
            return;
        element.innerHTML = "<div class=\"spinner\">"
                + "<div class=\"bounce1\"></div>"
                + "<div class=\"bounce2\"></div>"
                + "<div class=\"bounce3\"></div>"
                + "</div>";
    }
}