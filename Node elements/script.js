var courses = [
  { courseName: "React JS bootcamp", price: 2.1 },
  { courseName: "Angular JS bootcamp", price: 2.7 },
  { courseName: "Vue JS bootcamp", price: 2.4 },
  { courseName: "Next JS bootcamp", price: 2.9 },
];

// <ul>
// <li class="list-group-item">
// React JS bootcamp <span class="float-right">$ 2.1</span>
// </li>
// </ul>

function generateList() {
  const unOrderdList = document.querySelector(".list-group");
  unOrderdList.innerHTML = "";
  courses.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    const name = document.createTextNode(element.courseName);
    listItem.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const spanText = document.createTextNode("$" + element.price);
    span.appendChild(spanText);

    listItem.appendChild(span);

    unOrderdList.appendChild(listItem);
  });
}
generateList();

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  courses.sort((a, b) => {
    return a.price - b.price;
  });
  generateList();
});

const button2 = document.getElementById("btn2");
button2.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price).reverse();
  generateList();
});
