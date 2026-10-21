
// FUNCTIONS - 16/10/2026

//1
function fun1(){
    console.log("Welcome to JavaScript");
}
fun1()

//2
function stu_det(name,age,cgpa){
    console.log("name", name);
    console.log("age",age);
    console.log("cgpa",cgpa);
}
stu_det("kavi",24,8.4);
stu_det("suri",29,9.0);

//3
function cal_fee(fee){

   return fee;
}
let stufee = cal_fee(2000);
console.log(stufee);

//4
function discount(percent){
    let fees = 200000;
    let disAmt = (fees*percent)/100;
    let finalfee = fees - disAmt;
    console.log(finalfee);
}
discount(5);

//5
function studentform(name,age,disability="0"){
    console.log("Name:",name+"Age:",age+"Disabilility:",disability);
}
studentform("kk",24,"No");
studentform("sk",29,"No");
studentform("Anu",25);

//6
function named(message){
    console.log(message);
}
named("Hi, Hello!!! How are u???");

//7
let anno = function(para){
    console.log(para);
}
anno("Kavipriya Suriya");

//8
let arrow = (number)=>{
console.log(number);
}
arrow(34);

//9
function cls(){
    if(5){
        let a1 = "hi";
        var a2 = "hello";
        const a3 = "how r u?";
        console.log(a1); // hi
        console.log(a2); // hello
        console.log(a3); // how r u?
    }
    //console.log(a1);  says a1 is undefined
        console.log(a2); // hello
        // console.log(a3); says a3 is not defined
}
    
cls();

//10
console.log(value);
var value = 10; // undefined

//11
function first(){
    console.log("All is well/Higher order priority");
}
function second(){
    console.log("All is good/Callback");
}
second(first());

//12

let add = function(callback , a , b){
    console.log(a+b);
    callback(10,10);
}
let addition = (num1 , num2)=>{
console.log(num1+num2);
}
add(addition,10,20);

//13
let subraction = function(callback1 , a1 , b1){
    console.log(a1-b1);
    callback1(10,10);
}
let sub = (num11 , num22)=>{
console.log(num11-num22);
}
subraction(sub,10,20);

//14
let Mul = function(callbackkk , aa , bb){
    console.log(aa*bb);
    callbackkk(10,10);
}
let Multiplication = (nums1 , nums2)=>{
console.log(nums1*nums2);
}
Mul(Multiplication,10,20);

//15
let div = function(callbackk , s , k){
    console.log(s/k);
    callbackk(10,10);
}
let division = (ss , kk)=>{
console.log(ss/kk);
}
div(division,10,20);

//16
function one(callback){ 
let Stuname="kavi";
callback(Stuname);

}
function two(Stuname){
console.log("Hello",Stuname , "Welcome to the class");
}
one(two);

//17
function* gen(){
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
let newGen = gen()
console.log(newGen.next().value);
console.log(newGen.next().value);
console.log(newGen.next().value);

//18
console.log(newGen.next());
console.log(newGen.next());
console.log(newGen.next());

//19
function * gen1(){
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
    yield "Good Luck";
    yield "Be kind";
    
}
for(let i of gen1()){
    console.log(i);
}

//20
function * gen2(){
    yield "Student 1: Kavi";
    yield "Student 2: priya";
    yield "Student 3: suriya";
}
for(let x of gen2()){
    alert(x)
}

//21
function * gen3(){
    yield "Keep going";
    yield "Take care of your health";
    yield "Mom to be...";
    yield "DAD to be....";
    
}

let genn = gen3();
console.log(genn.next().value);
console.log(genn.next().value);
console.log(genn.next().value);
console.log(genn.next().value);


let result = genn.next();
console.log(result.done);

//22
function hifi(a,b,c){
    console.log(a+b+c);
}
hifi(1,4,6);

//23
function hifi1(aa){
    return function(bb){
        return function(cc){
            console.log(aa+bb+cc)
        }
    }
}
hifi1(5)(6)(7)

//24
function wifi(i){
    return function(j){
        return function(k){
           return i+j+k;
        }
    }
}
console.log(wifi(1)(2)(3));

//25
function totalprice(price){
    return function(discountPercent){
        return function(quantity){
            const discountPrice = price - (price*discountPercent)/100;
            return discountPrice*quantity;
        }
    }
}
console.log(totalprice(1000)(10)(3));

//26
function addNormal(a, b, c) {
  return a + b + c;
}

function addCurried(m) {
  return function (n) {
    return function (o) {
      return m + n + o;
    };
  };
}

const normalResult = addNormal(5, 10, 15);
const curriedResult = addCurried(5)(10)(15);

console.log("Normal function result:", normalResult);
console.log("Curried function result:", curriedResult);
console.log("Are both results equal?", normalResult === curriedResult)

//27
/*(function(prod,disc){
    alert(`now sale is live for ${prod} is in huge offer at ${disc}%`)
})("Shirts",40)*/

//28
function getNumber() {
  return 42;
}

const output = getNumber();
console.log(output);

//29
function getMarks(marks) {
  return marks;
}

const studentMarks = getMarks(85);
const Ans = studentMarks;

console.log("Student marks:", studentMarks);
console.log("Stored in another variable:", Ans);

//30
function calculateDiscount(fee) {
  return fee * 0.10; // 10% discount
}

// Main function with a default parameter, a callback, and a return value
function studentFee(name, fee = 200000, discountCallback) {
  const discount = discountCallback(fee);
  const finalFee = fee - discount;
  return finalFee;
}

// Using the default fee (pass undefined to trigger the default)
const fee1 = studentFee("Kavi", undefined, calculateDiscount);
console.log("Kavi's final fee: ₹" + fee1.toLocaleString("en-IN"));

// Passing a custom fee
const fee2 = studentFee("Priya", 150000, calculateDiscount);
console.log("Priya's final fee: ₹" + fee2.toLocaleString("en-IN"));