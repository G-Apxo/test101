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
    // document.write("შვეიცარიის ოფიციალური ენებია");
    // for (var i=0; i<country.languages.length; i++) {
    //  document.write(country.languages[i]);
    // }

    // document.write("ყველა ელემენტი ქლაქებიდან")
    // for (var i=0; i<country.cities.length; i++){
    //     document.write(country.cities[i].name + country.cities[i].population)
    // }



    // function createUser( pName, pAge ){
    //     return {
    //         name:pName,
    //         age:pAge,
    //         displayInfo:function(){
    //             document.write("სახელი" + this.name + "ასაკი" +this.age +"</br>");
    //         }
    //     };
    // };
    //     var Tom = createUser("Tom", 26);
    //     Tom.displayInfo();

    //     var giorgi = createUser("Giorgi" ,24);
    //     giorgi.displayInfo();


    // var tom = new Object();


    // function User (pName, pAge){
    //     this.name = pName;
    //     this.pAge = pAge;

    //     this.displayInfo = function(){
    //         document.write ("saxeli" + this.name + "asaki" + this.age)
            
    //     }
    // }

    //     var tom = new User("Tom", 26);
    //     console.log(tom.name);
    //     tom.displayInfo();


    // function createUser( pName, pAge){
    //     return {
    //         name:pName,
    //         age:pAge,
    //         displayInfo:function(){
    //             document.write("სახელი" + this.name + "ასაკი" +this.age +"</br>");
    //         },
    //         dirveCar:function(car){
    //             document.write(this.name + "მანქანის მარკა" + car.name + "წელი" +car.year + "</br>");
    //         }
    //     }
    // };

    // function createCar(mName, mYear){
    //     return{
    //         name:mName,
    //         year:mYear
    //     }
    // }
    // var Tom = createUser("Tom", 26);
    // Tom.displayInfo()

    // var tesla = createCar("Tesla" ,2008);

    // Tom.dirveCar(tesla);


        /// car constructor
    function Car(mName , mYear) {
        this.name = mName;
        this.year = mYear;
        this.getCarInfo = function(){
            document.write("modeli" + this.name+  "gamsovhebis weli" + this.year);
        };
    };

    // user constructor

    function User (pName, pAge){
        this.name = pName;
        this.age = pAge;
        this.driveCar = function(car) {
            document.write ( this.name +  "yavs manqana" + car.name )
        };
        this.displayInfo = function() {
            document.write("saxeli" + this.name + " asaki "+ this.age)
        }
    }
    var tom = new User("Tom", 26);
    tom.displayInfo();

    var tesla = new Car("Tesla" ,2008);

    tom.driveCar(tesla);

/////////////////////////////////   prototype      ///////////////////////////////////////////////////
    function User (pName , pAge) {
        this.name = pName;
        this.age = pAge;
        this.displayInfo = function(){
            document.write("saxeli" + this.name + "asaki" +this.age);
        }
    }

    User.prototype.hello = function(){
        document.write (this.name + "says hello")
    }

    User.prototype.maxAge = 110;

    var tom = new User ("tom" , 20);
    tom.hello();

    var jhon = new User ("jhon", 100);
    jhon.hello();


    /////////////////////////////////   ინკაფსულაცია      ///////////////////////////////////////////////////

 
    // (getter)
    // (setter)


    function User (name, age) {
        this.name = name ;
        var _age = age;
        this.displayInfo = function (){
            document.write ("saxeli" + this.name + "asaki" + _age+ "</br>");
        };
        this.getAge = function() {
            return _age;
        }
        this.setAge = function(age) {
            if (typeof age === "number" && age >0 && age <100) {
                return _age=age;
            }
            else{
                console.log("araswori mnishveloba")
            }
        }
    }


    // var tom = new User ("tom" , 26);

    // console.log (tom._age); //26   undefined   
    // console.log(tom.getAge()); // 26

    // tom.setAge(32);

    // console.log(tom.getAge()); // 32 
    // tom.setAge("54"); // araswori mnishvneloba


    // console.log( typeof 42 ); // number
 
    // console.log( typeof "42" );// string 

    // console.log( typeof "true");// boolean

    // console.log( instanceof)


    // function Car(make,mode,year) {
    //     this.make = make;
    //     this.mode = mode;
    //     this.year = year;
    // }
    // const auto = new Car ('Honda' , "crv" , 1998);

    // console.log (auto instanceof Car);

    // console.log (auto instanceof Object);



        // functon
        // 1) arguments პარამეტრების მასივი
        // 2)lengt პარამეტრების რაოდენობა რასაც ფუნქცია ელოდება
        // 3)caller გნასზაღვრავს ფუნქციას რომელიც წამოიწყო ფუნქციის მიმდინარე შესრულება
        // 4)name ფუნქციის სახელი
        // 5)protoype ფუნქციის პროტიტპი

    // call apply  

    // function add(x,y){
    //     return x+y;
    // }

    // var result = add.call(this , 3,8);

    // console.log(result) // 11



    // function add(x,y){
    //     return x+y;
    // }

    // var result = add.apply(null , [3,8]);

    // console.log(result) //11



    // function User (name,age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // var tom = new User ("tom" , 24) ;

    // function display() {
    //     console.log("misi saelia" + this.name);
    // }

    // display.call(tom);

        /////////////////////////////////   inheritance      ///////////////////////////////////////////////////

        function User (name, age) {
            this.name = name;
            this.age = age;
            this.go = function() {
                document.write(this.name + "he is going")
            };
            this.displayInfo = function(){
                document.write ("saxeli" + this.name + "asaki" + this.age)
            };
        }
        User.prototype.maxAge = 100;

        function Employee(name,age,comp) {
            User.call(this ,name ,age) ;
            this.company = comp;
            this.displayInfo = function(){
                document.write ("saxeli" + this.name + "asaki" + this.age + "company" + this.company )
            };
        }

        Employee.prototype = Object.create(User.prototype);

        var tom = new User ("tom", 26);
        var bill = new Employee ("bill",32,"Tesla")

        tom.go();
        bill.go();

        tom.displayInfo();
        bill.displayInfo();

        /////////////////////////////////   This      ///////////////////////////////////////////////////

        this.alert("global alert")

        function foo () {
            var bar = "test"
            console.log (bar);
        }