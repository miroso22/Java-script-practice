'use strict';
const arr1 = [30, 19, 9, 15, 1, 55, 24, 3, 78, 46, 41, 14, 18, 2, 12];
const arr2 = [ 0, 39, 21, 31, 45, 34, 27, 26, 20, 9, 10, 7, 36, 4, 13 ];
const arr3 = [ 40, 43, 46, 47, 4, 50, 15, 48, 25, 36, 0, 17, 18, 3, 1 ];

const quickSort = (array, first = 0, last = array.length - 1) => {
  let comparisons = 0;
  const swap = (i, j) => {
    const elem = array[i];
    array[i] = array[j];
    array[j] = elem;
  }

  const middle = Math.floor((last + first) / 2);
  // let main = array[middle];
  let main = array[first + Math.floor(Math.random() * (last - first))];
  // let main = array[first];
  let less = first;
  let more = last;

  while (less < more) {
    while (main < array[more]) {
      more--;
      comparisons++;
    }
    while (main > array[less]) {
      less++;
      comparisons++;
    }
    swap(more, less);
  }

  if (less + 1 < last) {
    comparisons += quickSort(array, less + 1, last);
  }
  if (less - 1 > first) {
    comparisons += quickSort(array, first, less - 1);
  }
  return comparisons;
}

console.log(quickSort(arr1));
console.log(arr1);
console.log(quickSort(arr2));
console.log(arr2);
console.log(quickSort(arr3));
console.log(arr3);
