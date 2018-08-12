// create a tree with minimal height
// basically, split sorted array in half
// create a tree starting with the middle value as root
// do this recursively...splitting down the middle each time
// use floor?


function minimalTree(arr) {
  createMin(arr, 0, arr.length-1);
}

function createMin(arr, start, end) {
  let mid = Math.floor((start + end)/2);
  let tree = new Tree(arr[mid]);
  tree.left = createMin(arr, start, mid - 1);
  tree.right = createMin(arr, mid + 1, end);

  return tree;
}
