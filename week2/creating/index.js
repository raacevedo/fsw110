// creating an h1
var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS site"
document.body.append(newH1)

//creating a p
var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)

//creating on ol
var newOl = document.createElement("ol");
newOl.setAttribute("id", "myOl");
newOl.textContent = "What was made in JavaScript"
document.body.appendChild(newOl);

//creating an li and adding it to the ol
var newLi = document.createElement("li");
var info = document.createTextNode("h1");
newLi.appendChild(info);
document.getElementById("myOl").appendChild(newLi);

//creating an li and adding it to the ol
var newLi2 = document.createElement("li");
var info = document.createTextNode("p");
newLi2.appendChild(info);
document.getElementById("myOl").appendChild(newLi2);

//creating an li and adding it to the ol
var newLi3 = document.createElement("li");
var info = document.createTextNode("ol");
newLi3.appendChild(info);
document.getElementById("myOl").appendChild(newLi3);

