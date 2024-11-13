import { content } from "./index.js";
export function createHome(){
    content.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.setAttribute('id', 'wrapper');
    const h1 = document.createElement("h1");
    h1.classList.add('h1');
    h1.textContent = heading;
    wrapper.appendChild(h1);

    for (let i = 0; i < 3; i++) {
      let newCard = document.createElement('div');
      newCard.classList.add('card');
      let h2 = cardsContent[i].h2;
      let p = cardsContent[i].p;
      let newH2 = document.createElement("h2");
      newH2.textContent = h2;
      let newP = document.createElement("p");
      newP.textContent = p;
      newCard.appendChild(newH2);
      newCard.appendChild(newP);
      wrapper.appendChild(newCard);
      
    };
    
    console.log('running createHome');
    return wrapper;
  }

const cardsContent = 
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

const heading = "Welcome to Mdj food bar!";