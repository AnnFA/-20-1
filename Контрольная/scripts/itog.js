/*Заполняем массив прочерками по количеству букв в загаданном слове*/
let setupAnswerArray = function (word) {
    let answerArray = []
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        }
    return answerArray;
};

let abc = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

// Состояние игры
let showPlayerProgress = function (answerArray) {
alert(answerArray.join(" ")+"\n"+"Алфавит: "+abc+"\n"+"Осталось " +numberAttempt+ " попыток")
};

let getGuess = function () {
return prompt("Угадайте букву или нажмите Отмена для выхода из игры");
};


let updateGameState = function (guess, word, answerArray) {
let appearances = 0;
for (let j = 0; j < word.length; j++) {
if (word[j] === guess && answerArray[j] !== guess) {
answerArray[j] = guess;
appearances++;
}
}
return appearances;
};


let showAnswerAndCongratulatePlayer = function (answerArray, numberAttempt) {
    showPlayerProgress(answerArray);
    };

let word = prompt('Игра Виселица начинается\nВедущий, введите слово');
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;
let numberAttempt = 5; //количество попыток 5


//процесс проверки ввода буквы и одновременно проверка на наличие ее в слове, удаление из алфавита при необходимости
while (remainingLetters > 0 && numberAttempt > 0) { showPlayerProgress(answerArray); let guess = getGuess();
if (guess === null) {
break;
} 
else if (guess.length !== 1) {
alert("Пожалуйста, введите только одну букву.");
} 
else {
guess = guess.toLowerCase();
let correctGuesses = updateGameState(guess, word, answerArray);
remainingLetters -= correctGuesses;
if(!correctGuesses) numberAttempt--;
abc = abc.filter(function(f) { return f !== guess })
}
}
alert(answerArray.join(" "));
 

//конец игры
if (numberAttempt > 0) {
alert("Отлично! Было загадано слово " + word);
} else {
alert("Плохо! Вас повесили! Было загадано слово " + word);
}
showAnswerAndCongratulatePlayer(answerArray);