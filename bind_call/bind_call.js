var raunak = {
  name: "Raunak",
  id: 12,
  company: "wipro",
  getInfo: function () { // .this is pointing towards the "raunak"
    console.log(`
        Name is ${this.name},  
        id is ${this.id},
        and works in ${this.company}
        `);
  },
};

// Now if we want to use the obgectified function "getInfo" defined inside the raunak but with other input
// or variable then we can just copy the function and run there but we can just get a refrence of that
// function and use it without rewriting it

raunak.getInfo();

// this will print normal stuff that is defined

// lets define other one wihout getInfo function in it

var dj = {
  name: "rock",
  id: 2,
  company: "film",
};

// now if we want to print al this same as the getInfo function then we can use "bind"

raunak.getInfo.bind(dj);

// now the ".this" is pointing towards the "dj" and we have the refrence of getInfo and not the function
// call itself.
// Inorder to call it we have to add () after binding //***********

raunak.getInfo.bind(dj)();


//*******************************************************************************************************************

// SIMILARLY WE CAN USE "call" to directly call the function same like bind but no refrence direct call

var tabish = {
  name: "tabish",
  id: 1,
  company: "capgemini",
}


raunak.getInfo.call(tabish);