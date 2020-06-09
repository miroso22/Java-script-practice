'use strict';
const array = [];
Array.prototype.swap = function(a, b) {
  const first = this[a];
  this[a] = this[b];
  this[b] = first;
};

const heapSort = array => {
  const buildHeap = (i, limit) => {
    if (2 * i + 1 < limit) buildHeap(2 * i + 1, limit);
    if (2 * i + 2 < limit) buildHeap(2 * i + 2, limit);
    heapify(i, limit);
  }
  const heapify = (i, limit) => {
    const top = array[i];
    let left;
    if (2 * i + 1 < limit) left = array[2 * i + 1];
    let right;
    if (2 * i + 2 < limit) right = array[2 * i + 2];
    if (!left) return;
    if (left > right || !right) {
      if (top < left) {
        array.swap(i, 2 * i + 1);
        heapify(2 * i + 1, limit);
      }
    } else {
      if (top < right) {
        array.swap(i, 2 * i + 2);
        heapify(2 * i + 2, limit);
      }
    }
  }
  buildHeap(0, array.length);
  for (let i = array.length - 1; i > -1; i--) {
    array.swap(0, i);
    heapify(0, i);
  }
}

for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100));
  heapSort(array);
  console.log(array);
  console.log(i % 2 == 0 ?
              array[Math.ceil(i / 2)] :
              array[(i - 1) / 2] + " " + array[(i - 1) / 2 + 1]);
}
