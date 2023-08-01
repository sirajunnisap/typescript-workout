"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addtwo(num) {
    return num + 2;
}
addtwo(5);
function signUpUser(name, email, isPaid) { }
signUpUser("sirajunnisa", "sir@gmail.com", true);
//if don't need to use third parameter
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("sirajunnisa", "sira@gmail.com");
//return type
function sum(num) {
    return num + 5;
}
sum(8);
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//if we are using error message we need to user void,void means it's not returning anything (return nothing)
function consoleError(errmsg) {
    console.log(errmsg);
}
//some functions never return a value ,this we need to some tome handling errors (never returns a value that simply means the function never return a value)
function handleError(errmsg) {
    throw new Error(errmsg);
}
//function ()=parameter where you pass :{}=return an object type and {}=this definiton 
function user() {
    return {};
}
function userObj() {
    return { name: "siransa", price: 5 };
}
function createUser(_a) {
    var string = _a.name, boolean = _a.ispaid;
}
var newUser = { name: "sir", ispaid: false, email: "sir@gmail.com" };
createUser(newUser);
function creatingUser(user) {
    return { name: "", email: "", isActive: false };
}
var myUser = {
    _id: "234",
    name: "sirajunnisa",
    email: "sdfgfrw@gmail.com",
    isActive: true
};
myUser.email = "sir@gmail.com";
