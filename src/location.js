import { content } from "./index.js";
export function createLocation(){
    content.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.setAttribute('id', 'wrapper-v');
    const h1 = document.createElement("h1");
    h1.classList.add('h1');
    h1.textContent = heading;
    wrapper.appendChild(h1);
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    for (let i = 0; i < para.length; i++) {
        let newP = document.createElement("p");
        newP.textContent = para[i];
        newCard.appendChild(newP);
    }
    wrapper.appendChild(newCard);

    const map = document.createElement('div');
    map.classList.add('map');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6794.007353650078!2d12.512415630763222!3d42.529155631414035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sel!2sgr!4v1731680884198!5m2!1sel!2sgr" width="100%" height="450" style="border:0; border-radius:30px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    wrapper.appendChild(map); 
    
    
    return wrapper;
}

const heading = "Location";

const para = [
    "Welcome to [Restaurant Name], Your Culinary Destination in the Heart of [City Name]",
    "Nestled in the bustling neighborhood of [Neighborhood Name], our restaurant offers a sanctuary of exquisite dining where every bite tells a story of flavor and every sip is a toast to good company. At [Restaurant Name], we pride ourselves on being a cornerstone of the local community, serving up a delightful fusion of [Cuisine Type] cuisine with a modern twist that has captured the hearts and taste buds of food enthusiasts from near and far."
];