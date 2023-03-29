//ДЗ
//1.
const numbers = [4, 6, 1, 17,  9, 15, 27, 43, 7]
let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(sum);

let sum2 = 0;
numbers.forEach(el => sum2 += el)
console.log(sum2);

//2.
const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure']

const long_strings = []

strings.forEach(el => el.length > 7 ? long_strings.push(el) : '')

console.log(long_strings);

//3.
const d_strings = []
strings.forEach(el => el[0].toLowerCase() === 'd' ? d_strings.push(el) : '')

console.log(d_strings);

//4.
const numbers_pow = []
numbers.forEach(el => numbers_pow.push(el ** 3))
console.log(numbers_pow);

//5.
const numbers_7 = []
numbers.forEach(el => el % 10 === 7 ? numbers_7.push(el) : '')
console.log(numbers_7);
