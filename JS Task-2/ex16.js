let num = +prompt('Enter a number', '');
let sum = 0;
let y = 0;
for (let i = 1; i < num; i++) {
    y = y + Math.sin(i);
    sum = sum + (i / y)
}
console.log(sum)