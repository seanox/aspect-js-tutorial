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
        Composite.asynchron(() => {
            ui.spinner.append(this.selector);
            var $sorting = null;
            var $output = table => {
                Composite.asynchron(() => {
                    document.querySelector(table.selector).appendChild(table.render(), true);
                    Composite.asynchron(() => {
                        var nodes = Array.from(document.querySelectorAll(table.selector + " thead"));
                        if (nodes.length <= 0)
                            throw new Error("Invalid table structure: thead is missing");
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
                                if (!$sorting
                                        || $sorting.column != column)
                                    $sorting = {column, reverse:false}
                                else $sorting.reverse = !$sorting.reverse;
                                table.sort($sorting.column, $sorting.reverse);
                                $output(table);  
                            });
                    });                    
                });
            };
            $output(this);
        });
    }
}