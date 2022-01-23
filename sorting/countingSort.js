// Counting Sort

/*
Time Complexity
Worst Case
O(n+k)
Average Case 
O(n+k)
Best Case
O(n+k)

Space Complexity
O(1)

*/

function countingSort(arr) {
  const count = {};
  let normalizationFactor;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (arr[i + 1] < arr[i]) 
      normalizationFactor = arr[i + 1];
      else normalizationFactor = arr[i];
    } 
    console.log("Normaliation factor", normalizationFactor);
  }

  if (normalizationFactor != NaN) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += -normalizationFactor;
    }
    console.log(arr);
  }
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < min) {
      min = arr[i + 1];
    }
    console.log("Min", min);
  }
  console.log(min);

  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) max = arr[i + 1];
  }
  console.log(max);

  // First populate the count object
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  /* Now, count is indexed by numbers, with values corresponding to occurrences, eg:
   * {
   *   3: 1,
   *   4: 0,
   *   5: 2,
   *   6: 1,
   *   7: 0,
   *   8: 0,
   *   9: 1
   * }
   */

  // Then, iterate over count's properties from min to max:
  const sortedArr = [];
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
    }
  }
  for (let i = 0; i < sortedArr.length; i++) {
    sortedArr[i] -= -normalizationFactor;
  }
  return sortedArr;
}

console.log(countingSort([1, -2, 3, -5, 6]));

