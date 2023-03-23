window['about'] = {
    contact: {
        onClick(event) {
            var mail = event.target.getAttribute("value");
            if (!mail)
                return false;
            
            var xml = DataSource.fetch("xml://team");
            var xpath = "/team/person[email=\"" + mail + "\"]";
            xml = xml.evaluate ? xml.evaluate(xpath, xml, null, XPathResult.ANY_TYPE, null) : xml.selectNodes(xpath);
            var person = xml.iterateNext();
            if (!person)
                return;
            person = Object.parse(person);

            var title = Messages["contact.mail.title"];
            title = Expression.eval(title);
            var message = Messages["contact.mail.message"];
            message = message.replace(/^ +/mg, "");
            message = message.replace(/\{1\}/g, person.name.match(/^\w+/));
            
            window.location.href = "mailto:" + person.email + "?subject=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(message);
            
            return true;
        }
    }
}