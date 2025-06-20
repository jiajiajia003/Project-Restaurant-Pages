const aboutPage = () => {
    content.textContent = "";

    const menu = document.createElement("div");
    const menuText = document.createElement("p");
    menu.id = "textContainer"
    menuText.textContent = "This is about page!";
    menu.appendChild(menuText);
    content.appendChild(menu);
}

export {aboutPage};
