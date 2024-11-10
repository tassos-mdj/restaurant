// import { content } from "./index.js";
const content = document.getElementById("content");
[
      {
        h2: "The most delicious!",
        p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam saepe laudantium repellat molestias beatae, numquam dicta deleniti magni commodi voluptate."
      }
    ,
    
      {
        h2: "The best ingredients",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ,
    
      {
        h2: "Supporting local suppliers",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, incidunt ipsa nostrum sequi voluptatibus assumenda, labore quos a dolore dolorum similique."
      }
    
  ];


  for (let i=0; i > 2; ++i) {
    let newCard = document.createElement('div');
    ({h2, p} = cardsContent[i]);
    let newH2 = document.createElement("h2");
    newH2.textContent = h2;
    console.log(newH2);
    let newP = document.createElement("p");
    newP.textContent = p;
    newCard.appendChild(newH2);
    newCard.appendChild(newP);
    content.appendChild(newCard);
  }


// console.log(JSON.stringify(cardsContent, null, 2));


// export function createHome(){
//     const wrapper = document.createElement("div");
//     const h1 = document.createElement("h1");
//     h1.textContent = "Welcome to Mdj food bar!";

// }