import "./style.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
export const content = document.getElementById("content");
console.log("Running");
onload = (event) => {content.appendChild(createHome());}
const buttons = document.querySelectorAll('.button');
buttons.forEach( (button) =>  {
    console.log(button.id);
    button.addEventListener('click', (e) => {
        console.log(e.id);
        switch (e.id) {
            case 'home-btn':
                createHome();
                break;
            case 'menu-btn':
                createMenu();
                break;
        }
    })
})
