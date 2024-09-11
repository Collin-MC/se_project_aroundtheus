// Objects/Arrays //

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// Elements //

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const modalEditClose = profileEditModal.querySelector(".modal__close");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileEditNameInput = document.querySelector(
  ".modal__profile-input_name"
);
const profileEditDescriptionInput = document.querySelector(
  ".modal__profile-input_description"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".cards__list");

// Functions //

function closeModal() {
  profileEditModal.classList.remove("modal__opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  return cardElement;
}

// Event Handlers //

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileEditNameInput.value;
  profileDescription.textContent = profileEditDescriptionInput.value;
  closeModal();
}

// Event Listeners //

profileEditButton.addEventListener("click", () => {
  profileEditNameInput.value = profileName.textContent;
  profileEditDescriptionInput.value = profileDescription.textContent;

  profileEditModal.classList.add("modal__opened");
});

modalEditClose.addEventListener("click", closeModal);

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = profileEditNameInput.value;
  profileDescription.textContent = profileEditDescriptionInput.value;
  closeModal();
});

// Loops //

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);

  cardList.prepend(cardElement);
});
