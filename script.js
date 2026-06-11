let name="tejasree";
var age=19;
const height=5.4;
console.log(age);
console.log(age+5);
console.log(age-3);
console.log(age*2);
console.log(age/2);
console.log(age%2);
age+=3
console.log(age);
age-=2;
console.log(age);
age*=2;
console.log(age);
age/=2;
console.log(age);
age%=2;
console.log(age);
let age1=30;
console.log(age>age1);
console.log(age<age1);
console.log(age>=age1);
console.log(age<=age1);
console.log(age===age1);
let food="pizza";
let food1="dosa";
let food2="idly";
let food3="pori";
if(food===food1){
    console.log("both are nice foods");
}
else{
    console.log("both are different foods");
}
for(let i=1;i<=30;)
{
    console.log("day "+i+" completed");
    i++;
}
function cook()
{
    console.log("pour the batter into the pan");
    console.log("cook until golden brown");
    console.log("flip the pancake and cook the other side");
    console.log("serve hot with syrup");
}
for(let i=1;i<=3;i++){
cook();} 
function dishwash(vessels){
    console.log("we have to wash "+vessels+" vessels");
}
dishwash(2); 
function num(n)
{
    if(n>10){
        return;
    }
    console.log(n);
    n+=1;
    num(n);
}
num(1);