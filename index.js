var number1 ="46";

var number2="4";

var result = number1 + number2;

console.log(result);  //464


var number1 ="46";

var number2="4";

var result = parseInt(number1) + parseInt(number2);

console.log(result);  //50


var number1 ="46.06";

var number2="4.98";

var result = parseFloat(number1) + parseFloat(number2);

console.log(result);  //51.05

var num1 = "hello";

var num2 = "22";

var result = isNaN(num1)  

// isNan not a number

console.log(result);  //true num1 ricxvi araaa

result = isNaN(num2); //false rucxvia




var strSum = prompt ('შეიყავნეთ ანაბრის თანხა', 1000);
var strPercent = prompt ('შეიყვანეთ საპროცენტო განაკვეთი',10)
var sum = parseInt(strSum);
var percent = parseInt(strPercent);

sum = sum + sum * percent/100;

// alert("პროცენტის დარიცხვის შემდეგ ანავრის თანხა იქნება" + sum );


// var myArray = new Array();

// var people =[ "Tom" , "Alice", "Sam" ];
// console.log(people [1]); //Alice
// people[3] = "Bob"
// console.log(people [3]); //Bob


// var people =[ "Tom" , "Alice", "Sam" ];

// console.log(people[0]);//Tom

// people[0] = "Bob";

// console.log(people[0]); //Bob


var numers1 = [0,1,2,3,4,5]; //ერთგანზომილებიანი მასივი

var numers2 = [[0,1,2,],[3,4,5]] //ორ განზომილებიანი


var people =[
    ["Tom",  25,false],
    ["bill", 38,true],
    ["Alice",23,false]
];
var tomInfo = people[0][0];

var billInfo = people[1][0];

var aliceInfo = people[2][0];

console.log("სახელი" + " "+ tomInfo +" " +billInfo+" " +aliceInfo); //Tom

// ოპერატორი if

// var income = 500;
//  if(income > 100){
//     var message="შემოსავალი მეტია 500ზე"
//     alert(message);
//  }

//  var income = 500;
//  var age = 19;
//  if(income < 550 && age >18){
//     var message="შემოსავალი მეტია 500ზე"
//     alert(message);
//  }


// var age =17;

// if (age >= 18){
//     alert("თქვენ შესულიხართ პროგრამაში")
// }
// else{
//     alert("თქვენ არ შეგიძლიატ შესვლა რადგაც 18 - ხარ")
// }

var income = 900;
if (income<200){
    var message="დავალი ხელფასი გაქვს";
    alert(message)
}
else if (income >=200 && income <=400){
    alert("საშუალო");
}
else{
    alert("კაი ხელფასი");
}


