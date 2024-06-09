//12main9_2
// Самостоятельная работа
//Коллекции Set и Map


// Создайте новый Set с названиями нескольких стран.
//  Выведите в консоль размер (количество элементов) созданного Set.


// Используя Map, создайте ассоциативный массив (словарь) с парами "ключ-значение",
// где ключи - названия городов, а значения - их население. 
// Выведите в консоль информацию о городах и их населении, используя методы Map.


let mySet = new Set();

mySet.add("Ukraine");
mySet.add("Rusian");
mySet.add("Poland");

console.log(mySet);
console.log(mySet.size);

for(let el of mySet)
    console.log(el);

let map = new Map();

map.set("Kharkov",1000000);
map.set("Wroclaw",300000);
map.set("Gdansk",150000);

for(let i of map)
    console.log(i);

for(let i of map.keys())
    console.log("Город: " + i);

for(let i of map.values())
    console.log("Население: " + i);


//тоже самое,но с ответа

// Создание Set с названиями стран
var countries = new Set(["Литва", "США", "Китай", "Германия"]);

// Вывод размера Set в консоль
console.log("Размер Set:", countries.size);

// Создание Map с информацией о населении городов
var cityPopulation = new Map([
    ["Лондон", 12615279],
    ["Нью-Йорк", 8398748],
    ["Пекин", 21516000],
    ["Берлин", 3769495]
]);

// Вывод информации о городах и их населении
console.log("\nИнформация о городах и населении:");
cityPopulation.forEach(function(population, city) {
    console.log(`${city}: Население - ${population}`);
});