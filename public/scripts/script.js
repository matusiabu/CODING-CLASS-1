const socketio = io();

const mssgContainer = document.querySelector("#messageContainer");

socketio.on("systemMessage", function(message){
  console.log(message);

let newElement = document.createElement("div");
let newTextElement = document.createElement("p");

newElement.innerHTML = message;

newElement.append(newTextElement);

mssgContainer.append(newElement);

});




document.querySelector("#buttonThis").addEventListener("click", function(){
socketio.emit("socketMessage", "THIS ONE CLICKED" );

});

document.querySelector("#myForm").addEventListener("submit", function (e) {

e.preventDefault();

document.querySelector("#myInput").value;

socketio.emit("socketMessage", document.querySelector("#myInput").value );

document.querySelector("#myInput").value = "";
document.querySelector("#myInput").focus();

});




let myVariable = "martijn";

const myConstant= "martijn";

myVariable = "tim";


//datatype: Strings
const myName = "Martijn";

//datatype: Numbers
let myAge = 29;

//datatype: Array
let classNames = ["Martijn","Tim","Lotte" ];
let myArray = [];

//datatype: Object
let classGroup = {
className: "3B",
studentNames: ["Martijn","Tim","Lotte" ],
classRepresentative:"Martijn",
codingTeacher: "Martijn"

};


classGroup.classRepresentative //Martijn

classNames.forEach(function(name) {
console.log("hello" + name);

});


//
function myFunction(message, prefix, age, name){
  console.log(message);
}

document.querySelector("#buttonThis").addEventListener("click", myFunction);
// myFunction();


//
