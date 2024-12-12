const services_section_area = document.querySelector(".services_section_area");

homePageData();

let contentArray = [];

function homePageData() {
  fetch("./data/home.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load JSON file");
      }
      return response.json();
    })
    .then((data) => {
      createContent(data);
    });
}

const createContent = (inputObj) => {
  // const container = document.getElementById("container");

  for (const key in inputObj) {
    if (Array.isArray(inputObj[key])) {
      // Created big services box
      let services_big_box = document.createElement("div");
      services_big_box.classList.add("services_big_box");

      services_section_area.append(services_big_box);
      // Create the main heading for array key
      const mainHeading = document.createElement("h1");
      mainHeading.textContent = key.replaceAll("_", " ");
      services_big_box.appendChild(mainHeading);

      let services_big_box2 = document.createElement("div");
      services_big_box2.classList.add("services_big_box2");

      // Iterate over objects inside the array
      inputObj[key].forEach((obj) => {
        if (obj.homePage) {
          // Only include objects where enabled is true
          // Create subheading for each enabled object

          let services_box_2 = document.createElement("div");
          services_box_2.classList.add("services_box_2");

          services_big_box.appendChild(services_big_box2);

          services_big_box2.appendChild(services_box_2);
          const subHeading = document.createElement("h3");
          subHeading.textContent = obj.title;
          services_box_2.appendChild(subHeading);

          // Create a list for the items
          if (Array.isArray(obj.contents) && obj.contents.length > 0) {
            const list = document.createElement("ul");
            obj.contents.forEach((item) => {
              const listItem = document.createElement("li");
              listItem.textContent = item; // Add each item as a list item
              list.appendChild(listItem);
            });

            services_box_2.appendChild(list);
          }
        }
      });
    }
  }
};
