// function myFunction(){
//     document.getElementById("demo").innerHTML = "<button>more button</button>"
// }


//     document.getElementById("click").onclick = function() {myFunction()};


    // function toogleFunction(){
    //     var element = document.getElementById("myDiv");
        
    //     element.classList.toggle("mystyle")
    // }


    var button = document.getElementById("clickme"),
    count = 0;
    button.onclick = function (){
        count += 1;
        button.innerHTML = "click me" + count;
    };
    
