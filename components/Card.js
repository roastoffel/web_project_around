export default class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".content__card")
      .cloneNode(true);
    return cardElement;
  }

  _handleLike() {
    this._likeButton.classList.toggle("content__card_btn-like_filled");
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".content__card_btn-like");
    this._deleteButton = this._element.querySelector(
      ".content__card_btn-trash"
    );
    this._cardImage = this._element.querySelector(".content__card_image");

    this._likeButton.addEventListener("click", () => {
      this._handleLike();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDelete();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".content__card_title").textContent =
      this._name;

    return this._element;
  }
}
