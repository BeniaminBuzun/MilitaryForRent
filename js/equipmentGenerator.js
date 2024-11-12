fetch("./data.json")
  .then((response) => response.json())
  .then((json) => generate(json));

function generate(json) {
  nav(json);
  content(json);
}
function nav(json) {
  console.log(json);
  let nav = document.getElementById("nav");
  for (const object of json.pages) {
    console.log(object);
    let li = document.createElement("li");
    li.classList.add("nav-item");
    let a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = object.url;
    a.innerHTML = object.title;
    li.appendChild(a);
    nav.appendChild(li);
  }
  //   for (let i = 0; i<)
  //   let block = " <li class=\"nav-item\"><a class=\"nav-link\" href=\"./team.html\">Our Team</a> </li>";
}
function content(json) {}
