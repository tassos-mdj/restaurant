import { content } from "./index.js";
export function createMenu(){
    content.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.setAttribute('id', 'wrapper-v');
    const h1 = document.createElement("h1");
    h1.classList.add('h1');
    h1.textContent = heading;
    wrapper.appendChild(h1);

    for (let i = 0; i < 4; i++) {
      let newCard = document.createElement('div');
      newCard.classList.add('card');
      let h2 = cardsContent[i].h2;
      let p = cardsContent[i].p;
      let newH2 = document.createElement("h2");
      newH2.textContent = h2;
      const menuSection = document.createElement('div');
      menuSection.classList.add('menu-section');
      
      for (let j = 0; j < p.length; j++) {
        let newP = p
        .map(entry => entry.split(' - '))
        .reduce((dishes, entry) => {
            dishes.push({
            no: entry[0],
            title: entry[1],
            price: entry[2],
            description: entry[3]
          }) 
        console.log(dishes);
        return dishes;
        },[])
        
        let menuItemNo = document.createElement('div');
        menuItemNo.classList.add('menu-item-no');
        menuItemNo.textContent = newP[j].no;
        menuSection.appendChild(menuItemNo);

        let menuItemTitle = document.createElement('div');
        menuItemTitle.classList.add('menu-item-title');
        menuItemTitle.textContent = newP[j].title;
        menuSection.appendChild(menuItemTitle);

        let menuItemPrice = document.createElement('div');
        menuItemPrice.classList.add('menu-item-price');
        menuItemPrice.textContent = newP[j].price;
        menuSection.appendChild(menuItemPrice);

        let menuItemDescription = document.createElement('div');
        menuItemDescription.classList.add('menu-item-description');
        menuItemDescription.textContent = newP[j].description;
        menuSection.appendChild(menuItemDescription);
      }
      newCard.appendChild(newH2);
      newCard.appendChild(menuSection);
      wrapper.appendChild(newCard);
      
    };
    
    console.log('running createMenu');
    return wrapper;
  }

const cardsContent = 
[
      {
        h2: "Appetizers & Sharables",
        p: ["1 - Southern Fried Green Tomatoes - $9.50 - Crispy outside, juicy inside, served with zesty remoulade sauce.",
          "2 - Mac 'n' Cheese Bites - $10.95 - Gooey cheddar mac 'n' cheese bites, breaded and fried to golden perfection.",
          "3 - Loaded Potato Skins - $12.95 - Baked potato skins filled with sour cream, cheese, bacon, and chives.",
          "4 - Chicken Tender Platter - $11.95 - Hand-breaded tenders served with honey mustard and BBQ sauces.",
          "5 - Onion Rings - $8.95 - Beer-battered onions rings with a side of smoky mayo dip."
        ]
      }
    ,
    
    {
      h2: "Appetizers & Sharables",
      p: ["1. Southern Fried Green Tomatoes - $9.50 - Crispy outside, juicy inside, served with zesty remoulade sauce.",
        "2. Mac 'n' Cheese Bites - $10.95 - Gooey cheddar mac 'n' cheese bites, breaded and fried to golden perfection.",
        "3. Loaded Potato Skins - $12.95 - Baked potato skins filled with sour cream, cheese, bacon, and chives.",
        "4. Chicken Tender Platter - $11.95 - Hand-breaded tenders served with honey mustard and BBQ sauces.",
        "5. Onion Rings - $8.95 - Beer-battered onions rings with a side of smoky mayo dip."
      ]
    }
    ,
    
    {
      h2: "Appetizers & Sharables",
      p: ["1. Southern Fried Green Tomatoes - $9.50 - Crispy outside, juicy inside, served with zesty remoulade sauce.",
        "2. Mac 'n' Cheese Bites - $10.95 - Gooey cheddar mac 'n' cheese bites, breaded and fried to golden perfection.",
        "3. Loaded Potato Skins - $12.95 - Baked potato skins filled with sour cream, cheese, bacon, and chives.",
        "4. Chicken Tender Platter - $11.95 - Hand-breaded tenders served with honey mustard and BBQ sauces.",
        "5. Onion Rings - $8.95 - Beer-battered onions rings with a side of smoky mayo dip."
      ]
    }
    ,
    {
      h2: "Appetizers & Sharables",
      p: ["1. Southern Fried Green Tomatoes - $9.50 - Crispy outside, juicy inside, served with zesty remoulade sauce.",
        "2. Mac 'n' Cheese Bites - $10.95 - Gooey cheddar mac 'n' cheese bites, breaded and fried to golden perfection.",
        "3. Loaded Potato Skins - $12.95 - Baked potato skins filled with sour cream, cheese, bacon, and chives.",
        "4. Chicken Tender Platter - $11.95 - Hand-breaded tenders served with honey mustard and BBQ sauces.",
        "5. Onion Rings - $8.95 - Beer-battered onions rings with a side of smoky mayo dip."
      ]
    }
    
];

const heading = "Menu";