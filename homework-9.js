//Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.

function simpleNumbers(array) {
    return array.filter(element => {
        if (element < 2) return false;
        for (let i = 2; i < num; i++) {
            if (element % i === 0) return false;
        }
        return true;
    })
}
    
//Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля source / text / date. Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.

const notifications = [
    { source: 'email', text: 'New email from boss', date: '2025-01-25' },
    { source: 'sms', text: 'Your package has arrived', date: '2025-01-24' },
    { source: 'email', text: 'Meeting reminder', date: '2025-01-23' },
    { source: 'push', text: 'New comment on your post', date: '2025-01-22' }
];

function groupNotifications(notifications) {
    const result = {};
    for (const notification of notifications) {
        const source = notification.source;
        const text = notification.text;
        const date = notification.date;
        if (!result[source]) {
            result[source] = [];
        }

        result[source].push({ text, date });
    }
    return result;
}

//Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group

function group(array, callback) {
    const result = {};

    for (const item of array) {
        const key = callback(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
}