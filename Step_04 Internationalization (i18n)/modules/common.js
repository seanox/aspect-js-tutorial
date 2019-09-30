//Optional detection of changes of the browser language setting, which changes
//the user interface language setting if necessary.
window.setInterval(() => {
    var locale = (navigator.language || "").trim().toLowerCase();
    locale = locale.match(/^([a-z]+)/);
    if (!locale
            || locale[0] == DataSource.locale
            || !DataSource.locales.includes(locale[0]))
        return;
    DataSource.localize(locale[0]);
    Composite.render(document.body);
}, 250);