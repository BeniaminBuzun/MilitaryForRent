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
  renderTeam(json.pages[1].people);
}

function renderTeam(team) {
  const peopleContainer = document.getElementById("people"); // Ensure you have <div id="people"></div> in your HTML

  team.forEach((member, index) => {
    // Create a new div for each team member
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("col-lg-4", "col-sm-6", "mb-4");

    // Set the HTML content for each team member
    memberDiv.innerHTML = `
      <div class="portfolio-item">
        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${
          index + 1
        }">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${member.img}" alt="..." />
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">${member.name}</div>
          <div class="portfolio-caption-subheading text-muted">${
            member.title
          }</div>
          <div class="portfolio-caption text-muted">${member.desc}</div>
        </div>
      </div>
    `;

    // Append the team member div to the container
    peopleContainer.appendChild(memberDiv);
  });
}
