const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const cardList = document.createElement("ul");
  cardList.classList.add("card-list");

  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");

  const article = document.createElement("article");
  article.classList.add("card");

  const userQuestion = document.createElement("h2");
  userQuestion.classList.add("card__question");
  userQuestion.textContent = data.question;

  const button = document.createElement("button");
  button.classList.add("card__button-answer");
  button.textContent = "Show answer";

  const userAnswer = document.createElement("p");
  userAnswer.classList.add("card__answer");
  userAnswer.textContent = data.answer;

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tagItem = document.createElement("li");
  tagItem.classList.add("card__tag-list-item");
  tagItem.textContent = data.tag;

  const bookmark = document.createElement("div");
  bookmark.classList.add("card__button-bookmark");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.textContent = "➕";

  bookmark.append(bookmarkButton);
  tagList.append(tagItem);
  article.append(userQuestion, button, userAnswer, tagList, bookmark);
  cardListItem.append(article);
  cardList.append(cardListItem);

  main.append(cardList);
});

const questionAmountLeft = document.querySelector(
  '[data-js="questionAmountLeft"]'
);
const questionInput = document.querySelector('[data-js="questionInput"]');
const maxLength = questionInput.getAttribute("maxlength");

questionInput.addEventListener("input", () => {
  questionAmountLeft.textContent = maxLength - questionInput.value.length;
});

const answerAmountLeft = document.querySelector('[data-js="answerAmountLeft"]');
const answerInput = document.querySelector('[data-js="answerInput"]');

answerInput.addEventListener("input", () => {
  answerAmountLeft.textContent = maxLength - answerInput.value.length;
});
