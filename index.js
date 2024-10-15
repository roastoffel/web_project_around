const editBtn = document.querySelector(".profile__edit-btn");

editBtn.addEventListener("click", function () {
  const popupEdit = document.querySelector(".popup-edit");
  popupEdit.classList.add("popup-edit_opened");
});

const editBtnClose = document.querySelector(".popup-edit__container_close-btn");

editBtnClose.addEventListener("click", function () {
  const popupEdit = document.querySelector(".popup-edit");
  popupEdit.classList.remove("popup-edit_opened");
});

const formElement = document.querySelector(".form-edit");

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

  const popupEdit = document.querySelector(".popup-edit");
  popupEdit.classList.remove("popup-edit_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

//////////////////////

const addBtn = document.querySelector(".profile__add-btn");

addBtn.addEventListener("click", function () {
  const popupAdd = document.querySelector(".popup-add");
  popupAdd.classList.add("popup-add_opened");
});

const addBtnClose = document.querySelector(".popup-add__container_close-btn");

addBtnClose.addEventListener("click", function () {
  const popupAdd = document.querySelector(".popup-add");
  popupAdd.classList.remove("popup-add_opened");
});

// const formElement = document.querySelector(".form-add");

// function handleAddFormSubmit(evt) {
//   evt.preventDefault();

//   const titelInput = document.querySelector("input[name='title']");
//   const linkInput = document.querySelector("input[name='link']");

//   const titleValue = titleInput.value;
//   const linkValue = linkInput.value;

//   const profileTitleElement = document.querySelector(".profile__title");
//   const profileLinkElement = document.querySelector(".profile__link");

//   profileTitleElement.textContent = titleValue;
//   profileLinkElement.textContent = linkValue;

//   const popupEdit = document.querySelector(".popup-add");
//   popupEdit.classList.remove("popup-add_opened");
// }

// formElement.addEventListener("submit", handleAddFormSubmit);
