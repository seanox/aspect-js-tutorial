/**
 * Spinner functions for UI components.
 * The namespace ui.spinner is created at the end with the macro #export.
 */
const spinner = {

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

#export spinner@ui;