// The SiteMap is configured.
// This is about paths, faces and facets.
//     see also https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#sitemap
//              https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#virtual-paths
//
// Faces are composites to which a virtual path is assigned in the application.
// If the application is called with a specific path, only the corresponding face/composite is shown.
// If this face/composite is a child of other parent faces/composites, they will also be shown.
// Facets are a kind of tile in a face.
// They do not have their own path and are shown when the surrounding face is shown.
//     see also https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#sitemap
//
// The SiteMap is configured with all paths of the corresponding Faces/Composites and assigned Facets. 
// The SiteMap then takes care of showing and hiding the faces/composites matching the paths.
// Showing and hiding means that the composites are removed and inserted in the DOM, it is not a CSS trick.
// In the background, a module concept is working that docks the composites for initialization and undocks them accordingly for removing.
//     see also https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#binding
//              https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#dock
//              https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#undock
//
// Variable paths ends with ... and have no physical length.
// After the path, the delimiter character # can be used to specify any other path of any depth.
// Variable paths always refer to a real path and the extension can be used to pass parameters.
SiteMap.customize({
    "#": ["home", "projects", "about", "contact"],
    "#project": ["..."],
    "#person": ["..."],
});

// The implementation of the UI test is loaded as a module.
Composite.render.include("test");

/**
 * Custom selector for img-tags with x-src attribute.
 * With IMG tags, the browser will immediately use the src attribute and start downloading the image data.
 * When using dynamic data, this usually results in an unwanted server request.
 * The Custom Selector is one of several solutions.
 * It is called at each relevant render cycle and can be used to manipulate the matching element.
 * In our case, we use the x-src attribute and set the src attribute only with the final value.
 */
Composite.customize("img[x-src]", (element) => {
    var src = element.getAttribute("x-src") || "";
    if (src.match(Composite.PATTERN_EXPRESSION_CONTAINS))
        src = String(Expression.eval(src));
    element.src = src;
});

/**
 * Creates a object based on data-structures.
 * The method is intended for deserialization.
 * Supported data types: XMLDocument / Node
 * @param  data
 * @return the created object
 */
if (Object.parse === undefined) {
    Object.parse = function(data) {

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
                return Object.parse(data.documentElement);   
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
                append(child.nodeName, Object.parse(child));
            return object;
        }
        
        throw new TypeError("Unsupported data type");
    }
}