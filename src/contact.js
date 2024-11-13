import { content } from "./index.js";
export function createContact(){
    content.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.setAttribute('id', 'wrapper-v');
    const h1 = document.createElement("h1");
    h1.classList.add('h1');
    h1.textContent = heading;
    wrapper.appendChild(h1);

    console.log('running createContact');
    return wrapper;
}

const heading = "Contact";