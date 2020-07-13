import "../scss/main.scss";
import moment from "moment";

const firstName = "Marek";
const age = 47;

console.log(
  `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
);

const emptyParagraph = document.querySelector(".week-summary__description--js");

emptyParagraph.innerHTML = "Nawet uzupełniłem treść javascriptem!";

const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi Odwiedzający! Nazywam się ${firstName} i mam ${age} lat.`
  );
};

greet(47, "Marek");

const myNumber = 10;

switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log("jestem dziewiątką");
    break;
  default:
    console.log("jestem czymś innym");
}

const result = 23 < 32 ? true : false;

console.log(result);

const button = document.querySelector(".action--js");

console.log(button);

button.addEventListener("click", () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = "Witaj Drogi Odwiedzający, nazywam się Marek";
  console.log(heading.classList.contains("main__heading-2"));
});

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

const startOfDay = moment().startOf("day").fromNow();

const timePlaceholder = document.querySelector(".time--js");

timePlaceholder.innerHTML = startOfDay;
