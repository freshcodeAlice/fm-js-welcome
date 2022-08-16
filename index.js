const obj = {
    Mon: 'drive lesson',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'hard work',
    Fri: 'chill',
    Sat: 'go to park'
}

/* "key" in obj */

console.log('Mon' in obj);

if (obj['Mon'] !== undefined) {
    console.log(true)
} else {
    console.log(false)
}


const obj2 = {
    key1: undefined
}

let key1 = 'val';

key1 in obj2 /// 'val' in obj2