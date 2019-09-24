//The model corresponding to the composite #login.
//The JavaScript models are docked and undocked depending on their presence in the DOM.
//The models can, but do not have to, implement two optional methods that can be used to initialize and to end the present.
window['login'] = {
        
    user: "",

    password: "",

    dock: function() {
        console.log("Login: dock");
    },
    
    logon: {
        onClick: function(event) {
            alert("Receive a click on: #login #logon");
        }
    },

    signup: {
        onClick: function(event) {
            alert("Receive a click on: #login #signup");
        }
    },
    
    undock: function() {
        console.log("Login: undock");
    }
};