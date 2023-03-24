// Modules (Composite-JavaScript) use their own scope. Variables and constants
// created and used here are not accessible outside and must be exported for use
// in the global scope, for which the macro #export is used.
const about = {
    contact: {
        onClick(event) {
            let mail = event.target.getAttribute("value");
            if (!mail)
                return false;

            let xml = DataSource.fetch("xml://team");
            let xpath = "/team/person[email=\"" + mail + "\"]";
            xml = xml.evaluate ? xml.evaluate(xpath, xml, null, XPathResult.ANY_TYPE, null) : xml.selectNodes(xpath);
            let person = xml.iterateNext();
            if (!person)
                return;
            person = Object.parse(person);

            let title = Messages["contact.mail.title"];
            title = Expression.eval(title);
            let message = Messages["contact.mail.message"];
            message = message.replace(/^ +/mg, "");
            message = message.replace(/\{1\}/g, person.name.match(/^\w+/));
            
            window.location.href = "mailto:" + person.email + "?subject=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(message);
            
            return true;
        }
    }
}

#export about;