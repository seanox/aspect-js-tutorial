#import ui/io
#import ui/spinner

Namespace.using("ui");

/** Namespace ui.Table for a abstract Table for UI components */
ui.Table = class {
    
    /**
     * Constructor for creating a table for a DOM element.
     * @param selector
     */
    constructor(selector) {

        /** Selector of the element */
        this.selector = selector;
        
        /** 
         * Data download of the currently displayed data as CSV file.
         * The separator is used especially for MS-Excel according to the
         * current language setting.
         */
        this.download = new (class {
           
            /**
             * Constructor for creating a download for a table.
             * @param table
             */
            constructor(table) {
                this.table = table;
            }
            
            /**
             * Entry point for the click event.
             * @param event
             */
            onClick(event) {
                
                var element = document.querySelector(this.table.selector);
                if (!element
                        || !element.hasAttribute("id")
                        || !element.getAttribute("id").trim())
                    throw new Error("Invalid table selector" + (this.selector ? ": " + this.selector : ""));                
                
                var rows = Array.from(document.querySelectorAll(selector + " tr")).map(row => {
                    var cells = Array.from(row.querySelectorAll(selector + " td, " + selector + " th")).map(cell => {
                        var value = cell.textContent || "";
                        value = value.trim();
                        value = value.replace(/\s*[\r\n\t]+\s*/g, " ");
                        value = value.replace(/\"/g, "\"\"");
                        if (value.length > 0)
                            value = "\"" + value + "\"";
                        value = [value];
                        if (cell.hasAttribute("colspan")) {
                            var size = parseInt(cell.getAttribute("colspan"))
                            if (!isNaN(size) && size > 1)
                                for (; size > 1; size--)
                                    value.push("");
                        }
                        return value;
                    });
                    
                    var row = [];
                    for (let cell of cells) 
                        row = row.concat(cell);
                    return row; 
                });
                
                // MS Excel may use a non RFC 4180 conforming separator.
                // Apparently depending on the decimal separator, comma or
                // semicolon are used. So the current language of the UI and the
                // decimal separator used there is also used here as a basis.
                //     see also:
                // https://en.wikipedia.org/wiki/Comma-separated_values
                // https://en.wikipedia.org/wiki/Decimal_separator#Influence_of_calculators_and_computers
                var delimiter = new Intl.NumberFormat(DataSource.locale,
                        {style:"decimal", minimumFractionDigits:2, maximumFractionDigits:2}
                    ).format(0).charAt(1) == "," ? ";" : ",";
                var csv = rows.map(row => row.join(delimiter)).join("\n");

                var blob = new Blob(["\ufeff", csv], {type:"text/csv;charset=utf-8"});
                ui.io.save(blob, element.getAttribute("id").trim() + ".csv");        
            }            
        })(this);
    }

    /** Pseudo abstract method for docking the component. */
    dock() {
        return;
    }
    
    /** Pseudo abstract method for loading the data. */
    load() {
        return;
    }
    
    /**
     * Pseudo abstract method for sorting the data. 
     * Sorting can be implemented here in general or in particular in the
     * implementation of the derived table class.
     * @param column
     * @param reverse
     */
    sort(column = null, reverse = false) {
        return;
    }
    
    /** Pseudo abstract method for rendering the output. */
    render() {
        return;
    }
}