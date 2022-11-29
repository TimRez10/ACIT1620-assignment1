let theme = 0
let hidden = 0
let notesArray = [{title:"note one", body:"this is my first note"}]
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

let noteArea = document.querySelector(".note-area")
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

    if (noteArea.classList.contains("hideElem")) {
        toggleNoteFunctions();
    }
    else {
        noteArea.value = ' ';
    }
}

document.querySelector(".b-cancel").addEventListener("click",toggleNoteFunctions);
document.querySelector(".b-new-note").addEventListener("click",newNoteShowClear);

function saveTextAreaValue() {
    title = prompt("Enter a title for your note")
    noteObject = {title: title, body: noteArea.value}
    notesArray.push(noteObject)
    let newListItem = document.createElement('li');
    newListItem.textContent = title;
    document.querySelector("aside ul").appendChild(newListItem);
}

document.querySelector(".b-save").addEventListener("click",saveTextAreaValue);