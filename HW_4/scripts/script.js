// 1. Напишите функцию, которая принимает массив строк и возвращает новый массив строк, в котором все первые буквы каждого слова написаны заглавными буквами.
const arr_string = ['dog', 'development', 'tree', 'love', 'baby']
const string_BigLatter = arr_string.map(el => el[0].toUpperCase() + el.slice(1))
console.log(string_BigLatter);


// 2. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только положительные числа.
const numbers = [2, 3, 5, 52, 12, 10, 15, 27, 48]
const positiveNum = numbers.map(el => el > 0 ? el : 0) 
console.log(positiveNum);


// 3. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только нечетные числа.
const odd_numbers = numbers.map(el => el % 2 !== 0 ? el : 0)
console.log(odd_numbers);


// 4. Создайте новый массив, содержащий только элементы исходного массива, которые делятся на три без остатка.
const devide_num = []
numbers.forEach(el => el % 3 === 0 ? devide_num.push(el) : 0)
console.log(devide_num);


// 5. Создайте новый массив, содержащий только те элементы исходного массива, которые больше чем 10 и меньше чем 20.
const fromTenToTwenty = numbers.map(el => (el > 10 && el < 20) ? el : 0);
console.log(fromTenToTwenty);

// 6. Создайте новый массив, содержащий только те элементы исходного массива, которые не являются строками.

const newArr = [true, false, 10, 'hello', 28, 29, 'banana', 'hop hey']

const notString = newArr.map(el => typeof el !== "string" ? el : undefined)
notString.filter((el) => el !== undefined)
console.log(notString);


  