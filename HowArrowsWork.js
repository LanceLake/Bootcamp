

// These 2 functions are exactly the same.
function helloWorld(userName) {console.log("Hello " + userName);}
let annonFunction = (userName) => {console.log("Hello " + userName);}

// let [functionName] = ([variables being passed in]) => {[actions the function takes];}


let personalName = "Joseph";
annonFunction(personalName);
helloWorld(personalName);