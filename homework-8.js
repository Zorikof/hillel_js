/*Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.*/

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
function capitalizeStrings(words) {
    let newArray = []
    words.forEach((str) => {
        let newStr = ''
        for (let i = 0; i < str.length; i++) {
            if (i === 0) {
                newStr += str[i].toUpperCase()
            } else {
                newStr += str[i].toLowerCase()
            }
        }
        newArray.push(newStr);
    })
    return newArray;
}
console.log(capitalizeStrings(words));

/*Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.*/


const array11 = [1, 2, 3, 4, 5, 1];
const array22 = [3, 4, 5, 6, 7];

function findCommonElements(array1, array2) {
    let commonArray = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j] && !commonArray.includes(array1[i])) {
                commonArray.push(array1[i]);
            }
        }
    }
    return commonArray;
}
console.log(findCommonElements(array11, array22));

/*Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
sum - сума всіх елементів масиву
average - середнє значення елементів масиву
min - мінімальне значення в масиві
max - максимальне значення в масиві

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }
*/

function analyzeArray(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return { sum, average, min, max };
}

const numbers = [1, 2, 3, 4, 5];
console.log(analyzeArray(numbers));

