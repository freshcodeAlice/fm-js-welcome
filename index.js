const bool = true; // bool - це просто примітив логічного типу

bool.toString(); /*
 Створюється об'єкт-обгортка Boolean:
 obj = new Boolean(true);
obj.toString();
отримуємо результат, і об'єкт-обгортка знищується
*/

/* Number */

const num = 23.234234234234;
num.toFixed(0);

Number.parseInt('1001', 2);

Number.parseFloat('123.21');


/* String */

const str = 'igelschnäuzchen';
str;
//'igelschnäuzchen'
str.charAt(5);
//'c'
str[5];
//'c'
str.charCodeAt(5)
//99
str.concat(' hello')
//'igelschnäuzchen hello'
str;
//'igelschnäuzchen'
str.includes('igel')
//true
str.includes('cat')
//false
str.indexOf('c')
//5
str.repeat(5)
//'igelschnäuzchenigelschnäuzchenigelschnäuzchenigelschnäuzchenigelschnäuzchen'
str.replace('igel', 'cat');
//'catschnäuzchen'
'       fdsfdf         '.trim()
//'fdsfdf'
'hi hi hi'.split(' ');
//(3) ['hi', 'hi', 'hi']0: "hi"1: "hi"2: "hi"length: 3[[Prototype]]: Array(0)
'ewerwer*werfwerW*RWRWersdfdsf*gfd'.split('*')
//(4) ['ewerwer', 'werfwerW', 'RWRWersdfdsf', 'gfd']0: "ewerwer"1: "werfwerW"2: "RWRWersdfdsf"3: "gfd"length: 4[[Prototype]]: Array(0)
'rewrerweerwerwer'.split('');
//(16) ['r', 'e', 'w', 'r', 'e', 'r', 'w', 'e', 'e', 'r', 'w', 'e', 'r', 'w', 'e', 'r']