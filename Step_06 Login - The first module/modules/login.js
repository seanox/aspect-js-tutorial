//The model corresponding to the composite #login.
//The JavaScript models are docked and undocked depending on their presence in the DOM.
//The models can, but do not have to, implement two optional methods that can be used to initialize and to end the present.
window['login'] = {
        
    dock: function() {
        console.log("Login: dock");
    },
    
    undock: function() {
        console.log("Login: undock");
    }        
};