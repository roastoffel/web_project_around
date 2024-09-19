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

let formElement = document.querySelector("form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector("input[name='name']");
  let jobInput = document.querySelector("input[name='job']");

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  let profileNameElement = document.querySelector(".profile__name");
  let profileJobElement = document.querySelector(".profile__job");

  profileNameElement.textContent = nameValue;
  profileJobElement.textContent = jobValue;
}

formElement.addEventListener("submit", handleProfileFormSubmit);
