import "./index.css"
import {menuPage} from "./pages/menu.js";
import {homePage} from "./pages/home.js";
import {aboutPage} from "./pages/about.js";

const init = () => {
    const homeButton = document.querySelector("#homeButton");
    const menuButton = document.querySelector("#menuButton");
    const aboutButton = document.querySelector("#aboutButton");
    menuButton.addEventListener("click", menuPage);
    homeButton.addEventListener("click", homePage);
    aboutButton.addEventListener("click", aboutPage);

    homePage();
}

init();
