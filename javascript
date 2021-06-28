//1 Сложите 4 и "4".
   /* console.log(4+"4")*/
   //4  Напишите функцию, которая преобразует число в строку и выведет её. Бонус: в строке число должно быть в шестнадцатиричной системе счисления
   /*
let n=13
function nem(n) {
   hexString = n.toString(16);
   if (hexString.length % 2)
    {
     hexString = '0' + hexString;
   }
console.log(hexString);
}
nem(n);*/
  
 
    
 //6 Напишите функцию, которая принимает в аргументы два числа и складывает их. Полученный результат вывести в консоль
 /*
 let n=5;
 let b=4;
 function sum(n,b)
 {
    return n+b;
    
 }
 sum(n,b);
console.log(sum(n,b));*/

//8  Напишите функциию, которая ниболее оптимально выводит все уникальные символы в строке. Пример входной строки: "asdaaaaasf", ожидаемый результат: "df"
/*function unical(str)
{let schot=0;
let peremen1='';
let peremen2='';
for(let i=0;i<str.length;i++)
{
for(let j=0;j<str.length;j++)
{peremen1=str[i];
if(str[i]==str[j])schot++;
}
if(schot==1)peremen2+=peremen1;
peremen1="";
schot=0;
}
console.log(peremen2);
}
let str="qwcbqc"
unical(str)*/
//9  Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива. Если число имеет тип, отличный от числового, преобразовать его в числовой. Массив: [1, 2, '3', '5', '4', 5, '5', 7, 8, 8, '10']


// Однострочное решение
/*console.log([1, 4, 3, 0, 4, 5, 16]
.filter (элемент =>! (элемент% 2))
.reduceRight ((аккумулятор, элемент) => аккумулятор + Math.sqrt (элемент), 0)
);*/
//10  Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна выводить слово Fizz, а вместо чисел, кратных пяти — слово Buzz. Если число кратно пятнадцати, то программа должна выводить слово FizzBuzz
/*
for (let i = 0; i < 100; i++) {
   if (i % 15) {
       console.log('FizzBuzz')
   }
   else if (i % 3 == 0) {
       console.log('Fizz')
   } 
   else if(i % 5 == 0) {
       console.log('Buzz')
   } 
   else {
       console.log(i)
   }
   
}*/
//11  
/*
const a = {
   value: 0
 };
 
 const b = {
   data: a
 };
 
 const c = { ...a };
 
 const d = b.data;
 
 d.value = 10;
 
 b.data.value = 5;
 
 c.value = 7;
 
 // a.value ? Данил, Диана, Нурбий, Анастия: 0, 5
 // a.value === c.value ? Данил, Диана, Нурбий, Анастия: false false
 // a.value === d.value ? Данил, Диана: true Нурбий, Анастия: false  true
 */
