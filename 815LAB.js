window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
const cInput = document.getElementById("cInput");
const fInput = document.getElementById("fInput");
const convertButton = document.getElementById("convertButton");
const errorMessage = document.getElementById("errorMessage");
const weatherImage = document.getElementById("weatherImage");

convertButton.addEventListener("click", function() {
   if (cInput.value.trim() !== "") {
      let celsius = parseFloat(cInput.value);
      if (!isNaN(celsius)) {
         let fahrenheit = convertCtoF(celsius);
         fInput.value = Math.round(fahrenheit);
         updateWeatherImage(fahrenheit);
         errorMessage.textContent = "";
      } else {
         errorMessage.textContent = `${cInput.value} is not a number`;

      }
   } else if (fInput.value.trim() !== "") {
      let fahrenheit = parseFloat(fInput.value);
      if (!isNaN(fahrenheit)) {
         let celsius = convertFtoC(fahrenheit);
         cInput.value = Math.round(celsius);
         updateWeatherImage(fahrenheit);
         errorMessage.textContent = "";
      } else {
         errorMessage.textContent = `${fInput.value} is not a number`;
      }
   }
});

cInput.addEventListener("input", function() {
   fInput.value = "";
   errorMessage.textContent = "";
});

fInput.addEventListener("input", function() {
   cInput.value = "";
   errorMessage.textContent = "";
});

}

function convertCtoF(degreesCelsius) {
return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
return (degreesFahrenheit - 32) * 5/9;
}

function updateWeatherImage(degreesFahrenheit) {
   let imageName;
   if (degreesFahrenheit < 32) {
      imageName = "cold.png";
   } else if (degreesFahrenheit >= 32 && degreesFahrenheit <=50) {
      imageName = "cool.png";
   } else {
      imageName = "warm.png";
   }
   weatherImage.src = `images/${imageName}`;
}