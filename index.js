function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
  return array;
}

const array = [1, "2", 5, 3, "5", 4, 5, 6, "7"];
removeElement(array, 5);
console.log(array);
