const container = document.querySelector(".container")
const searcIcons = document.querySelectorAll(".search-bar i")

searcIcons.forEach(searchIcon => {
  searchIcon.addEventListener("click", ()=>{
    container.classList.toggle("change")
  })
})