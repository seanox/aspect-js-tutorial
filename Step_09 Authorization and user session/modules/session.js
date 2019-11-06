window["Session"] = {
    
    get TIMEOUT() {
        return 15 *60 *1000;
    },
    
    get TIMEOUT_INTERVAL() {
        return 60 *1000;
    },    
    
    get COOKIE_EMAIL() {
        return "SESSION_COOKIE_EMAIL";
    },
    
    lastInteraction: -1,
    
    initialize: function() {
        
        if (Session.isAuthorized())
            Session.logon(Cookies.get(Session.COOKIE_EMAIL));

        document.body.addEventListener("input", Session.registerInteraction);
        document.body.addEventListener("click", Session.registerInteraction);

        window.setInterval(() => {
            if (!Session.isAuthorized()
                    || Session.lastInteraction +Session.TIMEOUT <= new Date().getTime())
                return;
            Session.logoff();
            Composite.render(document.body);
        }, Session.TIMEOUT_INTERVAL);
    },
    
    registerInteraction: function(event) {
        if (Session.isAuthorized())
            this.lastInteraction = new Date().getTime();
    },
    
    logon: function(email, password) {
        //TODO: Authentication via the backend insert here
        //      In case of an error (invalid credentials), a return value can be used to cause the calling method to show an error message.
        Cookies.put(Session.COOKIE_EMAIL, email); 
        //A functional path is called.
        //This means that SiteMap has to take control and we don't have to worry about a useful target.
        if (arguments.length < 2)
            return;
        SiteMap.navigate("###");
        Composite.render(document.body);
    },
    
    logoff: function() {
        Cookies.clear();    
        //A functional path is called.
        //This means that SiteMap has to take control and we don't have to worry about a useful target.
        SiteMap.navigate("###");
        Composite.render(document.body);
    },
    
    isAuthorized: function() {
        return typeof Cookies.get(Session.COOKIE_EMAIL) === "string";
    }
};

Session.initialize();