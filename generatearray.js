function generatePairNumbers() {
    let result = [];
    for (let i = 1; i <= 8; i++) {
      result.push(i);
      result.push(i);
    }
    return result;
  }
  
  console.log(generatePairNumbers());


  //перемешивание массива
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} 

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('Исходный массив:', arr);

const shuffledArr = shuffle(generatePairNumbers());
console.log('Перемешанный массив:', shuffledArr);