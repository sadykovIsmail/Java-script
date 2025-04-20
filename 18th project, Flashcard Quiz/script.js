const startBtn = document.getElementById("start");
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
  { question: "What is HTML?", answer: "HyperText Markup Language" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
];

let result = 0;
let shuffledIndexes = [];
let currentIndex = 0;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

startBtn.onclick = () => {
  startBtn.style.display = "none";
  result = 0;
  shuffledIndexes = shuffleArray([...Array(flashcards.length).keys()]);
  currentIndex = 0;
  callCard(shuffledIndexes[currentIndex]);
};

const callCard = (number) => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";

  const Card = flashcards[number];

  const cards = document.createElement("div");
  cards.className = "cards";

  const cardText = document.createElement("p");
  cardText.textContent = Card.question;
  cards.appendChild(cardText);

  const show = document.createElement("button");
  show.textContent = "Show answer";
  cards.appendChild(show);

  container.appendChild(cards);

  show.onclick = () => {
    cards.style.display = "none";

    const resultDiv = document.createElement("div");
    resultDiv.className = "result";

    const resultText = document.createElement("p");
    resultText.textContent = Card.answer;
    resultDiv.appendChild(resultText);

    const correctBtn = document.createElement("button");
    correctBtn.textContent = "Correct";
    resultDiv.appendChild(correctBtn);

    const incorrectBtn = document.createElement("button");
    incorrectBtn.textContent = "Incorrect";
    resultDiv.appendChild(incorrectBtn);

    container.appendChild(resultDiv);

    correctBtn.onclick = () => {
      result++;
      resultDiv.remove();
      nextCard();
    };

    incorrectBtn.onclick = () => {
      resultDiv.remove();
      nextCard();
    };
  };
};

const nextCard = () => {
  currentIndex++;
  if (currentIndex < shuffledIndexes.length) {
    callCard(shuffledIndexes[currentIndex]);
  } else {
    showFinalResult();
  }
};

const showFinalResult = () => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";

  const final = document.createElement("div");
  final.className = "final";

  const finalText = document.createElement("p");
  finalText.textContent = `You got ${result} out of ${flashcards.length}`;
  final.appendChild(finalText);

  const restartbtn = document.createElement("button");
  restartbtn.textContent = "Restart";
  final.appendChild(restartbtn);

  const changebtn = document.createElement("button");
  changebtn.textContent = "Change";
  final.appendChild(changebtn);

  container.appendChild(final);

  restartbtn.onclick = () => {
    result = 0;
    shuffledIndexes = shuffleArray([...Array(flashcards.length).keys()]);
    currentIndex = 0;
    callCard(shuffledIndexes[currentIndex]);
  };

  changebtn.onclick = () => {
    final.remove();

    const cardList = document.createElement("div");
    cardList.className = "cardList";

    const allCards = [...flashcards];

    allCards.forEach((item, index) => {
      const cardItem = document.createElement("div");
      cardItem.className = "cardItem";

      const questions = document.createElement("p");
      questions.innerText = item.question;
      cardItem.appendChild(questions);

      const answers = document.createElement("p");
      answers.innerText = item.answer;
      cardItem.appendChild(answers);

      const deletebtn = document.createElement("button");
      deletebtn.textContent = "Delete";
      deletebtn.onclick = () => {
        flashcards.splice(index, 1);
        localStorage.setItem("flashcards", JSON.stringify(flashcards));
        cardItem.remove();
      };

      cardItem.appendChild(deletebtn);
      cardList.appendChild(cardItem);
    });

    container.appendChild(cardList);

    const addbtn = document.createElement("button");
    addbtn.textContent = "Add new";
    cardList.appendChild(addbtn);

    const restartbtn2 = document.createElement("button");
    restartbtn2.textContent = "Restart";
    cardList.appendChild(restartbtn2);

    restartbtn2.onclick = () => {
      result = 0;
      shuffledIndexes = shuffleArray([...Array(flashcards.length).keys()]);
      currentIndex = 0;
      callCard(shuffledIndexes[currentIndex]);
    };

    addbtn.onclick = () => {
      cardList.remove();

      const addClass = document.createElement("div");
      addClass.className = "question";

      const label1 = document.createElement("label");
      label1.textContent = "Write the question";
      addClass.appendChild(label1);

      const input1 = document.createElement("input");
      input1.type = "text";
      input1.id = "questionInput";
      addClass.appendChild(input1);

      const label2 = document.createElement("label");
      label2.textContent = "Write the answer";
      addClass.appendChild(label2);

      const input2 = document.createElement("input");
      input2.type = "text";
      input2.id = "questionInput2";
      addClass.appendChild(input2);

      const add = document.createElement("button");
      add.textContent = "Add";
      addClass.appendChild(add);

      container.appendChild(addClass);

      add.onclick = () => {
        flashcards.push({ question: input1.value, answer: input2.value });
        localStorage.setItem("flashcards", JSON.stringify(flashcards));
        result = 0;
        currentIndex = 0;
        addClass.remove();
        changebtn.onclick(); // refresh the card list
      };
    };
  };
};
