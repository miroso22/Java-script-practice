'use strict';
const Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
Node.prototype.addLeft = function(node) {
  this.left = node;
}
Node.prototype.addRight = function(node) {
  this.right = node;
}
const root = new Node(30);
root.addLeft(new Node(19));
root.addRight(new Node(9));
root.left.addLeft(new Node(15));
root.left.addRight(new Node(1));
root.left.left.addLeft(new Node(55));
root.left.left.addRight(new Node(24));
root.left.left.left.addRight(new Node(18));
root.right.addRight(new Node(3));
root.right.right.addLeft(new Node(78));
root.right.right.addRight(new Node(46));
root.right.right.left.addLeft(new Node(14));

let array = [];
const getElems = root => {
  if (!root) return;
  array.push(root.value);
  getElems(root.left);
  getElems(root.right);
}
getElems(root);
console.log('Elements of starting tree:');
console.log(array);
array.sort((a, b) => a - b)
console.log('Sorted elements:');
console.log(array);

let i = 0;
const setElem = cur => {
  if (cur.left) setElem(cur.left);
  cur.value = array[i++];
  if (cur.right) setElem(cur.right);
}
setElem(root);
array = [];
getElems(root);
console.log('Elements of Binary search tree:');
console.log(array);

const findPathsWithLength = len => {
  const paths = [];
  const findPath = (cur, res) => {
    res.push(cur.value);
    if (res.reduce((a, b) => a + b) == len) paths.push(res);
    if (cur.left) findPath(cur.left, res.slice());
    if (cur.right) findPath(cur.right, res.slice());
  }
  const callPath = root => {
    if (!root) return;
    findPath(root, []);
    callPath(root.left);
    callPath(root.right);
  }
  callPath(root);
  return paths;
}
console.log('Paths with length 43:')
console.log(findPathsWithLength(43));
