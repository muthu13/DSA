function subarraySum(arr, n, s) {
  //your code here
  let new_sum = 0;
  let sub_array = [];
  for (let i = 0; i < n; i++) {
    new_sum = arr[i];
    // if (new_sum == s) {
    //   break;
    // }
    for (let j = i + 1; j < n; j++) {
      if (new_sum == s) {
        sub_array.push(i);
        sub_array.push(j);
        // console.log(sub_array);
        // return sub_array;
      }
      if (new_sum > s) {
        break;
      }
      if (j < n) {
        new_sum = new_sum + arr[j];
      }
    }
  }
  return sub_array;
}

console.log(subarraySum([1, 2, 3, 9, 10, 11], 6, 6));
