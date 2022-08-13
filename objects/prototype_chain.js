// this can be understood in ths browser console better.
// we define the variable and then we look at dropdown provided to us.
// there is "__proto__" property in the object.
// inside that we have alot of properties and methods. we can access.

var lco  = {
    name:"Raunak"
}

// print lco in console
// look at __proto__

console.log(lco.hasOwnProperty("name"))

// hasOwnProperty is a method that checks if the property is defined in the object or not.
// like this there are many objects
