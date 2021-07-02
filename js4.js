//1
/*
function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
      let c = string.charAt(i);
      if (string.indexOf(c) !== i && string.indexOf(c, i + 1) == -1) {
        return c;
       
      }
    }
    return null;
  }console.log(firstNonRepeatedCharacter("abcdefa"));*/
  //2
  /*function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
      let c = string.charAt(i);
      if (string.indexOf(c) !== i && string.indexOf(c, i + 1) == -1) {
        return c;
       
      }
    }
    return null;
  }console.log(firstNonRepeatedCharacter("gHRirHS"));*/
  //3
  /*
    function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
      let c = string.charAt(i);
      if( string.charAt(i) ===' ')continue;
      if (string.indexOf(c) !== i && string.indexOf(c, i + 1) == -1) 
      {
          return c;
      
      } 
      
    }
  }console.log(firstNonRepeatedCharacter("e g jrd g"));*/
  //4
  /*
  let map = new Map([
    ['1','a'],
    ['2', 'b'],
    ['3', 'c'],
    ['4','d'],['5','e'],['6', 'f'],['7', 'g'],['8','h'],['9', 'i'],['10','j']
  ]);
  
console.log(map.get('12'));*/
//5
/*
console.log(
  [1, 4, 3, 0, 4, 5, 4].filter(element => !(element % 2)).reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
 ); */
 // 6
 /*
 function getVowels(str) {
  let m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}console.log(getVowels('aretino'))*/
//7
/*
function range(start,end,shag){
  if (shag===undefined){shag=1}
  let mas=[start,]
  if (start<end)
  while(start<end)
  { 
    start=start+Math.abs(shag);
    if (start<=end)
    mas.push(start);
  
  }
  else while(start>end)
  { 
    start=start-Math.abs(shag);
    if (start>=end)
    mas.push(start);
  
  }
  console.log(mas)
sum(mas)
}
function sum(mas){
  let ch=0;
  for (let i = 0; i < mas.length; i++) {
   ch=ch+mas[i];
    
  }
  console.log(ch);
}
let start=10
let end=15
let shag=-1;
range(start,end)*/
