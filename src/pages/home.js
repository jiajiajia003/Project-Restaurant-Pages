// Image Attribution: By Mcg2132 - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=79877802

const homePage = () => {
    content.textContent = "";

    const home = document.createElement("div");
    const homeText = document.createElement("p");
    home.id = "textContainer"
    homeText.textContent = "This is a fancy restaurant!";
    home.appendChild(homeText);
    content.appendChild(home);


    
}

export {homePage};