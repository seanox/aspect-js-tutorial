Namespace.using("ui");

/** Namespace ui.text for text functions for UI components */
ui.text = {
        
    /**
     * Formatted according to the data type and the currently used language
     * setting. Optionally a meta object can be passed to the style, e.g. for
     * formatting numbers (decimal places, precision, ...).
     * @param value
     * @param style
     */    
    format(value, style) {
        if (!isNaN(value))
            return new Intl.NumberFormat(DataSource.locale, style).format(value);
        return String(value);
    }        
}