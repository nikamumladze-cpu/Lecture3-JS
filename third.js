function removeNamesWithLetter(arr, letter) {
  return arr.filter(
    (name) => !name.toLowerCase().includes(letter.toLowerCase())
  );
}

const names = ["Mary", "Luka", "Levan", "Tako", "Giorgi", "Ana", "Salome"];
console.log(names);

const filteredNamesI = removeNamesWithLetter(names, "i");
console.log(filteredNamesI);
