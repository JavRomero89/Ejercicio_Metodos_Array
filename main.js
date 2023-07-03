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

console.log("-------------------------------")

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const positionWednesday = daysOfWeek.indexOf('Wednesday');

if (positionWednesday !== -1) {
  const wednesdayLength = daysOfWeek[positionWednesday].length;
  
  if (wednesdayLength > positionWednesday) {
    daysOfWeek.reverse(); 
  }
}

const firstElementLength = daysOfWeek[0].length;
const secondElementLength = daysOfWeek[1].length;

if (firstElementLength < secondElementLength) {
  const firstThreeElements = daysOfWeek.slice(0, 3); 
  console.log(firstThreeElements);
}

if (daysOfWeek.includes('Sunday')) {
  console.log("That's nice!");
} else {
  console.log("Oh no!");
  daysOfWeek.push('Sunday'); 
}

console.log(daysOfWeek);

console.log("-------------------------------")

// Utilizando el método reverse()
const array1 = [1, 2, 3, 4, 5];
const reversedArray1 = array1.reverse();
console.log(reversedArray1);

// Sin utilizar métodos de array, solo con un bucle for
const array2 = [6, 7, 8, 9, 10];
const reversedArray2 = [];

for (let i = array2.length - 1; i >= 0; i--) {
  reversedArray2.push(array2[i]);
}

console.log(reversedArray2);


console.log("-------------------------------")

// Crear un array vacío llamado numbers
const numbers = [];

// Llenar el array con números del 0 al 10 utilizando un bucle for
for (let i = 0; i <= 10; i++) {
  numbers.push(i);
}

console.log(numbers);

// Sumar los números en el array numbers utilizando un bucle for
let results = 0;

for (let i = 0; i < numbers.length; i++) {
  results += numbers[i];
}

console.log(results);

// Crear dos arrays vacíos llamados evens y odds
let evens = [];
let odds = [];

// Iterar sobre el array numbers y clasificar los números pares en evens y los impares en odds
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  } else {
    odds.push(numbers[i]);
  }
}

console.log(evens);
console.log(odds);

console.log("-------------------------------")

const fruits = ["pera", "banana", "mandarina", "frambuesa"];
const colors = ["verde", "amarilla", "naranja", "roja"];

// Verificar que los dos arrays tienen la misma longitud
if (fruits.length === colors.length) {
  // Iterar sobre los arrays y mostrar cada fruta con su color correspondiente
  for (let i = 0; i < fruits.length; i++) {
    console.log(`La ${fruits[i]} es ${colors[i]}`);
  }
} else {
  console.log("Los arrays no tienen la misma longitud");
}








