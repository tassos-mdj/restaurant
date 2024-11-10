// import { content } from "./index.js";

let cardsContent = 
{
    "Card1": [
      {
        "h2": "The most delicious!",
        "p": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam saepe laudantium repellat molestias beatae, numquam dicta deleniti magni commodi voluptate."
      }
    ],
    "Card2": [
      {
        "h2": "The best ingredients",
        "p": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ],
    "Card3": [
      {
        "h2": "Supporting local suppliers",
        "p": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, incidunt ipsa nostrum sequi voluptatibus assumenda, labore quos a dolore dolorum similique."
      }
    ]
  }

function createCards(card){
    let newCard = document.createElement(cardsContent[card[0]]);
    console.log(newCard);
}

createCards(0);
// console.log(JSON.stringify(cardsContent, null, 2));


export function createHome(){
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Mdj food bar!";

}