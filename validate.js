function showInputError(formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
}

function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
    return;
  }

  let errorMessage = inputElement.validationMessage;

  if (inputElement.validity.typeMismatch) {
    errorMessage = inputElement.dataset.errorUrl || errorMessage;
  } else if (inputElement.validity.valueMissing) {
    errorMessage = inputElement.dataset.errorRequired || errorMessage;
  }

  showInputError(formElement, inputElement, errorMessage, config);
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function setEventListeners(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  const validateFormOnInteraction = () => {
    inputList.forEach((inputElement) => {
      checkInputValidity(formElement, inputElement, config);
    });
    toggleButtonState(inputList, buttonElement, config);
  };

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", validateFormOnInteraction);
    inputElement.addEventListener("blur", validateFormOnInteraction);
  });

  toggleButtonState(inputList, buttonElement, config);
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
}
