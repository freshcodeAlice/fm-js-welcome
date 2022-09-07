/*  Map (Карта, Мапа)

Зберігає пари ключ-значення
Має розмір (size)

Відмінності від звичайного об'єкта:
1. Запам'ятовує елементи в тому порядку, в якому ми їх додаємо.
2. Ключем може бути будь-який тип даних: String, Number, Boolean, BigInt, null, undefined, Function, Object
(Об'єкти і функція передаються за посиланням)

Ключ має бути унікальним
*/


const vocabulary = new Map();

vocabulary.set('cat', 'кіт');
vocabulary.set('dog', 'собака');
vocabulary.set('eat', 'їсти');


function translater(str, vocabulary) {

    const arrayWords = str.toLowerCase().trim().split(' ');

    // const translatedArray = arrayWords.map((word)=>{
    //     if(vocabulary.has(word)){
    //         return vocabulary.get(word);
    //     }
    //     return word;
    // })

    const translatedArray = arrayWords.map((word) => vocabulary.has(word) ? vocabulary.get(word) : word);
    return translatedArray.join(' ');
}


translater('CAT', vocabulary);



/*

Зв'язати користувача і його повідомлення, щоб за юзером знайти його повідомлення

*/


const user = {
    name: 'alex',
    firstName: 'Doe',
    id: 1
}

const user2 = {
    name: 'John',
    firstName: 'Doe',
    id: 2
}

const johnMessages = ['hello', 'How are you?'];
const alexMessages = ['hi!', 'Im fine'];


const messageMap = new Map();
messageMap.set(user.id, alexMessages);
messageMap.set(user2.id, johnMessages);


function createMessage(userId, newMessage, messageMap) {
   const userMessages = messageMap.get(userId);
   userMessages.push(newMessage);
}