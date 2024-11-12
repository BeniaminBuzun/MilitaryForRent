let baseValue = 0;
let additionalCosts1 = 0;
let additionalCosts2 = 0;
let additionalCosts3 = 0;

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => generate(json));

function generate(json) {
  nav(json);
  content(json);
}
function nav(json) {
  let nav = document.getElementById("nav");
  for (const object of json.pages) {
    let li = document.createElement("li");
    li.classList.add("nav-item");
    let a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = object.url;
    a.innerHTML = object.title;
    li.appendChild(a);
    nav.appendChild(li);
  }
}
function content(json) {
  document.getElementById("gridCheck").addEventListener("change", (e) => {
    if (e.target.checked) {
      additionalCosts3 = 20000000;
      document.getElementById("data").style.display = "none";
      calculatePrice();
    } else {
      additionalCosts3 = 0;
      document.getElementById("data").style.display = "block";
      calculatePrice();
    }
  });

  document.getElementById("myForm").addEventListener("change", function (e) {
    e.preventDefault();
    let t = document.getElementById("options");
    t.innerHTML = "";

    console.log("switched");

    if (e.target.value == "Assasination") {
      reset();
      console.log("Assasination");

      t = document.getElementById("options");
      let x = document.createElement("label");
      x.innerHTML = "Select target";
      t.appendChild(x);
      x = document.createElement("select");
      x.classList.add("form-select");
      x.addEventListener("change", (e) => {
        baseValue = e.target.value;
        calculatePrice();
      });
      let c;
      for (el in json.pages[4].presidents) {
        c = document.createElement("option");
        c.innerHTML =
          json.pages[4].presidents[el].name +
          " (" +
          json.pages[4].presidents[el].country +
          ")";
        json.pages[4].presidents[el].name;
        c.value = json.pages[4].presidents[el].price_value;
        x.appendChild(c);
      }
      t.appendChild(x);
      x = document.createElement("div");
      x.classList.add("form-check");
      x.innerHTML = `<input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              No trace
            </label>`;
      x.addEventListener("change", (e) => {
        if (e.target.checked) {
          additionalCosts1 = 5000000;
        } else {
          additionalCosts1 = 0;
        }

        calculatePrice();
      });
      t.appendChild(x);
      x = document.createElement("div");
      x.classList.add("form-check");
      x.innerHTML = `<input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Blame third party
            </label>`;
      x.addEventListener("change", (e) => {
        if (e.target.checked) {
          additionalCosts2 = 15000000;
        } else {
          additionalCosts2 = 0;
        }
        calculatePrice();
      });
      t.appendChild(x);
    }

    if (e.target.value == "Coverup") {
      reset();
      console.log("Coverup");

      t = document.getElementById("options");
      t.innerHTML = "";
      let x1 = document.createElement("label");
      x1.innerHTML = "Select type of operation";
      t.appendChild(x1);
      x1 = document.createElement("select");
      x1.classList.add("form-select");
      x1.addEventListener("change", (e) => {
        baseValue = e.target.value;
        calculatePrice();
      });
      let c;
      for (el in json.pages[4].coverups) {
        c = document.createElement("option");
        c.innerHTML = json.pages[4].coverups[el].label;
        c.value = json.pages[4].coverups[el].price;
        x1.appendChild(c);
        c = document.createElement("label");
        c.innerHTML = json.pages[4].coverups[el].description;
        x1.appendChild(c);
      }
      t.appendChild(x1);
    }

    if (e.target.value == "overthrow of the government") {
      reset();
      console.log("overthrow of the government");

      t = document.getElementById("options");
      t.innerHTML = "";
      let x2 = document.createElement("label");
      x2.innerHTML = "Select type of operation";
      t.appendChild(x2);
      x2 = document.createElement("select");
      x2.classList.add("form-select");
      x2.addEventListener("change", (e) => {
        console.log(e.target.value);
        baseValue = e.target.value;
        calculatePrice();
      });
      let c;
      for (el in json.pages[4].govermeants) {
        c = document.createElement("option");
        c.innerHTML = json.pages[4].govermeants[el].country;
        c.value = json.pages[4].govermeants[el].price;
        x2.appendChild(c);
      }
      t.appendChild(x2);
    }
  });
}
function reset() {
  (baseValue = 0), (additionalCosts1 = 0), (additionalCosts2 = 0);
  calculatePrice();
}
function calculatePrice() {
  let x =
    parseInt(baseValue) +
    parseInt(additionalCosts1) +
    parseInt(additionalCosts2) +
    parseInt(additionalCosts3);

  document.getElementById("price").innerHTML = x + " $";
}
