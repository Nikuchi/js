
  
  //1
   /* console.log(4+"4")*/
   //4
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
  
 //5
  /*let st1="дороги";
    let st2="сапоги";
function up(st1,st2)
 { 
    let st=st1+st2; 
   
  st[0].toUpperCase() + st.slice(1);
   console.log(st);
  return st;

  } 
 up(st1,st2);*/
 //6
 /*
 let n=5;
 let b=4;
 function sum(n,b)
 {
    return n+b;
    
 }
 sum(n,b);
console.log(sum(n,b));*/
//7
/*
console.log('0002' == 2);
console.log('' == false);
console.log(null === undefined);
console.log(null == undefined);
console.log('жопа' > 'палец');*/
//8
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
//9


// Однострочное решение
/*console.log([1, 4, 3, 0, 4, 5, 16]
.filter (элемент =>! (элемент% 2))
.reduceRight ((аккумулятор, элемент) => аккумулятор + Math.sqrt (элемент), 0)
);*/
//10
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
//12