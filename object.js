//Date
// ////1
// var currentDate = new Date();

// document.write(currentDate);

// ///////2
// var myDate = new Date(100);

// document.write(myDate);

// //////3

// var constDate = new Date("3 june 2022");

// document.write(constDate);


// const d = new Date("July 21, 1983 01:15:00");
// let day = d.getDate()



// getDate () // ეს აბრუნებს თვის რიცხვს
// getDay() // აბრუნებს კვირს დღეს  0 კვირა 6 შაბათი
// getMont() // თვის ნომერს 0 ინავიარი 11 დეკემბერი
// getFullYear() // წელს დააბრუნებს
// getHours() // საათს (0 დან 23 )
// getMinunets() // წუთებს (0 დან 59 ჩალიტ)
// getMilleseconds() // მილიაწმებს (0 დან 999)

// var days = ["კვირა", "ორშაბათი","სამშაბათი", "ოთხშაბათი", "ხუთშაბაღი","პარასკევი" ];
// var month = ["იანვარი", "თებერვალი" , "მარტი" , "აპრილი" , "მაისი" ,"ივნისი"]   ;

// var myDate = new Date();

// var fullDate = "დღეს" + myDate.getFullYear() + "წლის" + myDate.getDate() + " " + month[myDate.getMonth()] + " " + days[myDate.getDay()];

// document.write(fullDate);


// var welcome;

// var myDate = new Date();

// var hour = myDate.getHours();

// var minute = myDate.getMinutes();

// var second = myDate.getSeconds();

// if (minute <10 ){
//     minute = "0" + minute;
// }
// if (second < 10 ) {
//     second = "0" + second;
// }
// if(hour < 12) {
//     welcome = "დღე მშვიდობის";
// }
// else if (hour < 17){
//     welcome = "შუა დღე მშვიდობის";
// }
// else {
//     welcome = "საღამო მშვიდობის";
// }

// document.write (welcome + " მინდინარე დროა " + hour + "." + minute + ":" + second); 



var x = -25;
document.write(Math.abs(x)); //25

//  min()
//  max()

 var max = Math.max(19,45) // 45

 var min = Math.min(19,45) //19
 document.write(min)

 var z = Math.floor (9.2) //9

 var y = Math.ceil(9.2)// 10

 var q = Math.round(9.2)// 9

 var r = Math.random()

 document.write (r)

 var test = Math.pow(2,3); //8

 var sqr = Math.sqrt(121) // 11

 var log = Math.log(1); //0

//  .sin  .cos  .tan 


// var user = new Array("Tom","Boll", "Giorig");
// var people = ["Tom","Boll", "Giorig"];

// console.log(user);
// console.log(people);

var users = new Array();

users [0] = "giorgi"
users [1] = "tom";
users [2] = "Bill";

document.write( users.length );

for ( var i = 0; i<users.length; i++)

    document.write(users[i]);


//// .push() ეს გიმატებს ელემენტს მასივის ბოლოში
// var fruit = ["ვაშლი" , "მსხალი" , "ატამი"];

// fruit.push ("პომიდორი");

// document.write (fruit.length);

// document.write(fruit);

// .pop() ეს წაშლის ბოლო ელემენტს მასივში

var fruit1 = ["ვაშლი" , "მსხალი" , "ატამი"];

var lasFruit = fruit1.pop() //წასალით მასივის ბოლო ელემენტი

document.write(lasFruit);

document.write (fruit1.length);

document.write(fruit1);


const array1 = ["one" ,"two" , "three"];

const reversed= array1.reverse();
console.log (reversed);


//////shift() ეს არის პირველი ელემენტის წაშლა

var fruit1 = ["ვაშლი" , "მსხალი" , "ატამი"];

var lasFruit = fruit1.shift() //წასალით მასივის პირველი ელემენტი

document.write(lasFruit);

document.write (fruit1.length);

document.write(fruit1);

///// unshift() ამატაბეს დასაწყისში

var fruit = ["ვაშლი" , "მსხალი" , "ქლიავი"]

var firsFtuit = fruit.unshift("მსხალი")
document.write(fruit);

/////// .splice()

var fruit = ["ვაშლი" , "მსხალი" , "ქლიავი"]

fruit.splice (1,2) //მეორე და მესამე ელემტებს

///  outpt   ვაშლი


//////// .join() აერთიაბს მასივის ყველა ელემტს ერთ სტრიქონში
var fruit = ["ვაშლი" , "მსხალი" , "ქლიავი"]

fruit.join (",") // ვაშლი,მსახლი,ქლიავი



// const myTimeout = setTimeout (Firsttimeout , 5000)
// function Firsttimeout(){
//     alert("after 5 seconds")
// }


// event loop
function ohGodItsAnEventLoopQuestion() {
    console.log(1); 
    setTimeout(function() { console.log(2); }, 1000); 
    setTimeout( function() { console.log(3); }, 0); 
    console.log(4);
 }
 
 ohGodItsAnEventLoopQuestion(); 
