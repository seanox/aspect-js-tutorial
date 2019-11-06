window['credentials'] = {
    
    validate: function(element, value) {
        
        var composite = document.querySelector("#credentials");
        
        //Checking the current password
        if (element == composite.querySelector("#password\\:current")
                && (value || "").hashCode() != Cookies.get(Session.COOKIE_PASSWORD))
            return Messages["credentials.invalid.message"];
        
        //Password and confirmation must match
        if (element == composite.querySelector("#password\\:password")
                && credentials.password.confirmation) {
            if (value.hashCode() != credentials.password.confirmation.hashCode())
                return Messages["credentials.difference.message"];
        } else if (element == composite.querySelector("#password\\:confirmation")
                && credentials.password.password) {
            if (value.hashCode() != credentials.password.password.hashCode())
                return Messages["credentials.difference.message"];
        }

        //Submit check all input field before.
        if (element == composite.querySelector("#submit")) {
            return credentials.validate(composite.querySelector("#password\\:current"), this.password.current) === true
                    && credentials.validate(composite.querySelector("#password\\:confirmation"), this.password.confirmation) === true
                    && credentials.validate(composite.querySelector("#password\\:password"), this.password.password) === true;
        }

        //Triggering standard HTML5 validation.
        return Composite.validate(element);
    },  
    
    password: {
        
        current: null,
        
        password: null,
        
        confirmation: null
    },
    
    submit: {
        
        onClick: function() {
            
            //In this example, it makes no sense to do anything.
        }
    }
};