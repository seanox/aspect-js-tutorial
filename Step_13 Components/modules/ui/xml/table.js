#import ui/table
#import ui/spinner

Namespace.using("ui.xml");

/** Namespace ui.xml.Table for a abstract Table base on XML for UI components */
ui.xml.Table = class extends ui.Table {
    
    /**
     * Constructor for creating a table for a DOM element.
     * @param selector
     */
    constructor(selector) {
        super(selector);
    }
    
    /**
     * Preparing the table component when docking in the DOM.
     * The data is loaded initially. A spinner is displayed when loading.
     * The data is then rendered by XML transformation and inserted into the DOM.
     * The events for the sort function are registered with the insert.
     */
    dock() {
        // Docking is synchronous, but loading is asynchronous.
        // This way the page does not block during initial loading and rendering.
        Composite.asynchron(() => {
            // Temporary a spinner is shown during loading.
            ui.spinner.append(this.selector);
            
            // The data is loaded initially (if necessary).
            this.load();
            
            // The standard sorting is determined and applied.
            // To do this, the table must be rendered temporarily without
            // sorting so that the sortable fields can be determined.
            var sorting = null;
            var fragment = this.render();
            var nodes = Array.from(fragment.querySelectorAll("thead"));
            if (nodes.length <= 0)
                throw new Error("Invalid table structure: thead is missing");
            var column = fragment.querySelector("thead *.sortable.sortable-default[id]");
            if (column) {
                column = (column.getAttribute("id") || "").trim();
                if (column) {
                    sorting = {column, reverse:false}
                    this.sort(sorting.column, sorting.reverse);
                }
            }
            
            var output = table => {
                Composite.asynchron(() => {
                    document.querySelector(table.selector).appendChild(table.render(), true);
                    Composite.asynchron(() => {
                        // The table header is searched for sortable elements.
                        // These are all elements with the class attribute sortable.
                        // The default order is defined by sortable-default.
                        var nodes = Array.from(document.querySelectorAll(table.selector + " thead"));
                        if (nodes.length <= 0)
                            throw new Error("Invalid table structure: thead is missing");
                        // A click event is assigned to all detected elements.
                        // With the click the sorting and the re-rendering is called.
                        for (let thead of nodes)
                            thead.addEventListener("click", event => {
                                if (!event.target
                                        || !event.target.hasAttribute("id")
                                        || !event.target.classList.contains("sortable"))
                                    return;
                                var column = event.target;
                                if (!column || (column.getAttribute("id") || "").trim().length <= 0)
                                    column = document.querySelector(table.selector + " thead *.sortable.sortable-default[id]");
                                if (!column)
                                    return;
                                column = (column.getAttribute("id") || "").trim();
                                if (!column)
                                    return;
                                if (!sorting
                                        || sorting.column != column)
                                    sorting = {column, reverse:false}
                                else sorting.reverse = !sorting.reverse;
                                table.sort(sorting.column, sorting.reverse);
                                output(table);  
                            });
                    });                    
                });
            };
            output(this);
        });
    }
}