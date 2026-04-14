let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);
///
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");
///
let btn=document.querySelector("#btn");
btn.classList.add("blue")
///
let tex=document.createElement("h1");
tex.innerHTML="<u>DOMPractice</u>";
document.querySelector("body").append(tex);
///
let p=document.createElement("p");
p.innerHTML="ApnaCollege<b>Delta</b>Practice";
document.querySelector("body").append(p);