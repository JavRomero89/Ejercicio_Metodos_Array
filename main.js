let myArray = [];

myArray.push("valor1");
myArray.push("valor2");

myArray.unshift("valor3");
myArray.unshift("valor4");

myArray.pop();
myArray.shift();

console.log("Longitud del array:", myArray.length);

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

