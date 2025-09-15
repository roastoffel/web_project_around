import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { openPopup, closePopup } from "./utils/utils.js";

const profileEditBtn = document.querySelector(".profile__edit-btn");
const cardAddBtn = document.querySelector(".profile__add-btn");
const profileForm = document.querySelector(".popup-edit__form-edit");
const cardForm = document.querySelector(".popup-add__form-add");
const nameInput = profileForm.querySelector(".form__input_name");
const jobInput = profileForm.querySelector(".form__input_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const cardList = document.querySelector(".content__list");
const cardTitleInput = cardForm.querySelector(".form__input_name");
const cardLinkInput = cardForm.querySelector(".form__input_link");
const popupImage = document.querySelector("#popup-image");
const popupImageElement = popupImage.querySelector(".popup-image__image");
const popupImageText = popupImage.querySelector(".popup-image__text");
const popupEdit = document.querySelector("#popup-edit");
const popupAdd = document.querySelector("#popup-add");
const allPopups = document.querySelectorAll(
  ".popup-edit, .popup-add, .popup-image"
);

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const editFormValidator = new FormValidator(validationConfig, profileForm);
const addFormValidator = new FormValidator(validationConfig, cardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

function handleCardClick(name, link) {
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupImageText.textContent = name;
  openPopup(popupImage);
}

function createNewCard(item) {
  const card = new Card(item, "#card-template", handleCardClick);
  return card.generateCard();
}

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach((item) => {
  const cardElement = createNewCard(item);
  cardList.append(cardElement);
});

profileEditBtn.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  editFormValidator.resetValidation();
  openPopup(popupEdit);
});

cardAddBtn.addEventListener("click", () => {
  cardForm.reset();
  addFormValidator.resetValidation();
  openPopup(popupAdd);
});

allPopups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close-btn")
    ) {
      closePopup(popup);
    }
  });
  const closeButton = popup.querySelector(
    ".popup-edit__container_close-btn, .popup-add__container_close-btn, .popup-image__close-btn"
  );
  if (closeButton) {
    closeButton.addEventListener("click", () => closePopup(popup));
  }
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: cardTitleInput.value,
    link: cardLinkInput.value,
  };
  const cardElement = createNewCard(newCardData);
  cardList.prepend(cardElement);
  closePopup(popupAdd);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);
