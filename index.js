function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--
    }
  }
  return array;
}

const array = [3, 3, 1, "2", 5, 5, 5, 5, 5, 3, 3, 3, 3, "5", 4, 5, 6, "7", 3, 3];
removeElement(array, 5);
console.log(array);
