const url = "http://localhost:3000/recipies";
const ul = document.querySelector("ul");
const template = document.querySelector("template");

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((recipies) => {
    updateUI(recipies);
  })
  .catch((error) => {
    console.log(error);
  });

function updateUI(recipies) {
  recipies.forEach((recipe) => {
    const clone = template.content.cloneNode(true);

    const image = clone.querySelector("img");
    const h3 = clone.querySelector("h3");
    const p = clone.querySelector("p");
    const h4 = clone.querySelector("h4");

    image.src = recipe.imageUrl;
    image.width = 200;
    h4.textContent = recipe.cookingTime;
    h3.textContent = recipe.title;
    p.textContent = recipe.method;
    ul.appendChild(clone);
  });
}
