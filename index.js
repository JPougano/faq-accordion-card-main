const botaoArrow = document.querySelector('.card__first-arrow');
const firstAnswer = document.querySelector('.card__first-answer');
const firstQuestion = document.querySelector('.card__first-question');


botaoArrow.addEventListener('click',() => {
    firstQuestion.classList.toggle('card__question-activated');
    firstAnswer.classList.toggle('card__answer-deactivated');
    botaoArrow.classList.toggle('card__arrow-activated');

})

const botaoArrow2 = document.querySelector('.card__second-arrow');
const firstAnswer2 = document.querySelector('.card__second-answer');
const firstQuestion2 = document.querySelector('.card__second-question');


botaoArrow2.addEventListener('click',() => {
    firstQuestion2.classList.toggle('card__question-activated');
    firstAnswer2.classList.toggle('card__answer-deactivated');
    botaoArrow2.classList.toggle('card__arrow-activated');

})

const botaoArrow3 = document.querySelector('.card__tird-arrow');
const firstAnswer3 = document.querySelector('.card__tird-answer');
const firstQuestion3 = document.querySelector('.card__tird-question');


botaoArrow3.addEventListener('click',() => {
    firstQuestion3.classList.toggle('card__question-activated');
    firstAnswer3.classList.toggle('card__answer-deactivated');
    botaoArrow3.classList.toggle('card__arrow-activated');

})

const botaoArrow4 = document.querySelector('.card__forth-arrow');
const firstAnswer4 = document.querySelector('.card__forth-answer');
const firstQuestion4 = document.querySelector('.card__forth-question');


botaoArrow4.addEventListener('click',() => {
    firstQuestion4.classList.toggle('card__question-activated');
    firstAnswer4.classList.toggle('card__answer-deactivated');
    botaoArrow4.classList.toggle('card__arrow-activated');

})

const botaoArrow5 = document.querySelector('.card__fifth-arrow');
const firstAnswer5 = document.querySelector('.card__fifth-answer');
const firstQuestion5 = document.querySelector('.card__fifth-question');


botaoArrow5.addEventListener('click',() => {
    firstQuestion5.classList.toggle('card__question-activated');
    firstAnswer5.classList.toggle('card__answer-deactivated');
    botaoArrow5.classList.toggle('card__arrow-activated');

})