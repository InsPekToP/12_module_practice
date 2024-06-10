//12main10_2
// Самостоятельная работа
//Функции


// Создайте массив с числами, например: 5, 10, 15, 20, 25.


// Напишите функцию findElement, которая принимает в качестве параметра число и возвращает сообщение о том,
// было ли найдено это число в массиве.


// Выведите в консоль результат вызова функции для нескольких чисел.

let arr = [5,10,15,20,25];

function findElement(el){
    let isEven = false;
    arr.forEach(function(item){
        if(item===el)
            isEven = true;
    return console.log(isEven);
    });
}

findElement(5);
findElement(6);
findElement(7);
findElement(10);


//тоже самое,но ответ с задания
// Создание массива с числами
var numbers = [5, 10, 15, 20, 25];

// Функция для поиска элемента в массиве
function findElement2(target) {
    if (numbers.includes(target)) {
        return `Число ${target} найдено в массиве.`;
    } else {
        return `Число ${target} не найдено в массиве.`;
    }
}

// Поиск и вывод результатов в консоль
console.log(findElement2(15));
console.log(findElement2(7));
console.log(findElement2(25));
