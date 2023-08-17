// ex 1 
let arr = [1232, 123, 12];
arr[1] = 10;
console.log(arr)
// ex 2
let str = ['Facebook', 'Google', 'Chrome'];
str.push('Instagram')
console.log(str)
// ex 3
let num = [12, 24, 46, 92, 184, 368];
if (num.length <= 6){
    console.log(num[0] + num[1] + num[2] + num[3] + num[4] + num[5]);
}
// ex 4
const fruits = [1, 2, 3, 4, 5];
for (let f = 0; f < fruits.length; f++){
    let num = fruits[f];
    console.log(num)
}
// ex 7
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++){
    if ((array[i] % 2) === 0){
        console.log(arr[i]);
    }
}


// Task 1 - Function

let strings = ['Mango', 'Poly', 'Ajax'];
function logItems(arra){
    for (const key in arra){
        let fruit = arra[key];
        console.log(`${fruit} - ${key}`);
    }
}

logItems(strings);
// Task 2

const calculateEngravingPrice = function(message, pricePerWord) {
    return message.split(" ").length * pricePerWord;
};

console.log(calculateEngravingPrice("Maybe id is a DOM, index split, and probably, i`ll like jewelerry", 40));

// Task 3

const inp = "Temka, Sofi, Artemch1k, Lyubov, Milana, Vika, Top4ik, Natalie, Egorik"; 
function findLongestWord(string) {
    const wordsLong = string.split(', ');
    let theLongestWord = '';

    for (const word of wordsLong) {
        if (word.length > theLongestWord.length) {
            theLongestWord = word;
        }
    }
    return theLongestWord;
}

// Task 4

function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice('0, 40') + '...';
}
}

const longestWord = findLongestWord(inp);
const formattedString = formatString(inp);
console.log("Найдовше слово:", longestWord);
console.log("Форматований рядок:", formattedString);

// Task 5

let truthy = "sale, sam, took, spm";
function checkForSpam(message){
    const messages = message.toLowerCase();
    if (messages.includes('sale') || messages.includes('spam')) {
        return true;
    } else {
        return false;
    }
}
const sale = checkForSpam(truthy);
console.log("Заборонене слово:", sale);

// Task 6

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введіть число', '');

  if (userInput === '' || isNaN(userInput)) {
    alert('Було введено не число, попробуйте ще раз');
  }

  numbers.push(+userInput);

} while (userInput !== null);

for (const value of numbers) {
  total = total + value;
}

alert(`Загальна сума чисел дорівнює ${total}`);
console.log(numbers);