// The Test API is intended for unit testing, but it can also be used for UI testing. 
// By default, the Test API is included in all distributions, including the productive one,
//and therefore the API must be consciously activated.
Test.activate();

// Sequence of interactions in the UI.
var sequence = {
    stack: [
        () => {
            window.location.href = "#" + new Date().getTime();
        },        
        () => {
            window.location.href = "#projects";
        },       
        () => {
            window.location.href = "#project#2";
        },
        () => {
            window.location.href = "#project#2xx";
        },        
        () => {
            window.location.href = "#about";
        },       
        () => {
            window.location.href = "#person#2";
        },
        () => {
            window.location.href = "#person#2xx";
        },
        () => {
            document.querySelector("#about > div:nth-child(2) > div:nth-child(3) > p:nth-child(5) > a:nth-child(1)").click();
            sequence.next();
        },
        () => {
            window.location.href = "#contact";
        },
        () => {
            document.querySelector("#contact #name").typeValue(" Simon Sommer ");
        },
        () => {
            document.querySelector("#contact #name").typeValue("Simon Sommer");
        },
        () => {
            document.querySelector("#contact #email").typeValue("simon.sommer");
        },
        () => {
            document.querySelector("#contact #email").typeValue("simon.sommer@local");
        },
        () => {
            document.querySelector("#contact #subject").typeValue(" Test ");
        },
        () => {
            document.querySelector("#contact #subject").typeValue("Test");
        },
        () => {
            document.querySelector("#contact #comment").typeValue(" Test ");
        },
        () => {
            document.querySelector("#contact #email").typeValue("simon.sommer");
        },
        () => {
            document.querySelector("#contact #email").typeValue("simon.sommer@local");
        },
        () => {
            if (DataSource.locale == "en")
                DataSource.localize("de");
            else DataSource.localize("en");
            Composite.render(document.body);
        },
        () => {
            if (DataSource.locale == "en")
                DataSource.localize("de");
            else DataSource.localize("en");
            Composite.render(document.body);
        }
    ],
    next() {
        if (this.stack.length <= 0)
            return false;
        Composite.asynchron(() => {
            sequence.stack.shift()();
        });
        return true;
    }
};

// The events from rendering set the pace.
// If there is no new impulse from the rendering after about 250ms, the next step in the test sequence is triggered.
// When the sequence is complete, the actual test is started.
var ticks = 0;
var timeout = null;
Composite.listen(Composite.EVENT_RENDER_END, () => {
    ticks++;
    if (timeout)
        window.clearInterval(timeout);
    timeout = window.setTimeout(() => {
        if (sequence.next())
            return;
        Test.listen(Test.EVENT_FINISH, () => {
            var status = Test.status();
            alert(new Date().toUTCString() + " Test is finished"
                    + "\n"
                    + "\n        " + status.queue.size + " task(s) were performed"
                    + "\n        " + status.queue.faults + " fault(s) were detected"
                    + "\n        total time " + (new Date().getTime() -status.queue.timing) + " ms"
                    + "\n"
                    + "\nFor more informations open the browser console.");
        });
        Test.start();
    }, 250);
});

// Logging object for collecting informations.
var logging = {
    stack: [],
    push(context, source, before, current) {
        
        //Internal method for creating simple string about a value or object.
        var toPlainString = (value) => {
            if (value == null
                    || String(value).trim() == "")
                return "";
            if (value instanceof Element) {
                var text = value.nodeName;
                if (toPlainString(value.id))
                    text += ":" + toPlainString(value.id);
                else if (toPlainString(value.getAttribute("name")))
                    text += ":" + toPlainString(value.getAttibute("name"));
                value = text;
            }
            return String(value);
        };
        
        var message = context;
        source = toPlainString(source);
        before = toPlainString(before);
        current = toPlainString(current);
        
        if (before == current)
            return;
        if (source)
            message += " " + source;
        if (before && !current)
            message += " " + (before || "<empty>") + " removed";
        else if (!before && current)
            message += " " + (current || "<empty>") + " added";
        else message += " " + (before || "<empty>") + " -> " + (current || "<empty>");
        
        // Special case navigation, there is no removed/added here.
        if (context == "NAV")
            message = message.replace(/\s*(removed|added)$/, "");
        
        if (this.stack.length <= 0
                || this.stack[this.stack.length -1] != message)
            this.stack.push(message);
    }
};

// The result x is used to register all path changes of the URL.
window.addEventListener("hashchange", (event) => {
    logging.push("NAV", null, null, event.newURL.match("#.*$")[0]);
});

// The MutationObserver is established to register all changes at the DOM.
(new MutationObserver((records) => {
    records.forEach((record) => {
        if (record.type == "characterData")
            logging.push("TXT", null, record.oldValue, record.target.textContent); 
        if (record.type == "attributes")
            logging.push("ATT", record.target, record.oldValue, record.target.getAttribute(record.attributeName));
        if (record.addedNodes) {
            record.addedNodes.forEach((node) => {
                logging.push("ADD", null, null, record.target);
            });
        }
        if (record.removedNodes) {
            record.removedNodes.forEach((node) => {
                logging.push("DEL", null, record.target, null);
            });
        }                
    });
})).observe(document.body, {childList:true, subtree:true, attributes:true, attributeOldValue:true, characterData:true});

// Test whether the navigation matches the expected sequence.
Test.create({test() {
    var navigation = logging.stack.filter(line => line.startsWith("NAV"));
    while (navigation.length) {
        var line = navigation.shift();
        if (line.match(/^NAV #\d+/))
            break;
    }
    var pattern = [
        "NAV #",
        "NAV #projects",
        "NAV #project#2",
        "NAV #project#2xx",
        "NAV #projects",
        "NAV #about",
        "NAV #person#2",
        "NAV #person#2xx",
        "NAV #about",
        "NAV ###",
        "NAV #contact"
    ];
    Assert.assertEquals(pattern.length, navigation.length);
    Assert.assertEquals(pattern.join(" "), navigation.join(" "));
}});

// Spot test whether the language switch has worked.
Test.create({test() {
    var pattern = [
        "TXT NACHRICHT SENDEN added",
        "TXT SEND MESSAGE added",
        "ATT INPUT:subject Betreff -> Subject",
        "ATT INPUT:subject Subject -> Betreff"
    ];
    pattern.forEach((text) => {
        Assert.assertTrue(text, logging.stack.includes(text));
    });
}});

// The function of the validation is tested by the changes of the attribute disabled.
Test.create({test() {
    var sequence = logging.stack.filter(line => line.startsWith("ATT BUTTON:submit disabled"));
    var pattern = [
        "ATT BUTTON:submit disabled removed",
        "ATT BUTTON:submit disabled added",
        "ATT BUTTON:submit disabled removed"
    ];
    Assert.assertEquals(pattern.length, sequence.length);
    Assert.assertEquals(pattern.join(" "), sequence.join(" "));
}});