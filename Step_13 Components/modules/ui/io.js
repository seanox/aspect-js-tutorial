Namespace.using("ui");

/** Namespace ui.io for in/out interfaces and functions for UI components */
ui.io = {

    /**
     * Creates a download for a BLOB that was created at runtime.
     * @param blob
     * @param filename
     */    
    save(blob, filename) {
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        window.setTimeout((link) => {
            var event = document.createEvent("MouseEvents");
            event.initEvent("click", false, true);
            link.dispatchEvent(event);
        }, 0, link);
    }            
}