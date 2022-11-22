let theme = 0

document.querySelector(".b-dark-theme").onclick = function() {
    if (theme === 0) {
        theme = 1
        console.log("dark theme button pressed")
        document.querySelector(".b-dark-theme").textContent = "Light Theme"
    }
    else if (theme === 1) {
        theme = 0
        console.log("light theme button pressed")
        document.querySelector(".b-dark-theme").textContent = "Dark Theme"
    }
}