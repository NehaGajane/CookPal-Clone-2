const hamburgerBtn = document.querySelector("#hamburger-menu");
// const hamburgerMenu = document.querySelector('#ham-menu-options');

const hamburgMenuIsActive = false;
let searchIsActive = false;
let allRecipes;

//open or close menu in mobile view
hamburgerBtn.addEventListener("click", () => {
  if (!hamburgMenuIsActive) {
    document.getElementById("ham-menu-options").style.display = "block";
    hamburgMenuIsActive = true;
  } else {
    document.getElementById("ham-menu-options").style.display = "none";
    hamburgMenuIsActive = false;
  }
});


//close mobile menu when clicked outside the div
document.addEventListener("mouseup", function (e) {
  let menuContainer = document.querySelector("#ham-menu-options");

  if (!menuContainer.contains(e.target)) {
    menuContainer.style.display = "none";
    hamburgMenuDisplay = 0;
  }
});


//get the recipes container
function displayRecipes(recipesToDisplay) {
  allRecipes.innerHTML = "";

  recipesToDisplay.forEach((recipe) => {
    const newRecipeSet = document.createElement("div");
    newRecipeSet.className = "recipeSet";

    //create a new div element for the recipe card
    const newRecipe = document.createElement("div");
    for (let k = 0; k < 3; k++) {
      newRecipe.className = "recipe";

      newRecipe.innerHTML = `
        <img class="recipeImg" src="${recipe.imageSrc}">
        <p class="recipeType">${recipe.type}</p>
        <h2 class="recipeName">${recipe.name}</h2>
        <p class="recipeTime">${recipe.time}</p>
        <p class="recipeRating">${recipe.rating}</p>
        <img class="star" src="./star.png">
        <img class="comment" src="./chat.png">
        <img class="heart" src="./heart.png">
    `;
    }
    newRecipeSet.appendChild(newRecipe);
    allRecipes.appendChild(newRecipeSet);
  });
}

function displayOriginalRecipes() {
  allRecipes = document.querySelector("#recipes");

  for (let i = 0; i < recipes.length; i++) {
    const newRecipeSet = document.createElement("div");
    newRecipeSet.className = "recipeSet";
    newRecipeSet.style.display = 'flex';

    for (let k = 0; k < 3; k++) {

      //create a new div element for the recipe card
      const newRecipe = document.createElement("div");
      newRecipe.className = "recipe";

      newRecipe.innerHTML = `
        <img class="recipeImg" src="${recipes[i].imageSrc}">
        <p class = "recipeType">${recipes[i].type}</p>
        <h2 class = "recipeName">${recipes[i].name}</h2>
        <p class = "recipeTime">${recipes[i].time}</p>
        <p class = "recipeRating">${recipes[i].rating}</p>
        <img class = "star" src = "./star.png">
        <img class = "comment" src = "./chat.png">
        <img class = "heart" src = "./heart.png">
        `;

      newRecipeSet.appendChild(newRecipe);
      i++;
    }
    allRecipes.appendChild(newRecipeSet);
  }
}

displayOriginalRecipes();

//dynamic search function
const searchInput = document.querySelector(".search-bar");

function filterRecipes(searchTerm) {
  if (searchTerm == null) {
    displayOriginalRecipes();
    allRecipes.style.display = 'flex';
  }
  
  else {
    let lowerCaseSearchTerm = searchTerm.toLowerCase();

    let filteredRecipes = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        recipe.type.toLowerCase().includes(lowerCaseSearchTerm) ||
        recipe.time.toLowerCase().includes(lowerCaseSearchTerm)
    );

    displayRecipes(filteredRecipes);
  }
}

// Event listener for the search input
searchInput.addEventListener("input", function () {
  const input = searchInput.value.trim();
  filterRecipes(input);
});

///show all recipes button
const allRecipesBtn = document.querySelector('#allRecipes');

allRecipesBtn.addEventListener('click', function(event) {
    displayOriginalRecipes();
})

  