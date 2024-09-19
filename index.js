const editBtn = document.querySelector(".profile__edit-btn");

editBtn.addEventListener("click", function () {
  const popup = document.querySelector(".popup");
  popup.classList.add("popup_opened");
});

const editBtnClose = document.querySelector(".popup__container_close-btn");

editBtnClose.addEventListener("click", function () {
  const popup = document.querySelector(".popup");
  popup.classList.remove("popup_opened");
});

const formElement = document.querySelector("form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("input[name='name']");
  const jobInput = document.querySelector("input[name='job']");

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  const profileNameElement = document.querySelector(".profile__name");
  const profileJobElement = document.querySelector(".profile__job");

  profileNameElement.textContent = nameValue;
  profileJobElement.textContent = jobValue;

  const popup = document.querySelector(".popup");
  popup.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
