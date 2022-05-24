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

function display (x,testmessage) {
   var message = testmessage(x);
    document.write(message);
}
function welcomeMesasge(time){
    if (time<12)
    return "Good Morning";
    else if (time<18)
    return "Good Afternoon";
    else
    return "Good Evening";
}
display (12,message);

