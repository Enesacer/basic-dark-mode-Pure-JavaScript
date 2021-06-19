const body = document.querySelector("body")
const darkButton = document.querySelector(".dark-container")
const sun = document.querySelector(".bi-brightness-high")
const moon = document.querySelector(".bi-moon-fill")
darkButton.addEventListener("click", () => {
    darkButton.classList.toggle("dark",)
    if (darkButton.classList.contains("dark")) {
        body.style = `background-color:#222831; color:#f0f0f0`;
        moon.style=`display:none`
        sun.style=`display: flex`


    } else {
        body.style = `background-color: #fdfdfd;  color: black`;
        moon.style=`display:flex`
        sun.style=`display: none`


    }
})

