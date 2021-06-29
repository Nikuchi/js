/*1 факториал числа рекурсией
function fact(n)
{
    return (n != 1) ? n * fact(n - 1) : 1;
fact(n)
} console.log( fact(10) );*/
//2 
/*
function gcd(a, b)
{
if (a == 0)
return b;
while (b != 0) {
if (a > b)
    a = a - b;
else
    b = b - a;
}
return a;
gcd(a,b);
}console.log(gcd(360,336));*/
//3
/*
let mas=[1, 2, 3, 4, 5, 6]
function sum_mas(mas){
    let sum=0;
    for (let i = 0; i < mas.length; i++) {
        sum += mas[i];
      
        
    }
    console.log(sum);
   

}sum_mas(mas);*/
//4
/*function fib(fn){
    fn=((fn-1)+(fn-2));
    return fn;
    fib(fn);
   

}console.log(fib(7));*/
//5
/*
(function loop(i) {
    setTimeout(function main() {
        console.log("Hello World!");
        if (i > 1) loop(i - 1);
    }, 3000);
}(3));*/
