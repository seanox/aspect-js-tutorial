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
        if (!Session.isAuthorized()
                && path != "#login")
            return "#login";
        if (Session.isAuthorized()
                && path == "#login")
            return "#";
        return true;
    }
);

Composite.render.include("cookies");
Composite.render.include("session");