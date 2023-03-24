// Modules (Composite-JavaScript) use their own scope. Variables and constants
// created and used here are not accessible outside and must be exported for use
// in the global scope, for which the macro #export is used.
const contact = {

    // Mandatory field with 1 to 48 characters without spaces at the beginning and end.
    // This rule does not require the requierd attribute.    
    get NAME_PATTERN() {
        return Messages["contact.name.pattern"];
    },
    
    get EMAIL_PATTERN() {
        return Messages["contact.email.pattern"];
    },
    
    get SUBJECT_PATTERN() {
        return Messages["contact.subject.pattern"];
    },

    get COMMENT_PATTERN() {
        return Messages["contact.comment.pattern"];
    },

    name: null,
    email: null,
    subject: null,
    comment: null,
    
    // The Validate method can be used twice.
    // Directly during input and for final validation before executing an action.
    // Thus only one central validation has to be implemented.
    //
    // The validation can have four states:
    //       true, not true, text, undefined/void
    //       
    //     true
    //     ----
    // The validation was successful.
    // No error is displayed and the default action of the browser is used.
    // If possible the value is synchronized with the model.
    // 
    //     not true and not undefined/void
    //     ----
    // The validation failed; an error is displayed.
    // A return value indicates that the default action of the browser should
    // not be executed and so it is blocked. In this case, a possible value is
    // not synchronized with the model.
    // 
    //     text
    //     ----
    // Text corresponds to: Invalid + error message.
    // If the error message is empty, the message from the message attribute is
    // used alternatively.
    // 
    //     undefined/void
    //     ----
    // The validation failed; an error is displayed.
    // A return value indicates that the default action of the browser should
    // nevertheless be executed. This behavior is important e.g. for the
    // validation of input fields, so that the input reaches the user
    // interface. In this case, a possible value is not synchronized with the
    // model.
    //
    //    see https://github.com/seanox/aspect-js/blob/master/manual/en/markup.md#validate
    validate(element, value) {
        
        // Determine whether a single field should be validated during input
        // or the complete form/model.
        //     The idea:
        // The element must have an ID and a corresponding property must exist in the model.
        let field = null;
        if (element instanceof Element)
            field = element.getAttribute("id");
        if (element != document.querySelector("#contact #" + field))
            field = null;
        if (!contact.hasOwnProperty(field)
                || typeof contact[field] === "function")
            field = null;
        
        // Validation of field name, if the element is name
        // or the validate method was called with no other field.
        //     - standard HTML5 validation is used 
        if (field == "name")
            return Composite.validate(element);

        // Validation of field email, if the element is email
        // or the validate method was called with no other field.
        //     - standard HTML5 validation is used 
        if (field == "email")
            return Composite.validate(element);
        
        // Validation of field subject, if the element is subject
        // or the validate method was called with no other field.
        //     - standard HTML5 validation is used 
        if (field == "subject")
            return Composite.validate(element);
        
        // Validation of field comment, if the element is comment
        // or the validate method was called with no other field.
        //    - custom validation, can incorporate the HTML5 validation
        if (field == "comment") {
            let pattern = new RegExp(contact.COMMENT_PATTERN);
            if ((value || "").match(pattern))
                return true;
            return Messages["contact.subject.message"];
        }
        
        // Validation of the x-button, here all input fields are validated.
        // The result is only true if no errors were detected.
        if (element == document.querySelector("#contact #submit")) {
            for (let field of ["name", "email", "subject", "comment"]) {
                let element = document.querySelector("#contact #" + field);
                if (!Composite.validate(element))
                    return false;
                let pattern = Messages["contact." + field + ".pattern"];
                if (!(this[field] || "").match(new RegExp(pattern)))
                    return false;
            }
        }
        
        return true;
    },
    
    submit: {
        onClick() {
            
            // In this example a mail is created.
            let mail = "mailto:mail@example-architects.local"
                     + "?cc=" + contact.email
                     + "&subject=" + encodeURIComponent(contact.subject)
                     + "&body=" + encodeURIComponent("Dear Sir or Madam\r\n\r\n" + contact.comment.trim() + "\r\n\r\nBest regards,\r\n" + contact.name);
            window.location.href = mail;

            return false;
        }    
    }
}

#export contact;