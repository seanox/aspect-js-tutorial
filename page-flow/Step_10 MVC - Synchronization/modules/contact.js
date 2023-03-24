// Modules (Composite-JavaScript) use their own scope. Variables and constants
// created and used here are not accessible outside and must be exported for use
// in the global scope, for which the macro #export is used.
const contact = {
    name: null,
    email: null,
    subject: null,
    comment: null
}

#export contact;