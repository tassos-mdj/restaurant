import { content } from "./index.js";
export function createAbout(){
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


    console.log('running createAbout');
    return wrapper;
}

const heading = "About";

const para = [
    "Welcome to Mdj food bar, where every dish is a celebration of authentic flavors and a testament to our unwavering passion for culinary artistry. Nestled in the heart of Narnia, our restaurant is a warm and inviting oasis that beckons food enthusiasts from all walks of life to savor an unforgettable dining experience.",
    "Our journey began with a simple dream: to create a space where people could come together and share their love for food. A place where the aromas of fresh ingredients waft through the air, the sounds of laughter and clinking glasses mingle with the sizzle of the kitchen, and the taste of every bite transports you to the very essence of our rich cultural heritage.",
    "At Mdj food bar, we are more than just a restaurant; we are a community of food aficionados, a family dedicated to bringing you the finest culinary delights that Comfort Cuisine has to offer. Our talented team of chefs hail from various regions of the globe, each bringing their unique flair to our kitchen. Their collective expertise ensures that every dish is a masterful blend of traditional techniques and innovative twists, resulting in a gastronomic adventure that delights the senses and satisfies the soul.",
    "Our mission is to not only serve exceptional food but to also provide a space where memories are made. Whether it's a romantic dinner for two, a lively gathering with friends and family, or a business meeting sealed with a handshake over a shared plate, we strive to exceed your expectations with our impeccable service and cozy ambiance.",
    "Our commitment to quality starts with our ingredients, which we source from local markets and artisanal producers who share our dedication to sustainability and ethical farming. We believe that the best dishes are those that are made with love, care, and respect for the environment. This is why we are proud to support local suppliers and showcase the freshest produce in our dishes."
];

