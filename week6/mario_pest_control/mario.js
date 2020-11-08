let goombasQty = document.getElementById('quantityGoombas');
let bobombsQty = document.getElementById('quantityBobombs');
let cheepcheepQty = document.getElementById('quantityCheepcheeps');
let submitBtn = document.getElementById('submitButton');
let outputPara = document.getElementById('totalPrice');

function calcPrice(qty, price){
  return qty * price;
}

function getMessage(qty, total){
  return outputPara.innerHTML = 'Mario Captured ' + qty + ' pest(s) and your total price is ' + total + ' coins'  + '<br><br>' + '<button>Proceed To Checkout</button>';
}

submitBtn.addEventListener('click', function() {
 if(goombasQty.value === '0' && bobombsQty.value === '0'  && cheepcheepQty.value === '0'){
   alert('Please enter the amount of pest that were captured in your home');
 } else {
   let totalgoombas = calcPrice(goombasQty.value, 5);
   let totalbobombs = calcPrice(bobombsQty.value, 7);
   let totalcheepcheep = calcPrice(cheepcheepQty.value, 11);
   let totalPrice = totalgoombas + totalbobombs + totalcheepcheep;
   let totalPest = parseInt(goombasQty.value) + parseInt(bobombsQty.value) + parseInt(cheepcheepQty.value);
   getMessage(totalPest, totalPrice);
 }
});