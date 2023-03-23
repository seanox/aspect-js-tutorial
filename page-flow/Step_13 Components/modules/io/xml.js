Namespace.using("io");

/** Namespace io.xml with utilities for XML interfaces. */
io.xml = {
        
    /**
     * Loads data from an XML interface.
     * @param  url
     * @return XMLDocument
     */    
    fetch(url) {
        
        var request = new XMLHttpRequest();
        request.overrideMimeType("text/xml");
        request.open("GET", url, false);
        request.send();
        if (request.status != 200)
            throw new Error("HTTP status " + request.status + " for " + request.responseURL);
        return request.responseXML;
    },
    
    /**
     * Creates a JavaScript data object based on an XMLDocument or Node.
     * @param  data
     * @return the create JavaScript data object
     */
    deserialize(data) {
        
        var append = (name, value) => {
            if (value === null)
                return;
            if (object[name]) {
                if (object[name].constructor != Array)
                    object[name] = [object[name]];
                object[name][object[name].length] = value;
            } else object[name] = value;
        };
        
        if (data instanceof Node) {
            
            if (data.nodeType == 9)
                return deserialize(data.documentElement);   
            if (data.nodeType != 1)
                return null;
            
            var meta = {text:null, data:null};
            for (let node of data.childNodes) {
                if (node.nodeType == 1) {
                    meta = false;
                    break;
                } else if (node.nodeType == 3) {
                    meta.text = (meta.text || "") + node.nodeValue; 
                } else if (node.nodeType == 4) {
                    meta.data = (meta.data || "") + node.nodeValue;
                }
            }

            if (meta && meta.data != null)
                return meta.data;
            if (meta && meta.text != null)
                return meta.text;

            var object = {};
            for (let attribute of data.attributes)
                append(attribute.name, attribute.value);
            for (let child of data.childNodes)
                append(child.nodeName, deserialize(child));
            return object;
        }
        
        throw new TypeError("Unsupported data type");            
    }
}