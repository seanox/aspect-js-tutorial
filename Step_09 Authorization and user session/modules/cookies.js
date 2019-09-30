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