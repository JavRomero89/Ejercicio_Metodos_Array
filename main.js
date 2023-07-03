let Array = [];

Array.push("valor1");
Array.push("valor2");

Array.unshift("valor3");
Array.unshift("valor4");

Array.pop();
Array.shift();

console.log("Longitud del array:", Array.length);

console.log("-------------------------------")

const nombres = ["Carlos", "María", "Isidro", "Elizondo", "Molina"];

const slicedNames = nombres.slice(1, 3);
console.log(slicedNames); 

const index = nombres.indexOf("Elizondo");
if (index !== -1) {
  nombres.splice(index, 1, "Parma");
}

console.log(nombres); 

console.log("-------------------------------")

const names = ["Carlos", "María", "Isidro", "Parma", "Molina"];

const joinedNames = names.join(" ");

console.log(joinedNames); 

console.log("-------------------------------")

const sentence = "El perro de San Roque no tiene rabo";

const wordsArray = sentence.split(" ");
console.log(wordsArray);

const lettersArray = sentence.split("");
console.log(lettersArray); 

console.log("-------------------------------")

const months = ["January", "February", "Marj", "April", "Mei"];
months[2]= "March"
months[4]= "May"

console.log(months);

const newMonths = ["June", "July", "August", "September"];
const totalMonths = months.concat(newMonths);

console.log(totalMonths);

totalMonths.push("October", "November", "December");

console.log(totalMonths);

console.log("-------------------------------")

let num1 = 9;
let num2 = 7;
let num3 = 5;

if (num1 > num2) {
  totalMonths.pop(); // Elimina el último elemento del array
} else if (num2 > num3 && num2 < 10) {
  totalMonths.shift(); // Elimina el primer elemento del array
} else if (num2 > num3 || num2 > num1) {
  totalMonths.push("October"); // Añade "October" al final del array
} else {
  console.log("Bad luck!"); // Ninguna condición se cumple
}

console.log(totalMonths);





