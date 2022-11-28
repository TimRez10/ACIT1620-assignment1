let theme = 0
let hidden = 0
let thingsWithColors = [
    "a:link",
    "a:visited",
    "a:hover",
    "h1, h2",
    "article",
    // "div button",
    // ".b-new-note",
    // ".b-dark-theme",
    ".note-area",
    // ".b-save",
    // ".b-cancel",
    "aside",
    "aside ul"
]

let noteFunctions = [
    ".note-area",
    ".b-save",
    ".b-cancel",
]

document.querySelector(".b-dark-theme").onclick = function() {

    if (theme === 0) {
        document.querySelector(".b-dark-theme").textContent = "Light Theme";
        theme = 1;
    }
    else if (theme === 1) {
        document.querySelector(".b-dark-theme").textContent = "Dark Theme";
        theme = 0;
    }
    for (x of thingsWithColors) {
        let element = document.querySelectorAll(x);
        element.forEach(singleElement =>  singleElement.classList.toggle("darkTheme"));
    }

}

function toggleNoteFunctions() {
        for (x of noteFunctions) {
            let element = document.querySelector(x);
            element.classList.toggle("hideElem");
        }
}

function newNoteShowClear() {

    let noteArea = document.querySelector(".note-area")

    if (noteArea.classList.contains("hideElem")) {
        toggleNoteFunctions();
    }
    else {
        noteArea.value = ' ';
    }
}

document.querySelector(".b-cancel").addEventListener("click",toggleNoteFunctions);
document.querySelector(".b-new-note").addEventListener("click",newNoteShowClear);



