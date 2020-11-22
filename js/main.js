"use strict"

let message = 'ВсЕ ОК';
console.log(message);
console.log(message);
message = 'ВсЕ НЕ ОК';
console.log(message);
console.log(message);
const BLACK_HEX = '#000000';


// Объявление переменных  let vs var, const

//TODO: 

/*
 Типы данных:
- числа 1, 2, 3
- строки "string" 'string' `string`
- логический тип истина/ложь true/false
- null
- undefined
- объекты: обычные, массивы, функции
*/

//TODO: через typeof() проверить типы переменных, также проверить переменную nothing, подпишите рядом комментарием

let num = 5;//number
let string = "5";//string
let bool = true;//bolean
let undef;//underfined
console.log(typeof(undef))

let person = {
    name: "John",
    age: 20,
    have_dog: true,
}
console.log(person.name)//TODO вывести имя человека person

let photo = ["cat.png", "cute_dog.png"];
 console.log(photo[1])
const COLOR_RED = '#ff0000';

/*
 Функции

 function название_функции(аргументы){
     код
 }

(a,b)=>a+b

 Есть уже написанные за нас функции:

 alert("");
 confirm("");
 prompt("", "");

*/
//TODO: спросить возраст пользователя и вывести следующим сообщением "Ваш возраст _ !"
// let age = prompt("Введите возраст", "18")
// alert ("Ваш возраст"+ age + "!")
//TODO: создать свою функцию, которая будет проверять возраст пользователя

// if(109 >= age >=99){
// alert("ты живучий")

// } else if(age >= 110){
//   alert("..........")
// }else if (100 > age >= 70){
//   alert("ты старичооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооок")
//  } else if ( age < 18) {
//   alert("Иди в школу!")
//  }
//  else {
//    alert("иди работай!")

//   }
let food_is = prompt("есть ли еда в холодильнике","yes")
  while(food_is == "yes"){
    console.log('ем')
    console.log('играю')
    console.log('проверка на еду')
    food_is = prompt("есть ли еда в холодильнике","yes")
  }
    console.log('ждать доставку еды')

/*
Преобразование типов

-> число
Number('5')=5
+'25'

-> строка
String(25)
10+"hi"

-> булево


*/

//TODO: Сформировать ссылку в вк на страницу, используя введенный ID пользователя

/*
 Операторы:

 a++   увеличиваем на единицу
 b--   уменьшаем на единицу
 a+b   
 a-b
 a/b
 a*b
 a%b

= присваивание

 Логические операторы для проверок:

== сравнение по значениям
===сравнение по типам данных
&&  и true&&true=true  true&&false=false false&&false=false 
|| или true||true=true  true||false=true false||false=false 
! не !true=false
>
<
>=
<=

*/

//TODO мини калькулятор 


/*
 Условия:

if (условие) {
  код
} else if (условие) {
  код
} else {
  код
}

(условие) ?
   код, выполнится при верном

 Циклы:

while (условие){
    код
}

for (начало; условие; конец){
    код
}

*/