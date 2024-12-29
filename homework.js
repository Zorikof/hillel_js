/*Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі Вам N рік / роки / років. Залежно від числа N слово рік має змінюватися на років або року. Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки.*/

const yourAge = +prompt('Сколько вам лет?');
const secondTypeOfYears = [2,3,4]
if (!isNaN(yourAge) && yourAge > 0) {
    if (yourAge === 1 || (yourAge % 10 === 1 && yourAge % 100 !== 11)) {
        console.log('Вам ' + yourAge + ' год');
    } else if (secondTypeOfYears.includes(yourAge % 10) && (yourAge % 100 < 11 || yourAge % 100 > 14)) {
        console.log('Вам ' + yourAge + ' года');
    } else {
        console.log('Вам ' + yourAge + ' лет');
    }
} else {
    console.log('Введите корректное число');
}

/*Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення, що вказує, чи є введений рік високосним.*/

const year = +prompt('Какой год?');
if (!isNaN(year) && year > 0) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('Год ' + year + ' является високосным');
    } else {
        console.log('Год ' + year + ' является невисокосным');
    }
} else {
    console.log('Введите корректное число');
}

/*Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення залежно від значення числа. Якщо число ділиться на 3, то повідомлення має бути Fizz, якщо число ділиться на 5, то повідомлення має бути Buzz, а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz. Наприклад, для числа 15 повідомлення має бути FizzBuzz.*/

const someNumber = +prompt('Какое число?');
if (!isNaN(someNumber) && someNumber > 0) {
    if (someNumber % 3 === 0 && someNumber % 5 === 0) {
        console.log('FizzBuzz')
    } else if (someNumber % 3 === 0) {
        console.log('Fizz')
    } else if (someNumber % 5 === 0) {
        console.log('Buzz')
    }
} else {
    console.log('Введите корректное число');
}