const profileEditBtn = document.querySelector(".profile__edit-btn");
const cardAddBtn = document.querySelector(".profile__add-btn");

const popupEdit = document.querySelector("#popup-edit");
const popupAdd = document.querySelector("#popup-add");
const popupImage = document.querySelector("#popup-image");

const allPopups = document.querySelectorAll(
  ".popup-edit, .popup-add, .popup-image"
);

const profileForm = popupEdit.querySelector(".popup-edit__form-edit");
const cardForm = popupAdd.querySelector(".popup-add__form-add");

const nameInput = profileForm.querySelector(".form__input_name");
const jobInput = profileForm.querySelector(".form__input_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const cardList = document.querySelector(".content__list");
const cardTitleInput = cardForm.querySelector(".form__input_name");
const cardLinkInput = cardForm.querySelector(".form__input_link");

const popupImageElement = popupImage.querySelector(".popup-image__image");
const popupImageText = popupImage.querySelector(".popup-image__text");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

profileEditBtn.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
});

cardAddBtn.addEventListener("click", () => {
  openPopup(popupAdd);
});

allPopups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup-image__close-btn")
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

profileForm.addEventListener("submit", handleProfileFormSubmit);

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

function createCard(name, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".content__card")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".content__card_image");
  const cardTitle = cardElement.querySelector(".content__card_title");
  const trashButton = cardElement.querySelector(".content__card_btn-trash");
  const likeButton = cardElement.querySelector(".content__card_btn-like");
  const likeIcon = likeButton.querySelector(".content__card_like");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  trashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  likeButton.addEventListener("click", () => {
    likeIcon.classList.toggle("content__card_like_filled");
  });

  cardImage.addEventListener("click", () => {
    popupImageElement.src = link;
    popupImageElement.alt = name;
    popupImageText.textContent = name;
    openPopup(popupImage);
  });

  return cardElement;
}

function addCard(name, link) {
  const newCard = createCard(name, link);
  cardList.prepend(newCard);
}

initialCards.forEach((card) => {
  addCard(card.name, card.link);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const title = cardTitleInput.value;
  const link = cardLinkInput.value;
  addCard(title, link);
  cardForm.reset();
  closePopup(popupAdd);
}

cardForm.addEventListener("submit", handleCardFormSubmit);

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});
