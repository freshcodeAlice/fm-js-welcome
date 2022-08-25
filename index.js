// Date

const time1 = new Date();

let sum = 0;
for (let i = 0; i < 50000; i++) {
  sum += i;
}

const time2 = new Date();
console.log(time2.getTime() - time1.getTime());