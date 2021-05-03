const fades = document.querySelector("#logo");
const interval = setInterval(changeLoadingText, 1000);
const loadingText = document.getElementById("loadingText");
const body = document.querySelector("body");
let dots = 0;
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        loadingBody();
    } else {
        done();
    };
};

function changeLoadingText() {
if (dots > 2) {
    dots = 1;
} else {
    dots += 1;
};
loadingText.innerText = `Loading${new Array(dots).fill(".").join("")}`;
};

function loadingBody() {
    loadingText.style.visibility = "visible";
body.style.visibility = "hidden";
};

function done() {
clearInterval(interval);
loadingText.remove();
body.style.visibility = "visible";
startIntro();
};

function startIntro() {
    const logo = document.createElement("img");
    logo.src = "/images/DBDJSLOGOBLUEblackbackground.gif";
    logo.style.width = "100%";
    logo.style.maxWidth = "25vmin";
    logo.id = "logo"
    setTimeout(function () {
        body.append(logo)
        logo.addEventListener("animationend", function () {
            changeHeadTextAnimations()
        })
        logo.classList.add("fade")
    }, 2000)
    };

function changeHeadTextAnimations() {
    const logo = document.getElementById("logo")
    const classes = Object.values(logo.classList)

    if (classes.includes("fade")) {
        logo.classList.remove("fade")
        setTimeout(function () {
            logo.classList.add("slide")
        }, 1000)
    } else if (classes.includes("slide")) {
        setTimeout(function () {
            addRest()
        }, 1000)
    }
}

function addRest() {
    const flex = document.createElement("div")
    flex.classList.add("flex")
    const about = document.createElement("div")
    about.classList.add("box")
    about.classList.add("white")
    
    const aboutHead = document.createElement("p")
    aboutHead.classList.add("heading")
    aboutHead.innerText = "About"
    about.append(aboutHead)
    const aboutDescription = document.createElement("p")
    aboutDescription.innerText = "DBD.JS is a Package that was made for NodeJS Beginners, they are easy to maintain and use to build Discord Bots with ease";
    about.append(aboutDescription)
    about.onclick = function () {
        window.location.href = "https://npmjs.com/package/dbd.js"
    }

    flex.append(about)

    const inspiration = document.createElement("div")
    inspiration.classList.add("box")
    inspiration.classList.add("white")
    
    const inspirationHead2 = document.createElement("p")
    inspirationHead2.classList.add("heading")
    inspirationHead2.innerText = "Inspiration"
    inspiration.append(inspirationHead2)
    const inspirationDescription = document.createElement("p")
    inspirationDescription.innerText = "DBD.JS was inspired by a Software called Bot Designer for Discord, a good Software to build your bot easily.";
    inspiration.append(inspirationDescription)
    inspiration.onclick = function () {
        window.location.href = "https://botdesignerdiscord.com"
    }

    flex.append(inspiration)

    body.append(flex)

    const exampleFlex = document.createElement("div")
    exampleFlex.classList.add("flex")

    const exampleCategory = document.createElement("div")
    exampleCategory.classList.add("box")
    exampleCategory.classList.add("white")

    const exampleText = document.createElement("p")
    exampleText.classList.add("heading")
    exampleText.innerText = "Example"

    exampleCategory.append(exampleText)
    exampleFlex.append(exampleCategory)
    body.append(exampleFlex)

    const exampleCode = document.createElement("div")
    exampleCode.classList.add("flex")

    const Pre = document.createElement("pre")
    Pre.classList.add("box")
    Pre.id = "code"

    const example = document.createElement("code")

    //Code Highlighting

    //Requiring Package
    example.append(create("newLine", ""))
    example.append(create("declare", "const"))
    example.append(create("space", " "))
    example.append(create("used", "DBD"))
    example.append(create("space", " "))
    example.append(create("normal", "="))
    example.append(create("space", " "))
    example.append(create("function", "require"))
    example.append(create("normal", "("))
    example.append(create("string", "\"DBD.js\""))
    example.append(create("normal", ");"))
    
    //Initialize Bot
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(create("declare", "const"))
    example.append(create("space", " "))
    example.append(create("used", "bot"))
    example.append(create("space", " "))
    example.append(create("normal", "="))
    example.append(create("space", " "))
    example.append(create("declare", "new"))
    example.append(create("space", " "))
    example.append(create("used", "DBD"))
    example.append(create("normal", "."))
    example.append(create("class", "Bot"))
    example.append(create("normal", "({"))
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(create("tab", "  "))
    example.append(create("notused", "token"))
    example.append(create("normal", ":"))
    example.append(create("space", " "))
    example.append(create("string", "\"Discord Bot Token\""))
    example.append(create("normal", ","))
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(create("tab", "  "))
    example.append(create("notused", "prefix"))
    example.append(create("normal", ":"))
    example.append(create("space", " "))
    example.append(create("string", "\"!\""))
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(create("normal", "})"))

    // Bot.onMessage()
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(create("used", "bot"))
    example.append(create("normal", "."))
    example.append(create("function", "onMessage"))
    example.append(create("normal", "()"))

    // Bot.command({})
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(create("used", "bot"))
    example.append(create("normal", "."))
    example.append(create("function", "command"))
    example.append(create("normal", "({"))
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(create("tab", "  "))
    example.append(create("notused", "name"))
    example.append(create("normal", ":"))
    example.append(create("space", " "))
    example.append(create("string", "\"ping\""))
    example.append(create("normal", ","))
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(create("tab", "  "))
    example.append(create("notused", "code"))
    example.append(create("normal", ":"))
    example.append(create("space", " "))
    example.append(create("string", "`Pong! $botPing MS`"))
    example.append(document.createElement("br"))
    example.append(create("newLine", ""))
    example.append(create("normal", "})"))

    Pre.append(example)
    exampleCode.append(Pre)
    body.append(exampleCode)

   function create(className, text) {
       const element = document.createElement("span")
       element.classList.add(className)
       element.innerText = text 
       return element
   }

   //Code done
   const ButtonFlex = document.createElement("div")
   ButtonFlex.classList.add("button-flex")
   const DiscordButton = createButton("https://dbd.js.org/invite", ButtonFlex)
   DiscordButton.classList.add("button")
   DiscordButton.innerText = " Support Server"
   DiscordButton.classList.add("black")
   const NPMButton = createButton("https://npmjs.com/package/dbd.js", ButtonFlex)
   NPMButton.classList.add("button")
   NPMButton.innerText = " Install Package"
   NPMButton.classList.add("black")
   const Documentation = createButton("https://aoi.leref.ga", ButtonFlex)
   Documentation.classList.add("button")
   Documentation.classList.add("black")
   Documentation.innerText = " Get Started"

   const doc = document.createElement("i")
   doc.classList.add("fas", "fa-book")
   doc.style.color = "blue"
   Documentation.prepend(doc)

   const npm = document.createElement("i")
   npm.classList.add("fab", "fa-npm")
   npm.style.color = "#ff3434"
   NPMButton.prepend(npm)

   const discord = document.createElement("i")
   discord.classList.add("fab", "fa-discord")
   discord.classList.add("used")
   DiscordButton.prepend(discord)
   body.append(ButtonFlex)
   

   function createButton(link, flexElement) {
       const x = document.createElement("button")
       const a = document.createElement("a")
       a.href = link
       a.append(x)
       flexElement.append(a)

       return x
   }

   
}
