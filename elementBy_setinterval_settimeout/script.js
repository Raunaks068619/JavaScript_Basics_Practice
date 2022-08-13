var counter = document.getElementById("counter");
var followers = document.getElementById("followers");

let count = 1;

setInterval(() => {
  if (count <= 1000) {
    counter.innerText = count;
    count++;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "Followers on instargram: ";
}, 5100);