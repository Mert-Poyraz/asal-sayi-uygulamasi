
let dataUser = document.querySelector("#formUser")
let div = document.querySelector("#result")
dataUser.addEventListener('submit', numberUser);

function numberUser(event) {
    event.preventDefault()
    
let inputNumber = document.querySelector("#inputUser")
let number = parseInt(inputNumber.value)
let isprime = true;
 
for (let i = 2; i < number / 2; i++) {
  if (number % i == 0) {
    isprime = false;
    break;
  }
}

if (isprime) {
  div.innerHTML= (number + " asal sayıdır.");
} else {
  div.innerHTML= (number + " asal sayı değildir.");
}
}