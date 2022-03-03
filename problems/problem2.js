// Find number in sorted array using BST

function bst(arr, toFind) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);

  while (arr[middle] != toFind && start <= end) {
    if (toFind > arr[middle]) {
      start = middle + 1;
      middle = Math.round((start + end) / 2);
    } else {
      end = middle - 1;
      middle = Math.round((start + end) / 2);
    }
  }
  return arr[middle] != toFind ? -1 : arr[middle];
}

console.log(bst([-5, -3, 0, 1, 2, 3, 4, 5, 6, 34, 46, 78], 0));
