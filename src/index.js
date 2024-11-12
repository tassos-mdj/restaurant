import "./style.css";
import { createHome } from "./home.js";
export const content = document.getElementById("content");
console.log("Running");
content.appendChild(createHome());
