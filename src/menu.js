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
        
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        let menuItemNo = document.createElement('div');
        menuItemNo.classList.add('menu-item-no');
        menuItemNo.textContent = newP[j].no;
        menuItem.appendChild(menuItemNo);

        let menuItemTitle = document.createElement('div');
        menuItemTitle.classList.add('menu-item-title');
        menuItemTitle.textContent = newP[j].title;
        menuItem.appendChild(menuItemTitle);

        let menuItemPrice = document.createElement('div');
        menuItemPrice.classList.add('menu-item-price');
        menuItemPrice.textContent = newP[j].price;
        menuItem.appendChild(menuItemPrice);

        let menuItemDescription = document.createElement('div');
        menuItemDescription.classList.add('menu-item-description');
        menuItemDescription.textContent = newP[j].description;
        menuItem.appendChild(menuItemDescription);

        menuSection.appendChild(menuItem);
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
      h2: "Soups & Salads",
      p: ["6 - Hearty Chicken Noodle Soup - $7.95 (cup) / $9.95 (bowl) - Homemade chicken soup with egg noodles and tender chunks of chicken.",
          "7 - Caesar Salad - $8.95 - Crisp romaine lettuce, homemade croutons, and creamy caesar dressing.",
          "8 - Cobb Salad - $10.95 - Mixed greens, hard-boiled egg, avocado, bacon, blue cheese, and grilled chicken.",
          "9 - House Salad - $7.95 - Fresh greens, tomatoes, cucumbers, and croutons with your choice of dressing."
        ]
    }
    ,
    
    {
      h2: "Entrees",
      p: ["10 - Meatloaf - $15.95 - A classic comfort food with a side of mashed potatoes and gravy.",
          "11 - Fried Chicken & Waffles - $18.95 - Buttermilk fried chicken atop a fluffy waffle, served with sweet maple syrup.",
          "12 - Shrimp 'n' Grits - $17.95 - Creamy cheddar grits with sautéed shrimp in a spicy Cajun sauce.",
          "13 - Chicken Pot Pie - $16.95 - Flaky crust filled with chicken, vegetables, and a rich, creamy sauce.",
          "14 - BBQ Ribs - $22.95 - Slow-cooked St. Louis style ribs, smothered in our signature BBQ sauce.",
          "15 - Lasagna - $16.95 - Layers of pasta, meat sauce, cheese, and baked to perfection.",
          "16 - Beef Stroganoff - $17.95 - Tender beef in a rich mushroom and sour cream sauce over egg noodles.",
          "17 - Fish 'n' Chips - $16.95 - Beer-battered fish with crispy fries and tartar sauce."
      ]
    }
    ,
    {
      h2: "Sandwiches & Wraps",
      p: ["18 - Grilled Cheese & Tomato Soup - $12.95 - Classic grilled cheese sandwich served with a side of warm tomato soup.",
          "19 - Philly Cheesesteak - $14.95 - Thinly sliced beef, melted cheese, onions, and peppers on a hoagie roll.",
          "20 - Chicken Parmesan - $13.95 - Breaded chicken breast smothered in marinara and mozzarella cheese.",
          "21 - Turkey Club - $12.95 - Oven-roasted turkey, bacon, avocado, and Swiss cheese on toasted sourdough."
      ]
    }
    
];

const heading = "Menu";