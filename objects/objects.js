var User = function (firstname, id) {
  this.firstname = firstname; //this is also a way to create an object
  this.id = id;
  this.getId = function () {
    console.log(this.id);
  };
};



User.prototype.getFirstName = function () {
    console.log(this.firstname);
}
// in production we cant just add objects to a single array function cause it will be a hazzle to solve this
// we can add a prototype to the User function to add a new object without adding it in User.
// Now, when we use "new" in the function, it will refer to the prototype + the whole objects defined in User.
// The word is to inject a new object into the function.

    

var raunak = new User("Raunak", 2);


console.log(raunak.getId());
