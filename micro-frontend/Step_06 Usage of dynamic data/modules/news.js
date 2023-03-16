#import connector

const API_HOST_URL = window.location.pathcontext + "/api/" + DataSource.locale;
const API_LIST_MARKET_URL = API_HOST_URL + "/listMarket";
const API_LIST_DATATYPES_URL = API_HOST_URL + "/listDatatype";
const API_SEARCH_NEWS_URL = API_HOST_URL + "/searchNews";
const API_SEND_NEWSLETTER_URL = API_HOST_URL + "/sendNewsletter";
const API_MEDIA_IMAGES_URL = window.location.pathcontext + "/api/media/";

const news = Reactive({
    market: {
        list: null,
        value: "",
        onChange() {
            if (this.value) {
                connector.call("GET", API_LIST_DATATYPES_URL + "/" + this.value, null, (status, json) => {
                    if (status instanceof Error)
                        throw status;
                    window.news.datatype.list = json;
                    window.news.datatype.value = "";
                });
            }
        }
    },
    datatype: {
        list: null,
        value: ""
    },
    list: {
    },
    function: {
    },
    recipient: {
    }
});

connector.call("GET", API_LIST_MARKET_URL, null, (status, json) => {
    if (status instanceof Error)
        throw status;
    window.news.market.list = json;
});

#export news;
