//for loop
var x=10;

for(i=0;i<x;i++){
 console.log("The number " +i+ " is smaller than " +x);
}
  
// While loop :try this code on chrome console
 console.log("Hello Welcome to the App");
 var pass=prompt("Create a Password");
 console.log("Your password has been created");

var passtry=prompt("Please Enter your Password");
while(passtry!=pass){
    passtry=prompt("Incorect Password, try again");
}
console.log("You are in");