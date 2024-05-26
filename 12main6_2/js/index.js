//12main6_2
// Самостоятельная работа
//Массивы данных

// Создайте пустой массив с именем fruits (фрукты).

// Используя метод push(), добавьте в массив три различных фрукта.
// Используя метод pop(), удалите один из фруктов.
// Выведите в консоль сообщение, содержащее оставшиеся фрукты. Важно выполнить объединение массива через join. 
// Подсчитайте и выведите их общее количество.

let fruits = [];
console.log(fruits);

fruits.push("apple","kivi","ananas");
console.log(fruits);

fruits.pop();
console.log(fruits);

let fruits_res = fruits.join(",");
console.log(fruits_res);

console.log(fruits.length);