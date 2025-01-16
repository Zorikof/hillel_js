//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
const originalArray = [1, 2, 7, 3, 4, 5];

function reverseArray(array) {
    const reversedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);

// Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).

const array1 = [1, 2, 3, 4, 5, 1];
const array2 = [3, 4, 5, 6, 7];

function uniqueValues(array1, array2) {
    let twoArrays = array1.concat(array2);
    let uniqueArray = [];

    for (let i = 0; i < twoArrays.length; i++) {
        if (!uniqueArray.includes(twoArrays[i])) {
            uniqueArray.push(twoArrays[i]);
        }
    }
    return uniqueArray;
}

const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray);

//Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.

const students = [
    { name: "Ivan", age: 20, averageGrade: 85 },
    { name: "Olga", age: 22, averageGrade: 90 },
    { name: "Petro", age: 21, averageGrade: 78 },
];

function calculateAverageGrade(students) {
    let totalGrade = 0;
    for (let i = 0; i < students.length; i++) {
        totalGrade += students[i].averageGrade;
    }
    return totalGrade / students.length;
}