const keyword = ["oats cheela", "oats roti", "oats", "oats rooti", "oat roti", "oat rooti"];
const recipe = {
  "oatscheela": [
    "1 cup rolled oats (or powdered oats)",
    "1/2 cup gram flour (besan)",
    "1/2 cup finely chopped vegetables (carrot, bell pepper, onion, spinach, etc.)",
    "1-2 green chilies, finely chopped (optional)",
    "1/4 teaspoon turmeric powder",
    "1/4 teaspoon red chili powder (optional)",
    "1/2 teaspoon cumin seeds (jeera)",
    "Salt to taste",
    "1/2 teaspoon ginger (optional)",
    "Water (for consistency)",
    "1-2 teaspoons oil (for cooking)"
  ]
};

const recipe2 = {
  "oatsroti": [
    "1 cup oats flour",
    "1/2 cup wheat flour",
    "1/4 teaspoon cumin seeds",
    "1/4 teaspoon ajwain (carom seeds)",
    "Salt to taste",
    "1/2 teaspoon chili powder",
    "1/4 teaspoon turmeric powder",
    "Water as required",
    "Oil for cooking"
  ]
};

const oatscheelaInstruct = [
  "Grind the oats into a fine powder using a blender.",
  "In a mixing bowl, combine powdered oats, gram flour, chopped vegetables, turmeric powder, red chili powder, cumin seeds, salt, and ginger (if using).",
  "Gradually add water and mix to form a smooth batter of medium consistency.",
  "Heat a non-stick pan and add a few drops of oil.",
  "Pour a ladleful of batter onto the pan and spread it into a thin circle. Cook for 2-3 minutes on medium flame until golden brown.",
  "Flip carefully and cook the other side for 2 minutes.",
  "Serve hot with green chutney, yogurt, or ketchup."
];

const oatsrotiInstruct = [
  "Mix oats flour and wheat flour in a bowl.",
  "Add cumin seeds, ajwain, salt, chili powder, and turmeric powder.",
  "Gradually add water to form a dough.",
  "Roll the dough into small discs and cook on a heated pan.",
  "Flip and cook both sides until golden.",
  "Serve hot with curry or pickles."
];

document.getElementById("bilo").addEventListener("click", function () {
  let input = document.getElementById("input").value.toLowerCase(); // Input ko lowercase mein convert karna
  const containers = document.getElementsByClassName("container");

  let matchedRecipe = false; // Flag to check if a recipe matches
  
  for (let i = 0; i < keyword.length; i++) {
    if (input.includes(keyword[i])) { // Check if input contains keyword
      matchedRecipe = true;
      if (input.includes("oats cheela")) {
        displayRecipe("Oats Cheela Recipe", recipe.oatscheela, oatscheelaInstruct);
      } else if (input.includes("oats roti")) {
        displayRecipe("Oats Roti Recipe", recipe2.oatsroti, oatsrotiInstruct);
      }
    }
  }

  if (!matchedRecipe) {
    containers[0].innerHTML = "<p>No results found.</p>"; // If no match found
  }
});

function displayRecipe(title, ingredients, instructions) {
  const containers = document.getElementsByClassName("container");
  
  let div = document.createElement("div");
  div.id = "div1";
  div.innerHTML = "fittblidz:";
  containers[0].appendChild(div);

  let head = document.createElement("h2");
  head.id = "head2";
  head.innerHTML = title;
  containers[0].appendChild(head);

  let head2 = document.createElement("h3");
  head2.id = "head3";
  head2.innerHTML = "Ingredients:";
  containers[0].appendChild(head2);

  let ul = document.createElement("ul");
  ingredients.forEach(ingredient => {
    let li = document.createElement("li");
    li.innerHTML = ingredient;
    ul.appendChild(li);
  });
  containers[0].appendChild(ul);

  let head3 = document.createElement("h3");
  head3.id = "head3";
  head3.innerHTML = "Instructions:";
  containers[0].appendChild(head3);

  let ul2 = document.createElement("ul");
  instructions.forEach(instruction => {
    let li = document.createElement("li");
    li.innerHTML = instruction;
    ul2.appendChild(li);
  });
  containers[0].appendChild(ul2);
}
