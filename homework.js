
/*Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі: Число secondNumber є простим числом, якщо число secondNumber просте, та Число secondNumber не є простим числом, якщо число secondNumber складене.*/

let num = +prompt("Enter a number");

if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(`Число ${num} не є простим числом`);
            break;
        }
        if (i === num - 1) {
            console.log(`Число ${num} є простим числом`);
        }
    }
} else {
    console.log(`Число ${num} не є простим числом`);
}

/* Вам необхідно написати програму, яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N, які є досконалими числами.*/

let secondNumber = +prompt("Enter a number");

for (let num = 1; num <= secondNumber; num++) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        console.log(`Число ${num} є досконалим числом`);
    }
}


 /*Вам необхідно написати програму, яка приймає на вхід число, що буде висотою вершини вашої ялинки. Уся ялинка має бути реалізована одним рядком:*/

let height = +prompt("Enter the height of the tree");

for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}