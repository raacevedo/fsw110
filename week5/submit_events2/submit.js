function getdetails()
{
var fname = document.details.fname.value;
var lname = document.details.lname.value;
var age = document.details.age.value;
var gender = document.details.genderbox.value;
var locations = document.details.locations.value;
var diet = document.details.diet;

var items = document.getElementsByClassName("diet");
console.log(document.getElementsByClassName("diet"))
var food =""
for (var i=0; i < document.getElementsByClassName("diet").length;i++){
    console.log(document.getElementsByClassName("diet")[i].checked)
    if(document.getElementsByClassName("diet")[i].checked){
        food+=document.getElementsByClassName("diet")[i].value+" "
    }
}

// console.log(food)
alert("FIRST NAME: " +fname+" \n "+"LAST NAME: "+lname+" \n "+"AGE: "+age+" \n "+"GENDER: "+gender+" \n "+"LOCATION: "+locations+" \n "+"DIET: "+diet);
}

const form = document.details

// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     display()
// })