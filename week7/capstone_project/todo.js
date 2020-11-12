
function display(event) {
    console.log(event)
    event.preventDefault()
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let type = document.getElementById("type").value;
   
    let div = document.createElement("div")
    div.id = document.body.children.length
    document.body.append(div)

    div.innerHTML+=("<h3>Thank You</h3>");
    div.innerHTML+=("<h3>Here is your info:</h3>");
    div.innerHTML+=(name + "<br/>");
    div.innerHTML+=(age + "<br/>");
    div.innerHTML+=(email + "<br/>");
    div.innerHTML+=(gender + "<br/>");
    div.innerHTML+=(type + "<br/>");
       
   
    function deleting (event){
        
        console.log("Trying to Delete")
        console.log(document.getElementById(event.target.className+""))
        document.getElementById(event.target.className).remove()
   
}
let button = document.createElement("button")
button.innerHTML = "Delete"
button.className = (document.body.children.length-1) +""
div.append(button)
console.log(document.getElementsByClassName((document.body.children.length-1) +"")[0])

// document.getElementsByClassName((document.body.children.length-1) +"")[0]
// button.addEventListener("click", deleting)
button.addEventListener("click", deleting); 
document.getElementById("name").value = "";
document.getElementById("age").value = "";
document.getElementById("email").value = "";    
document.getElementById("gender").value = ""; 
document.getElementById("type").value = "";
   
}

console.log(document.form)
document.form.addEventListener("submit", display)