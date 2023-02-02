     //use this code on chrome console
console.log("Welcome to the Food app");
console.log("Lets create an account");

var username=prompt("Please create your username");
var password=prompt("Please create your password");
console.log("Thank you! your account have been created");

console.log("Please enter your login information");
var tryuser=prompt("Username: ");
var trypass=prompt("Password: ");

while(username != tryuser && password != trypass){
 console.log("Incorrect useername or password");
 var tryuser=prompt("Enter your username ");
 var trypass=prompt("Enter your password ");
}
console.log("You are connected");

var balance= 10000;
console.log("Your current balance is Rs " +balance);
var q1=prompt("Would youu like to add money to your account?");

if(q1=="yes"){
    var q2=prompt("How much would you like to add");
    var balance=balance+Number(q2);
    console.log("Your new balance is Rs " +balance);
}else {
    console.log("Great!");
}

var q3=prompt("Would you like a pizza?");

if(q3=="yes"){
    console.log("Please choose your pizza");
    var pizzaType=["Cheese pizza", "Chicken blast", "Chicken tikka"];
    var price=[200,220,250];
    console.log("Choice 1: " +pizzaType[0]+ " Rs " +price[0]);
    console.log("Choice 2: " +pizzaType[1]+ " Rs " +price[1]);
    console.log("Choice 3: " +pizzaType[2]+ " Rs " +price[2]);

    var q4=prompt("What is your choice");
    if(q4=="choice 1"){
       console.log("You have ordered a " +pizzaType[0]);
       console.log("The total price is Rs " +price[0]);
       var balance=balance-price[0];
       console.log("You have Rs" +balance+ "left on your balance"); 
    }else if(q4="choice 2"){
         console.log("You have ordered a " +pizzaType[1]);
         console.log("The total price is Rs " +price[1]);
         var balance=balance-price[1];
         console.log("You have Rs" +balance+ "left on your balance"); 
    }else if(q4="choice 3"){
         console.log("You have ordered a " +pizzaType[2]);
         console.log("The total price is Rs " +price[2]);
         var balance=balance-price[2];
         console.log("You have Rs " +balance+ " left on your balance"); 
    }
}else {
    console.log("Have a good day");
}
