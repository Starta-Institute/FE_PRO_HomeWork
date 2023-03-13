//Легкий уровень сложности:
//Напишите цикл, который выводит в консоль числа от 1 до 10.
for(let i = 1; i <= 10; i++){
console.log(i);
}
//Напишите цикл, который находит наименьшее число в массиве.
const arr = [2, 4, 8, -10, 15, 17]
for(let i = 0; i < arr.length; i++){
    let lowestNum = arr[0];
    if(arr[i] < lowestNum){
        lowestNum = arr[i]
        console.log(lowestNum);
    }
}
//Напишите цикл, который считает сумму всех чисел от 1 до 100.
let x = 0
for(let i = 1; i <= 100; i++){
    x += i
}
console.log(x);


//Напишите цикл, который выводит в консоль каждый второй элемент массива.
for (let i = 1; i < arr.length; i += 2){
    console.log(arr[i]);
}

//Напишите цикл, который находит наибольшее число в массиве.
for(let i = 0; i > arr.length; i++){
    let largestNum = arr[0];
    if (arr[i] > largestNum){
        largestNum = arr[i]
        console.log(largestNum);
    }
}
//Средний уровень сложности:
//Напишите цикл, который выводит в консоль все простые числа от 2 до 100.
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }

  //Напишите цикл, который находит среднее арифметическое всех чисел в массиве.
let array = [85, 315, 30, 87, 40];
let total = 0;
 for (i = 0; i < array.length; i++) {
    total = total + array[i];
}
let avg = total/array.length;
console.log(avg);

//Напишите цикл, который выводит в консоль таблицу умножения на 5.
for (let i = 1; i <= 10; i++) { 
    console.log(`5 * ${i} = ${i * 5}`); 
 }
//Напишите цикл, который переворачивает порядок элементов в массиве.
//????


//Напишите цикл, который находит сумму элементов массива, кратных 3 или 5.
const arrElement = [10, 28, 67, 234, 86, 378]
let sum = 0;
for (let i = 0; i < arrElement.length; i++){
if (arrElement[i] % 3 == 0 || arrElement[i] % 5 == 0){
    sum += arrElement[i]
    console.log(sum);
}
}
// || ИЛИ
// && И
