//The model corresponding to the composite #login.
//The JavaScript models are docked and undocked depending on their presence in the DOM.
//The models can, but do not have to, implement two optional methods that can be used to initialize and to end the present.
window['login'] = {
        
    get EMAIL_PATTERN() {
        return "^[a-z0-9]+([\\w\\.\\-]*[a-z0-9])*@[a-z0-9]+([\\w\\.\\-]*[a-z0-9])*$";
    },
    
    get PASSWORD_PATTERN() {
        return "\\w{6,}";
    },        
        
    user: "",

    password: "",

    dock: function() {
        console.log("Login: dock");
    },
    
    validate: function(element, value) {
        
        //When the logon button is clicked, the inputs in the user interface and
        //the values in the model are validated.
        if (element == document.querySelector("#login #logon"))
            return Composite.validate("#login #user, #login #password")
                    && !!(this.email || "").match(new RegExp(this.EMAIL_PATTERN, "i"))
                    && !!(this.password || "").match(new RegExp(this.PASSWORD_PATTERN, "i"));
        
        //When entering data in the input fields, only the input value in the
        //user interface is validated.
        return Composite.validate(element);
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