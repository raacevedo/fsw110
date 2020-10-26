var form = document.getElementById("details");
var submits = document.getElementById("sub-button")

function getdetails(){

var fname = document.details["fname"].value;
var lname = document.details["lname"].value;
var age = document.details["age"].value;
var gender = document.details["gender"].value;
var locations = document.details["locations"].value;
var diets = "";


if (document.getElementById("nut").checked) {
    diets += document.getElementById("nut").value
}
if (document.getElementById("gluten").checked) {
    diets += document.getElementById("gluten").value
}
if (document.getElementById("veggie").checked) {
    diets += document.getElementById("veggie").value
}
if (document.getElementById("na").checked){
    diets += document.getElementById("na").value
}

console.log(diets)
alert("FIRST NAME: " +fname+" \n "+"LAST NAME: "+lname+" \n "+"AGE: "+age+" \n "+"GENDER: "+gender+" \n "+"LOCATION: "+locations+" \n "+"DIET: "+diets);
//form.reset()
}
// const form = document.details
// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//  getdetails()
// })

//submits.addEventListener("click", formAlert);
