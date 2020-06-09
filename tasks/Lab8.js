'use strict';
class Obj {
  constructor(weight, price) {
    this.weight = weight;
    this.price = price;
  }
}
let array = [];
for (let i = 0; i < 10; i++) {
  const pr = Math.floor(Math.random() * 10 + 1);
  const wg = Math.floor(Math.random() * 7 + 1);
  array.push(new Obj(wg, pr));
}

const findBestCost = array => {
  const findBest = (num, maxSize) => {
    if (num < 0 || maxSize - array[num].weight <= 0) return 0;
    return Math.max(findBest(num - 1, maxSize - array[num].weight) + array[num].price,
                    findBest(num - 1, maxSize));
  }

  return findBest(array.length - 1, 20);
}

console.dir(array);
console.log(findBestCost(array));
