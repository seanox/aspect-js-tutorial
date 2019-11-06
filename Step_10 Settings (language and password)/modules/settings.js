window['settings'] = {
    
    languages: null,
        
    dock: function() {
        this.languages = Array.from(DataSource.locales);
        this.languages.sort();
    },
    
    set automatic(automatic) {
        if (automatic)
            Session.setLanguage("auto");
        else Session.setLanguage(DataSource.locale);
    },
    
    get automatic() {
        return Session.getLanguage() == "auto";
    },    
    
    set language(language) {
        Session.setLanguage(language);
    },
    
    get language() {
        var language = Session.getLanguage();
        if (language == "auto")
            language = DataSource.locale;
        return language;
    }
};