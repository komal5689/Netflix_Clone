// let celciusInput = document.querySelector('#celcius > input')
// let fahrenheitInput = document.querySelector('#fahrenheit > input')
// let kelvinInput = document.querySelector('#kelvin > input')

// let btn = document.querySelector('.button button')

// function roundNumber(number){
//     return Math.round(number*100)/100
// }

// celciusInput.addEventListener('input',function(){
//     let cTemp = parsefloat(celciusInput.value)
//     let fTemp =  (cTemp*(9/5))+32
//     let kTemp = cTemp + 273.15

//     fahrenheitInput.value = roundNumber(fTemp)
//     kelvinInput.value = roundNumber(kTemp)
// })

// fahrenheitInput.addEventListener('input',function(){
//     let fTemp = parsefloat(fahrenheitInput.value)
//     let cTemp =  (fTemp-32)+(5/9)
//     let kTemp = (fTemp-32) + (5/9) + 273.15

//     celciusInput.value = roundNumber(cTemp)
//     kelvinInput.value = roundNumber(kTemp)
// })

// kelvinInput.addEventListener('input',function(){
//     let kTemp = parsefloat(kelvinInput.value)
//     let cTemp =  kTemp - 273.15
//     let fTemp = (kTemp-273.15) + (9/5) + 32

//     celciusInput.value = roundNumber(cTemp)
//    fahrenheitInput.value = roundNumber(fTemp)
// })

// btn.addEventListener('click',()=>{
//     celciusInput.value = ""
//     fahrenheitInput.value = ""
//     kelvinInput.value = ""

// })
let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin */
// celsiusInput.addEventListener('input', function(){
//     let cTemp = parseFloat(celsiusInput.value)
//     let fTemp = (cTemp*(9/5)) + 32
//     let kTemp = cTemp + 273.15

//     fahrenheitInput.value = roundNumber(fTemp)
//     kelvinInput.value = roundNumber(kTemp)
// })


// /* Fahrenheit to Celcius and Kelvin */
// fahrenheitInput.addEventListener('input', function(){
//     let fTemp = parseFloat(fahrenheitInput.value)
//     let cTemp = (fTemp - 32) * (5/9)
//     let kTemp = (fTemp -32) * (5/9) + 273.15

//     celsiusInput.value = roundNumber(cTemp)
//     kelvinInput.value = roundNumber(kTemp)
// })

// /* Kelvin to Celcius and Fahrenheit */
// kelvinInput.addEventListener('input', function(){
//     let kTemp = parseFloat(kelvinInput.value)
//     let cTemp = kTemp - 273.15
//     let fTemp = (kTemp - 273.15) * (9/5) + 32

//     celsiusInput.value = roundNumber(cTemp)
//     fahrenheitInput.value = roundNumber(fTemp)
// })


// btn.addEventListener('click', ()=>{
//     celsiusInput.value = ""
//     fahrenheitInput.value = ""
//     kelvinInput.value = ""
// })
// script.js
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (tempType.value === "kelvin") {
      const KelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }, 1200)
}
