import "./style.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
import { createLocation } from "./location.js";
import { createContact } from "./contact.js";
export const content = document.getElementById("content");
onload = (event) => {content.appendChild(createHome());}
const buttons = document.querySelectorAll('button');
buttons.forEach( function (button) {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'home-btn':
                content.appendChild(createHome());
                break;
            case 'menu-btn':
                content.appendChild(createMenu());
                break;
            case 'about-btn':
                content.appendChild(createAbout());
                break;
            case 'location-btn':
                content.appendChild(createLocation());
                break;
            case 'contact-btn':
                content.appendChild(createContact());
                break;
        }
    })
})
