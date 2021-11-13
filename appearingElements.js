const dotsMenu = document.getElementById("dotsMenu")
const userMenu = document.getElementById("userMenu")
const appContainer = document.getElementById("googleAppsContainer")


// Toggle Containers Functions

function toggleAppContainer () {
    if(appContainer.style.display == "grid") {
        appContainer.style.display = "none"
        dotsMenu.style.backgroundColor = "unset"
    } else {
        appContainer.style.display = "grid"
        dotsMenu.style.backgroundColor = "#F0F0F0"
    }
}


// dotsMenu.addEventListener("click", event => {
//     appContainer.style.display = "grid"
// })

// userMenu.addEventListener("click", event => {
//     alert("clicked")
// })

// document.body.addEventListener("click", event => {
    
// })