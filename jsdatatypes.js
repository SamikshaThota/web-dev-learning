<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="box">
    I am a box
  </div>
  <script src="script.js"></script>
</body>
</html>

alert("Hello Coders!");

console.log("Code is running");

var a=prompt("Enter you name: ");
console.log("Your name is: "+a);

var isTrue=confirm("Are you sure you wanted to leave the page? ");
if(isTrue){
  console.log("Thank you for visiting");
}
else{
  console.log("Alright!you stay in this page");
}

document.title="Website"

document.body.style.backgroundColor="red";

console.log("Code is running");
var a=10; var b=20; var c="Samiksha";let d=10;
console.log(a+b+8);
console.log(typeof a,typeof b,typeof c);
const a1=6;
//a1=a1+1;
//console.log(a1);
{
  let d=20;
  console.log(d);
}
console.log(d);

let p="Samiksha";
let q=24;
let r=3.44;
let x=true;
let y=null;
let z=undefined;
console.log(p,q,r,x,y,z);
console.log(typeof p,typeof q,typeof r,typeof x,typeof y,typeof z);

let o={
  "name":"Samiksha",
  "age":21,
  "Gender":"Female"
}
console.log(o);
o.isEducated="false";//we can add
console.log(o);
o.isEducated="true";//update
console.log(o);
