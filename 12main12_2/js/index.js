//12main12_2
// Самостоятельная работа
//Обьекты и классы

// В ходе задания вам нужно поработать с классами и объектами:

// Создайте класс BankAccount с конструктором, который принимает параметры accountHolder
//  (владелец счета) и balance (баланс счета).
// Добавьте метод deposit(amount), который увеличивает баланс счета на указанную сумму в параметре.
// Добавьте метод withdraw(amount), который уменьшает баланс счета на указанную сумму, если на счете достаточно средств.
// Создайте объект класса BankAccount с именем "John" и начальным балансом 1000.
// Выполните несколько операций пополнения и снятия средств, а затем выведите в консоль текущий баланс счета.

class BankAccount{
  constructor(accountHolder,balance){
    this.accountHolder = accountHolder;
    this.balance = balance;
  }
  deposit(amount){
    console.log("Пополнение на: " + amount + " На счету: " + (this.balance + amount));
    return this.balance = this.balance + amount;
  }
  withdraw(amount){
    if(this.balance-amount<0){
      console.log("Снятие: "+ amount + " невозможно.На счету недостаточно средств,осталось: " + this.balance)
    }
    else{
      console.log("Снятие: "+ amount + " На счету осталось: "+(this.balance-amount));
      return this.balance = this.balance-amount;
    }
  }
}

let client = new BankAccount("John",1000);
console.log(client.balance);

client.deposit(1000);
client.withdraw(500);
client.withdraw(1500);
client.withdraw(1500);

console.log(client.balance);

//Ответ с задания

// Задание: Управление банковским счетом

// 1. Создайте класс BankAccount с конструктором, принимающим параметры accountHolder и balance.
class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  // 2. Добавьте метод deposit(amount), который увеличивает баланс счета на указанную сумму.
  deposit(amount) {
    this.balance += amount;
    console.log(`Пополнение на ${amount} успешно. Новый баланс: ${this.balance}`);
  }

  // 3. Добавьте метод withdraw(amount), который уменьшает баланс счета на указанную сумму, если на счете достаточно средств.
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Снятие ${amount} успешно. Новый баланс: ${this.balance}`);
    } else {
      console.log(`Ошибка: Недостаточно средств на счете.`);
    }
  }
}

// 4. Создайте экземпляр класса BankAccount с именем "John" и начальным балансом 1000.
var johnAccount = new BankAccount('John', 1000);

// 5. Выполните несколько операций пополнения и снятия средств, а затем выведите в консоль текущий баланс счета.
johnAccount.deposit(500);
johnAccount.withdraw(200);
johnAccount.withdraw(1200); // Попытка снять больше, чем есть на счете.