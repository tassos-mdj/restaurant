import { content } from "./index.js";
export function createMenu(){
    
    content.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.setAttribute('id', 'wrapper');
    const h1 = document.createElement("h1");
    h1.classList.add('h1');
    h1.textContent = "This is our menu!";
    wrapper.appendChild(h1);

   
    
    console.log('running createMenu');
    return wrapper;
  }