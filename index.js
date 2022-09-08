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


/* -------------------- */


const map1 = new Map(); // <-- [[key1, value1], [key2, value2], [key3, value3]];


/*

Задача: написати функцію, яка приймає два рядка і перевіряє, чи є вони анаграммами одне до одного.
Зробити це за допомогою Map

'рама' --- 'мара'
'test' --- 'setT' 
1. Обидва рядки привести до одного регістру
1.1 Однаковий розмір рядків
2. В одному і іншому однакова кількість літер.

р - 1   // Один словник-відповідник для одного слова
а - 2
м - 1

м - 1   // Другий словник для другого слова
а - 2
р - 1

3. Порівняти розмір словників і їхній вміст (скільки разів зустрілась та чи інша літера)


*/


function createVocabulary(str) {
    const mapFromStr = new Map();
    for (const letter of str) {
        if (mapFromStr.has(letter)) {
            const letterCount = mapFromStr.get(letter);
            mapFromStr.set(letter, letterCount+1);
        } else {
            mapFromStr.set(letter, 1);
        }
       }
    return mapFromStr;
}


function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    } 
    const map1 = createVocabulary(str1.toLowerCase());
    const map2 = createVocabulary(str2.toLowerCase());

   if (map1.size !== map2.size) {
    return false
   }

   for (const key of map1.keys()) {
    if (map1.get(key) !== map2.get(key)) {
        return false
    } 
   }
   return true
}
