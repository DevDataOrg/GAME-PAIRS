// Этап 1. Создайте функцию, генерирующую массив парных чисел.
// Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];


// let cardsCount = 4;
// let cardsCount = prompt("Введите количество пар", 2);
const cardsNumberArray = []
const game = document.getElementById("game");
let firstCard = null;
let seconCard = null;



//создание массива
function createNumbersArray(count) {
  for (let i = 1; i <= count; i++) {
    cardsNumberArray.push(i, i);
    // cardsNumberArray.push(i);
  }
}


// Этап 2. Создайте функцию перемешивания массива.
// Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}
// createNumbersArray(cardsCount);
// console.log(cardsNumberArray);
// console.log(shuffle(cardsNumberArray))

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами.
// На основе этого массива вы можете создать DOM-элементы карточек.
// У каждой карточки будет свой номер из массива произвольных чисел.
// Вы также можете создать для этого специальную функцию. count - количество пар.
// Этап 4. На основе массива создайте DOM-элементы карточек:

// Создайте функцию, которая будет создавать карточку с номером из массива произвольных чисел.
// Добавьте событие клика, в котором будут условия и проверки на совпадение карточек.

function addTitle() {
  const title = document.createElement("h1");
  title.classList.add("mb-5");
  title.style.textAlign = "center";
  title.textContent = "Игра в пары";
  return title;
}


function startGame(container, count) {
  console.log(cardsNumberArray);
  createNumbersArray(count);
  shuffle(cardsNumberArray);
  console.log(cardsNumberArray);

  let body = document.getElementById("title");
  let title = addTitle();
  body.append(title);


  for (const cardNumber of cardsNumberArray) {
    let card = document.createElement("div");
    card.textContent = cardNumber;
    card.classList.add("card");
    container.append(card);
    card.addEventListener("click", function () {
      if (card.classList.contains("open") || card.classList.contains("success")) {
        return
      }
      
      if (firstCard !== null && seconCard !== null) {
        firstCard.classList.remove("open");
        seconCard.classList.remove("open");
        firstCard = null;
        seconCard = null;
      }
      // console.log(card);
      card.classList.add("open");
      if (firstCard === null) {
        firstCard = card;
      } else {
        seconCard = card;
      }
      if (firstCard !== null && seconCard !== null) {
        let firstCardNumber = firstCard.textContent
        let secondCardNumber = seconCard.textContent
        if (firstCardNumber === secondCardNumber) {
          firstCard.classList.add("success");
          seconCard.classList.add("success");
        }
        console.log("обе карточки открыты");
      }
      console.log(firstCard);
      console.log(seconCard);
      if (cardsNumberArray.length === document.querySelectorAll(".success").length) {
        setTimeout(function() {
          alert("Игра завершена, вы выйграли!")
        }, 400);
        
      }
    });
  }
}


// (function () { })();

