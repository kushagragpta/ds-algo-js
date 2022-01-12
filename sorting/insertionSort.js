// Insertion Sort

/*
Time Complexity
Worst Case
O(n^2)
Average Case 
O(n^2)
Best Case
O(n)

Space Complexity
O(1)

*/

function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(insertionSort([2, 3, 1, 5, 4]));
