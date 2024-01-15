// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
