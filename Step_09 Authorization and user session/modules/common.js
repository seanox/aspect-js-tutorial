//The SiteMap is configured.
//This is about paths, faces and facets.
//    see also https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#sitemap
//             https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#virtual-paths
//
//Faces are composites to which a virtual path is assigned in the application.
//If the application is called with a specific path, only the corresponding face/composite is shown.
//If this face/composite is a child of other parent faces/composites, they will also be shown.
//Facets are a kind of tile in a face.
//They do not have their own path and are shown when the surrounding face is shown.
//    see also https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#sitemap
//
//The SiteMap is configured with all paths of the corresponding Faces/Composites and assigned Facets. 
//The SiteMap then takes care of showing and hiding the faces/composites matching the paths.
//Showing and hiding means that the composites are removed and inserted in the DOM, it is not a CSS trick.
//In the background, a module concept is working that docks the composites for initialization and undocks them accordingly for removing.
//    see also https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#binding
//             https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#dock
//             https://github.com/seanox/aspect-js/blob/master/manual/en/mvc.md#undock
//
//At the moment we are concentrating on the login.
//The user has to log in before he can do more.
//Authorization is not yet implemented.
//So we redirect everything to the login face / login path.
SiteMap.customize({
    "#": ["welcome"],
    "#login": ["title"],
    "#settings": []},
    (path) => {
        if (!Session.authorized
                && path != "#login")
            return "#login";
        if (Session.authorized
                && path == "#login")
            return "#";
        return true;
    }
);

window["Cookies"] = {

    index: [],    
    
    encode: function(text, lower) {
        text = (text || "").trim();
        if (lower)
            text = text.toLowerCase();
        return text.encodeHex();
    },
        
    put: function(name, value, duration) {
        if (typeof duration !== "undefined"
                && typeof duration !== "number")
            throw new TypeError("Invalid duration: " + typeof duration);
        if (typeof duration === "undefined"
                || duration < 0)
            duration = 7 *24 *60 *60 *1000;
        var expires = new Date();
        expires.setTime(expires.getTime() +duration);
        document.cookie = this.encode(name, true)
                + "=" + this.encode(value)
                + "; expires=" + expires.toUTCString()
                + "; path=" + window.location.pathname
                + "; domain=" + window.location.hostname;
        name = (name || "").trim().toLowerCase();
        if (!this.index.includes(name))
            this.index.push(name);
    },
    
    get: function(name) {
        name = this.encode(name, true);
        var entries = document.cookie.split(';');
        for (var loop = 0; loop < entries.length; loop++)
            if (entries[loop].trim().startsWith(name + "="))
                return entries[loop].substring(name.length +1).decodeHex();
        return null;
    },
    
    remove: function(name) {
        document.cookie = this.encode(name, true)
                + "=xxxx"
                + "; expires=" + new Date().toUTCString()
                + "; path=" + window.location.pathname
                + "; domain=" + window.location.hostname;
    },
    
    clear: function() {
        this.index.forEach((name) => {
            Cookies.remove(name);
        });
    }
};

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
    
    registerInteraction: function(event) {
        if (Session.authorized)
            this.lastInteraction = new Date().getTime();
    },
    
    logon: function(email, password) {
        //TODO: Authentication via the backend insert here
        //      In case of an error (invalid credentials), a return value can be used to cause the calling method to show an error message.
        Cookies.put(Session.COOKIE_EMAIL, login.email); 
        //A functional path is called.
        //This means that SiteMap has to take control and we don't have to worry about a useful target.
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
    
    get authorized() {
        return typeof Cookies.get(Session.COOKIE_EMAIL) === "string";
    }   
};

if (Session.authorized)
    Session.logon(Cookies.get(Session.COOKIE_EMAIL));

document.body.addEventListener("input", Session.registerInteraction);
document.body.addEventListener("click", Session.registerInteraction);

window.setInterval(() => {
    if (!Session.authorized
            || Session.lastInteraction +Session.TIMEOUT > new Date().getTime())
        return;
    Session.logout();
    Composite.render(document.body);
}, Session.TIMEOUT_INTERVAL);