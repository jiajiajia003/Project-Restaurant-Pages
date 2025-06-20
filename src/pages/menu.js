const menuPage = () => {
    content.textContent = "";

    const menu = document.createElement("div");
    const menuText = document.createElement("p");
    menu.id = "textContainer"
    menuText.textContent = "This is menu page! No item here yet";
    menu.appendChild(menuText);
    content.appendChild(menu);
}

export {menuPage};
