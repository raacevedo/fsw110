var heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Nightwing"]


for(var i = 0; i < heroes.length; i++){
    var newH2 = document.createElement("h2");
    newH2.setAttribute("class", "greeting");
    newH2.append(heroes);
    newH2.textContent = heroes[i]
    document.body.appendChild(newH2);
    newH2.style.fontSize = "20px"
    newH2.style.fontWeight = "lighter"
    newH2.style.fontFamily = "sans-serif"
    newH2.style.color = "cornflowerblue"

newH2.classList.add("border")
console.log(newH2.className)
}



