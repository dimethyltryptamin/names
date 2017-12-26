let femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
let maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
let allNames = femaleNames.concat(maleNames);
let newName = "Marian";
allNames.indexOf(newName) === -1 ? allNames.push(newName):0;
