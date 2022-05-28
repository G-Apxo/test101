// for ([ინიციალიზაცია];[პირობა];[ინიცალიზაციის შეცვლა])


var people =["Tom", "Alice","Bob", "Sam"];

// for (var i = 0; i < people.length; i++){
//     console.log(people[i]);
// }

// for (var i=people.length -1; i >= 0; i--){
//     console.log(people[i]);
// }

// for ( var i in people){
//     document.write(people[i] + "</br>");
// }

// var idnex = 0;
// while (idnex < people.length){
//     console.log(people[idnex]);
//     idnex++;
// }

// var x=1;
// do {
//     document.write(x * x + "</br>");
//     x++
// }
// while (x<=10);

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// for (var i=0 ; i<numbers.length; i++){
//     if (numbers[i] >10)
//     break;
//     document.write(numbers[i] + "</br>");
// }

// var arr = [2,4,5,9,8,10,16,13];
// var result = arr.filter ((n) => n%2 ==0)
// document.write(result);

// function ფუნქციის სახელი([პარამეტრი]){
//     //ინსტრუქციები
// }

// function display(){
//     document.write("Hello");
// }
// display();

// var display = function(){
//     document.write("Hello");
// }
// display();




// function display(x){ // ფუნქციის განსაზღვრა
//     var z= x * x;
//     document.write(x + "</br>" +z);
// }

// var message = display;

// message(5); // ფუნქციის გამოძახება


// function display(x,y){
//     if(y===undefined) y=x;
//     var z= x * y;
//     document.write(x + "</br>" +y + "</br>" +z);
// }
// display(6,7);

// var y=5;
// var z = square(y);
// function square(x){
//     return x*x;
// }
// document.write(y+ "</br>" +z);

// function display (x,testmessage) {
//    var message = testmessage(x);
//     document.write(message);
// }
// function welcomeMesasge(time){
//     if (time<12)
//     return "Good Morning";
//     else if (time<18)
//     return "Good Afternoon";
//     else
//     return "Good Evening";
// }
// display (12,message);



// function getFactorial (n) {
//     if (n===1){
//         return 1;
//     }
//     else{
//         return n*getFactorial(n-1);
//     }
// }
// var result = getFactorial(4);
// document.write(result);
//  result = 4 * getFactorial(3);
//  result = 4 * 3 * getFactorial(2);
//  result = 4 * 3 * 2 * getFactorial(1);
//24

// hoisting
display();
function display(){
    console.log("hello hoisting")
}

var c = a*b; //undefined
var a = 7;
var b = 3;

console.log(c); //nan


console.log(foo) //undefiend
var foo = "hello";

// OOP (object oriented programming)



// var user = new Object();

// var user = {};
//     user.name = "Tom",
//     user.age = 26
// console.log(user.name);



// user.name  = "Tom";
// user.age = 26;

//     user.display = function(){
//         console.log(this.name);
//     }

//     user.display();

// var user = {
//     name: "Tom",
//     age: 26,
//     display: function(){
//         console.log(this.age);
//     }
// };

// user.display();


// var user = {
//     name: "Tom",
//     age :18,
//     display : function(){
//     }
// };

// console.log(user.name);
// delete user.name;
// console.log(user.name);


// var country = {
//     name: "USA",
//     language : "english",
//       capital:{
//             name: "Washington",
//             population:12312312,
//             year:1234
//       }   
// };

// console.log("დედაქალაქი" + country.capital.name);
// console.log("მოსახლეობა" + country.capital.population);
// console.log("დაარსების წელი" + country.capital.year)

// var cities = [
//     {name:"ცურიხი", population:31232131},
//     {name:"ჟენევა", population:12313},
//     {name:"რა,ე", population:13123211231}
// ]

var country = {
        name:"შვეიცარია",
        languages: ["გერმანული" , "ფრანგული" , "იტალიური"],
        capital:{
            name:"ბერნი",
            population:123123
        },
        cities :[
            {name:"ცურიხი", population:31232131},
            {name:"ჟენევა", population:12313},
            {name:"რამე", population:13123211231}
        ]
}

// ყველა ენის გამოტანა
    document.write("შვეიცარიის ოფიციალური ენებია");
    for (var i=0; i<country.languages.length; i++) {
     document.write(country.languages[i]);
    }

    document.write("ყველა ელემენტი ქლაქებიდან")
    for (var i=0; i<country.cities.length; i++){
        document.write(country.cities[i].name + country.cities[i].population)
    }e