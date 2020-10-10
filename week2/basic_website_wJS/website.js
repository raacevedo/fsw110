//creating an h1
var newH1 = document.createElement("h1");
newH1.setAttribute("id", "header");
newH1.textContent = "Batman Fan Page";
document.body.append(newH1);
header.style.fontSize = "50px";

//creating the navbar
var nBar = document.createElement("nav")
document.body.appendChild(nBar)
nBar.setAttribute("id", "nBar")
nBar.style.textAlign = "center"
nBar.style.fontSize = "20px";


//creating links
var anchorElm = document.createElement("A");
anchorElm.setAttribute("href", "*");
var page = document.createTextNode("NEWS");
anchorElm.appendChild(page);
nBar.appendChild(anchorElm);
anchorElm.style.paddingRight = "10px"




//creating links
var anchorElm = document.createElement("A");
anchorElm.setAttribute("href", "*");
var page = document.createTextNode("CHAT");
anchorElm.appendChild(page);
nBar.appendChild(anchorElm);
anchorElm.style.paddingRight = "10px"


//creating links
var anchorElm = document.createElement("A");
anchorElm.setAttribute("href", "*");
var page = document.createTextNode("REVIEWS");
anchorElm.appendChild(page);
nBar.appendChild(anchorElm);
anchorElm.style.paddingRight = "10px"

//creating an p
var newP = document.createElement("p");
newP.textContent = "News, Images and More All About Batman";
document.body.append(newP);
newP.style.fontSize = "30px";

//creating on ul
var newUl = document.createElement("ul");
newUl.setAttribute("id", "myUl");
newUl.textContent = "What we do on this page";
document.body.appendChild(newUl);
newUl.style.fontSize = "20px";

//creating an li and adding it to the ul
var newLi = document.createElement("li");
var info = document.createTextNode("Discuss favorite movies, comics and shows about Batman");
newLi.appendChild(info);
document.getElementById("myUl").appendChild(newLi);

//creating an li and adding it to the ul
var newLi2 = document.createElement("li");
var info = document.createTextNode("Discuss the most recent news on The Batman coming out 2021");
newLi2.appendChild(info);
document.getElementById("myUl").appendChild(newLi2);

//creating an li and adding it to the ul
var newLi3 = document.createElement("li");
var info = document.createTextNode("Display pictures on cosplay and fan created art work");
newLi3.appendChild(info);
document.getElementById("myUl").appendChild(newLi3);

//footer
var foot = document.createElement("footer");
foot.setAttribute("id", "foot");
document.body.appendChild(foot);

var para = document.createElement("p");
var info = document.createTextNode("2020 made by Batman Fans");
para.appendChild(info);
document.getElementById("foot").appendChild(para);
