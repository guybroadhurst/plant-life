const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

// when we click the toggleTag we toggle a class of open on the mainTag
// if open make toggleTag say close, and if not say menu
// and change the icon to close.svg
toggleTag.addEventListener("click", function() {
  mainTag.classList.toggle("open")

  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="../img/close.svg"> Close`
  } else {
    toggleTag.innerHTML = `<img src="../img/menu.svg"> Menu`
  }
})