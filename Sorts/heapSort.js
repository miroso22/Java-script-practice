'use strict';

Array.prototype.swap = function(a, b) {
  const first = this[a];
  this[a] = this[b];
  this[b] = first;
};

const numbers = [ 4, 0, 2, 7, 8, 5, 9, 1, 3,
  6, 12, 17, 20, 11, 13, 14, 19, 18, 16];
const another = [10, 3, 12, 7, 2, 11, 9, ];

function heapSort(array) {
  console.log('\nSorting array...');
  console.dir(array);

  //----------------------------------------------------
  // The biggest enement must be [0], so we build
  // heap (tree) that helps us to compare elements
  //
  // Tree structure:
  // [0] -> [1], [2]
  // [1] -> [3], [4]
  // [2] -> [5], [6]
  // [3] -> [7], [8]
  // [n] -> [2n+1], [2n+2]

  // First time we build the tree from down to up
  function buildHeap(i, limit) {
    // Finding the deepest leaf
    if (2 * i + 1 < limit) buildHeap(2 * i + 1, limit);
    if (2 * i + 2 < limit) buildHeap(2 * i + 2, limit);

    // In structure [n] -> [2n+1], [2n+2]
    // we find the biggest value and set it to the top
    heapify(i, limit);
  }

  //---------------------------------------------------

  function heapify(i, limit) {
    // Elements of a leaf
    const top = array[i];

    // We shouldn't change the last
    let left;
    if (2 * i + 1 < limit) left = array[2 * i + 1];

    let right;
    if (2 * i + 2 < limit) right = array[2 * i + 2];

    // If left is null, then right is null sa well
    if (!left) return;

    // Firstly compare lover elements
    if (left > right || !right) {
      // Then compare the biggest of them with the upper
      if (top < left) {
        // The biggest element must be on the top
        array.swap(i, 2 * i + 1);
        // As the leaf changed, we rebuild
        // changed part of the tree
        heapify(2 * i + 1, limit);
      }
    } else {
      if (top < right) {
        array.swap(i, 2 * i + 2);
        heapify(2 * i + 2, limit);
      }
    }
  }

  //------------------------------------------------------

  buildHeap(0, array.length);
  console.log('Heap:');
  console.dir(array);
  // In each iteration the result array gets 1 element
  for (let i = array.length - 1; i > -1; i--) {
    console.log('Next...');

    array.swap(0, i);
    console.dir(array);
    heapify(0, i);
  }
  console.log('Sorted!');
  console.dir(array);
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

heapSort(numbers);
console.dir(numbers);
heapSort(another);
console.dir(another);
