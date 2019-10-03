window["Cookies"] = {

    validate: function(name, value, expiration) {
        if (typeof name !== "string")
            throw new TypeError("Invalid name: " + typeof name);        
        name = (name || "").trim();
        if (!name.match(/\w+/))
            throw Error("Invalid name" + name ? ": " + name : "");
        
        if (typeof expiration !== "number"
                && typeof expiration !== "undefined")
            throw new TypeError("Invalid expiration: " + typeof expiration);
        if (typeof expiration === "number"
                && expiration < 0)
            throw new Error("Invalid expiration: " + typeof expiration);
    },

    list: function() {
        var entries = (document.cookie || "").trim();
        entries = entries ? entries.split(/\s*;\s*/) : [];
        entries = entries.map(entry => entry.replace(/=.*$/g, ""));
        return entries;
    },

    put: function(name, value, expiration) {
        this.validate(name, value, expiration);
        name = (name || "").trim().toLowerCase();
        var cookie = name + "=" + String(value).encodeHex();
        if (typeof expiration === "number") {
            var expires = new Date();
            expires.setTime(expires.getTime() +expiration);
            cookie += "; expires=" + expires.toUTCString();
        }
        cookie += "; path=" + window.location.pathname;
        cookie += "; domain=" + window.location.hostname;
        document.cookie = cookie; 
    },
        
    get: function(name) {
        this.validate(name);
        name = (name || "").trim().toLowerCase();
        var entries = (document.cookie || "").trim();
        entries = entries ? entries.split(/\s*;\s*/) : [];
        for (var loop = 0; loop < entries.length; loop++)
            if (entries[loop].trim().startsWith(name + "="))
                return entries[loop].substring(name.length +1).decodeHex();
        return null;
    },
    
    remove: function(name) {
        this.validate(name);
        name = (name || "");
        document.cookie = name + "="
                + "; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                + "; path=" + window.location.pathname
                + "; domain=" + window.location.hostname;
        document.cookie = name.trim().toLowerCase() + "="
                + "; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                + "; path=" + window.location.pathname
                + "; domain=" + window.location.hostname;
    },
    
    clear: function() {
        this.list().forEach((name) => {
            Cookies.remove(name);
        });
    }
};