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
    logo.src = "./images/DBDJSLOGOBLUEblackbackground.gif";
    logo.style.width = "100%";
    logo.style.maxWidth = "25vmin";
    logo.id = "logo"
    setTimeout(function () {
        body.append(logo)
        logo.addEventListener("animationend", function () {
            changeHeadTextAnimations()
        })
        logo.classList.add("fade")
    }, 1)
    };

function changeHeadTextAnimations() {
    const logo = document.getElementById("logo")
    const classes = Object.values(logo.classList)

    if (classes.includes("fade")) {
        logo.classList.remove("fade")
        setTimeout(function () {
            logo.classList.add("slide")
        }, 1)
    } else if (classes.includes("slide")) {
        setTimeout(function () {
            addRest()
        }, 1)
    }
}

function addRest() {
    const flex = document.createElement("div")
    flex.classList.add("flex")
    const about = document.createElement("div")
    about.classList.add("box")
    about.classList.add("white")
    

    flex.append(about)

    body.append(flex)

    const exampleFlex = document.createElement("div")
    exampleFlex.classList.add("flex")

    const exampleCategory = document.createElement("div")
    exampleCategory.classList.add("box")
    exampleCategory.classList.add("white")

    const exampleText = document.createElement("p")
    exampleText.classList.add("heading")
    exampleText.innerText = "DBD.JS v4"

    exampleCategory.append(exampleText)
    exampleFlex.append(exampleCategory)
    body.append(exampleFlex)

    const exampleCode = document.createElement("div")
    exampleCode.classList.add("flex")

    const Pre = document.createElement("pre")
    Pre.classList.add("box")
    Pre.id = "code"

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
