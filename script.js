var menuicon = document.querySelector("#menu-icon")
var navbar = document.querySelector(".navbar")

menuicon .onclick = () => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}