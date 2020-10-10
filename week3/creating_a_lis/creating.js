//creating an h1 element
var newH1 = document.createElement("h1");
newH1.textContent = "Hello World";
document.body.appendChild(newH1);

//for loop to create 10 h1's and styling
for(var i = 0; i < 10; i++){
    var newH1 = document.createElement("h1");
    newH1.setAttribute("class", "stuff");
    var text = "Hello World";
    newH1.append(text);
    document.body.appendChild(newH1);
    newH1.style.color = "red"
    newH1.style.fontStyle = "italic"
    newH1.style.fontSize = "60px"
}
//creating an array and iterating it through a for loop
var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]
var newUl = document.createElement("ul")
newUl.setAttribute("id", "list")
document.body.appendChild(newUl)

var nameList = document.getElementById("list")

for(var i =0; i < names.length; i++){
    var newName = document.createElement("li")
    newName.textContent = names[i]
    nameList.append(newName)
}


