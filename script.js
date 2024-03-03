// Selecionar elementos DOM
const menuIcon = document.querySelector(".menu-icon")
const navbar = document.querySelector(".navbar")
const sections = document.querySelectorAll("section")
const navlinks = document.querySelectorAll("header nav a")

// Função para atualizar a barra de navegação ao rolar
window.onscroll = function () {
  const scrollY = window.scrollY

  sections.forEach((sec) => {
    const offsetTop = sec.offsetTop
    const offsetHeight = sec.offsetHeight
    const sectionId = sec.getAttribute("id")

    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
      navlinks.forEach((links) => links.classList.remove("active"))
      document
        .querySelector(`header nav a[href="#${sectionId}"]`)
        .classList.add("active")
    }
  })
}

// Função para alternar a visibilidade da barra de navegação
menuIcon.onclick = function () {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}
