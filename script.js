
const nav = document.getElementsByTagName("nav")[0];

const circle = document.getElementById("circle");

const pathCircle = document.getElementById("cpath");

const pathBookmark = document.getElementById("path");

const hamburger = document.getElementsByClassName("hamburger")[0];

const dropdown = document.getElementsByClassName("mobile-links")[0];

const body = document.getElementsByTagName("body")[0];

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("close");
    nav.classList.toggle("nav-background");
    pathCircle.classList.toggle("cpath");
    circle.classList.toggle("circle")
    pathBookmark.classList.toggle("path")
    body.classList.toggle("overflow");
});

const list = document.getElementsByClassName("f");

const illustration = document.getElementsByClassName("tab-illustration-hero")[0];

const tabHeading = document.getElementById("tab-header");

const tabParagraph = document.getElementById("tab-paragraph");

for (let index = 0; index < list.length; index++) {
    const element = list[index];
    element.addEventListener("click", function(){
        element.classList.add("f-list", "change-color");
        if(index === (list.length - 3)){
            list[index].classList.remove("first");
            list[index + 1].classList.remove("f-list", "change-color");
            list[index + 2].classList.remove("f-list", "change-color"); 
            illustration.classList.remove("tab-two");
            illustration.classList.remove("tab-three");
            tabHeading.innerHTML = "Bookmark in one click";
            tabParagraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";             
        }

        if(index === (list.length - 2)){
            list[index - 1].classList.remove("f-list", "first", "change-color");
            list[index + 1].classList.remove("f-list", "change-color");         
            illustration.classList.add("tab-two");
            illustration.classList.remove("tab-three");
            tabHeading.innerHTML = "Intelligent search";
            tabParagraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";   
        }

        if(index === (list.length - 1)){
            list[index - 1].classList.remove("f-list", "change-color");
            list[index - 2].classList.remove("f-list", "first", "change-color");
            illustration.classList.add("tab-three");
            illustration.classList.remove("tab-two");
            tabHeading.innerHTML = "Share your bookmarks";
            tabParagraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";   
        }
    });
}

const questions = document.getElementsByClassName("question");

for (let question = 0; question < questions.length; question++) {   
    const qelement = questions[question];
    qelement.addEventListener("click", function(event){
        qelement.nextElementSibling.classList.toggle("visible");
        qelement.nextElementSibling.firstElementChild.classList.toggle("position");
        qelement.lastElementChild.classList.toggle("rotate");
    });
}

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const input = document.getElementById("text");

const error = document.getElementById("error");

const message = document.getElementsByClassName("message")[0];

const button = document.getElementById("submit");

button.addEventListener("click", function(){

    var content = input.value;
    if(content.match(validRegex) == null){
        message.classList.add("show");
        error.classList.add('show')
        input.focus();
    }

    window.onclick = function(event){
        if(event.target.matches('#text')){
            if (message.classList.contains("show") && error.classList.contains("show")) {
                message.classList.remove("show");
                error.classList.remove("show");
            }
        }
    }
});

window.onscroll = function(){
    var navbar = document.getElementsByTagName("nav")[0];
    var sticky = navbar.offsetTop;
    var height = navbar.offsetHeight

    if (sticky > height) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};