// The JavaScript of modules is executed in a delimited namespace.
// If objects are to be globally available, they must be created with the window object.
//
// The JavaScript models correspond to the DOM hierarchy and are based on the declared ID attributes.
//     #header -> #language -> event(s) 
window['menu'] = {
    language: {
        onClick(event) {
            DataSource.localize(event.target.id);
        }    
    }        
}