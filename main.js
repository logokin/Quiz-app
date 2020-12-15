const quiz = [
  {
    question: "1. Carl and the Passions changed band name to what ?",
    a: "cow boys",
    b: "beach boys",
    c: "kings",
    d: "music ninjas",
    correct: "b",
  },
  {
    question: "2. How many rings on the Olympic flag",
    a: "five",
    b: "two",
    c: "ten",
    d: "one",
    correct: "a",
  },
  {
    question: "3.What colour is vermilion a shade of ",
    a: "yellow",
    b: "black",
    c: "white",
    d: "red",
    correct: "d",
  },
  {
    question: "4. King Zog ruled which country?",
    a: "nigeria",
    b: "america",
    c: "italy",
    d: "Albania",
    correct: "d",
  },
  {
    question: "5. What colour is Spock's blood ",
    a: "blue",
    b: "red",
    c: "green",
    d: "white",
    correct: "c",
  },
  {
    question: "6. Where in your body is your patella",
    a: "shoulder",
    b: "hand",
    c: "eyes",
    d: "knee",
    correct: "d",
  },
  {
    question: "7. Where can you find London bridge today",
    a: "USA ( Arizona )",
    b: "England (chelsea)",
    c: "Spain (madrid)",
    d: "Germany (berlin)",
    correct: "a",
  },
  {
    question: "8. What spirit is mixed with ginger beer in a Moscow mule",
    a: "gin",
    b: "red wine",
    c: "coca cola",
    d: "Vodka",
    correct: "d",
  },
  {
    question: "9. Who was the first man in space",
    a: "abraham lincoln",
    b: "Yuri Gagarin ",
    c: "albert aistein",
    d: "john clement",
    correct: "b",
  },
  {
    question: "10. Who betrayed Jesus to the Romans",
    a: "peter",
    b: "judas iscariot",
    c: "matthew",
    d: "the women of jurusalem",
    correct: "b",
  },
  {
    question: "11. Who starred as Rocky Balboa",
    a: " jackie chan",
    b: "robertson",
    c: "Sylvester Stallone",
    d: "peter jerry",
    correct: "c",
  },
  {
    question: "12. If you has caries who would you consult",
    a: "dentist",
    b: "optician",
    c: "pastor",
    d: "dermatologist",
    correct: "a",
  },
  {
    question: "13. Who has won the most Oscars",
    a: "tiger woods",
    b: "jazzy",
    c: "Walt Disney",
    d: "beyonce",
    correct: "c",
  },
  {
    question: "14. Who invented the television",
    a: "John Logie Baird",
    b: "ferdinand green",
    c: " jerry blossom",
    d: "nicholas bush",
    correct: "a",
  },
];

let quizDiv = document.getElementById("quiz");
const answerElms = document.querySelectorAll(".answer");

const scorePage = document.querySelector(".scorePage");
const question = document.getElementById("ques");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const button = document.getElementById("button");
// var input = document.querySelectorAll("input");

var currentItem = 0;
let score = 0;

function item() {
  // deselect answers function
  deselected();

  var quizCurrent = quiz[currentItem];

  question.innerText = quizCurrent.question;
  a_text.innerText = quizCurrent.a;
  b_text.innerText = quizCurrent.b;
  c_text.innerText = quizCurrent.c;
  d_text.innerText = quizCurrent.d;
}

item();

function getSelected() {
  // undefined
  let answer = undefined;

  // for each input element
  answerElms.forEach(function (answerElm) {
    if (answerElm.checked) {
      answer = answerElm.id;
    }
  });
  return answer;
}

// deselect answser function
function deselected() {
  answerElms.forEach(function (answerElm) {
    answerElm.checked = false;
  });
}

// button event
button.addEventListener("click", function () {
  const answer = getSelected();
  if (answer) {
    if (answer === quiz[currentItem].correct) {
      score++;
    }

    currentItem++;

    if (currentItem < quiz.length) {
      item();
      scorePage.innerHTML = `${score}/${quiz.length}`;
    } else {
      // alert(`congratulations, you've finished`);
      quizDiv.innerHTML = `<h2>you answered correctly ${score}/${quiz.length}questions.`;
    }
  }
});

const questionHead = document.getElementById("ques");

function randomImage() {
  let images = ["url(./img/0.jpg)", "url(./img/1.jpg)", "url(./img/2.jpg)"];
  var random = images[Math.floor(Math.random() * images.length)];
  questionHead.style.backgroundImage = random;
}

setInterval(randomImage, 3000);

const fabars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");
const height = document.querySelector(".height");

fabars.addEventListener("click", () => {
  height.classList.add("height-add");
});

times.onclick = close;

function close() {
  height.classList.remove("height-add");
}

// let img = document.querySelector(".img");
// let body = document.querySelector("body");
// window.addEventListener("load", () => {
//   body.style.backgroundColor = "red";
//   img.classList.add("dissappear");
// });
