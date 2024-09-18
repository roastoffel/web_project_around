let botaoEdit = document.querySelector(".profile__edit-btn");

botaoEdit.addEventListener("click", function () {
  let popup = document.querySelector(".popup");
  popup.classList.add("popup_opened");
});

let botaoFecharEdit = document.querySelector(".popup__container_close-btn");

botaoFecharEdit.addEventListener("click", function () {
  let popup = document.querySelector(".popup");
  popup.classList.remove("popup_opened");
});
