'use strict';

const distances = [[0, 7, 2, 5, 7],
                   [7, 0, 1, 9, 2],
                   [2, 1, 0, 1, 6],
                   [5, 9, 1, 0, 3],
                   [7, 2, 6, 3, 0]];

const findPath = dist => {
  let result = 0;
  let wasThere = [0];

  let start = dist[0];
  while (wasThere.length < dist.length) {
    let min = 100;
    let minIndex = 0;
    for (let j = 0; j < dist.length; j++) {
      if (min > start[j] && !wasThere.includes(j)) {
        min = start[j];
        minIndex = j;
      }
    }
    wasThere.push(minIndex);
    start = dist[minIndex];
    result += min;
  }
  return result;
}

console.log(findPath(distances));
