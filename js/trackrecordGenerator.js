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
function content(json) {
  let x = document.getElementById("timeline");
  renderTimeline(json.pages[2].timeline);
}
function renderTimeline(operations) {
  const timelineContainer = document.getElementById("timeline"); // Make sure to have a <ul> with id="timeline" in your HTML
  let i = 0;
  let classes = ["timeline-image", "timeline-inverted"];
  operations.forEach((operation) => {
    // Create list item
    const listItem = document.createElement("li");
    listItem.classList.add(classes[i % 2]);
    // Inner HTML structure for each operation
    listItem.innerHTML = `
      <div class="${classes[0]} ">
        <img class="rounded-circle img-fluid" src="${operation.img}" alt="..."/>
      </div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h4>${operation.date}</h4>
          <h4 class="subheading">${operation.title}</h4>
        </div>
        <div class="timeline-body">
          <p class="text-muted">
            <strong>${operation.objective}</strong><br />
            ${operation.desc}<br />
            <strong>${operation.result}</strong>
          </p>
        </div>
      </div>
    `;
    i++;
    // Append each list item to the timeline container
    timelineContainer.appendChild(listItem);
  });
}
