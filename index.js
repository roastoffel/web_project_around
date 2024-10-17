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

////////////////////////

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
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const cardList = document.querySelector(".content__list");
const addCardForm = document.querySelector(".popup-add__form-add");
const addCardFormTitleInput = addCardForm.querySelector(
  ".form-add__input_name"
);
const addCardFormLinkInput = addCardForm.querySelector(".form-add__input_link");

// Função para criar um novo card
function createCard(name, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".content__card")
    .cloneNode(true);

  cardElement.querySelector(".content__card_image").src = link;
  cardElement.querySelector(".content__card_image").alt = name;
  cardElement.querySelector(".content__card_title").textContent = name;

  const trashButton = cardElement.querySelector(".content__card_btn-trash");
  trashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  const likeButton = cardElement.querySelector(".content__card_btn-like");
  likeButton.addEventListener("click", () => {
    const likeIcon = likeButton.querySelector(".content__card_like");
    if (likeIcon.src.endsWith("/images/heart.svg")) {
      likeIcon.src = "./images/heart-filled.svg";
    } else {
      likeIcon.src = "./images/heart.svg";
    }
  });

  return cardElement;
}

// Função para adicionar um novo card à lista
function addCard(name, link) {
  const newCard = createCard(name, link);
  cardList.append(newCard);
}

// Remove todos os cards existentes no HTML
const existingCards = cardList.querySelectorAll(".content__card");
existingCards.forEach((card) => card.remove());

// Adiciona os cards iniciais
initialCards.forEach((card) => {
  addCard(card.name, card.link);
});

// Event listener para o formulário de adicionar card
addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = addCardFormTitleInput.value;
  const link = addCardFormLinkInput.value;
  addCard(title, link);
  addCardForm.reset();
  // Aqui você pode adicionar o código para fechar o popup
  const popupAdd = document.querySelector(".popup-add");
  popupAdd.classList.remove("popup-add_opened");
});
