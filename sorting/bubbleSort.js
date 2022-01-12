// Bubble Sort

/*
Time Complexity
Worst Case
O(n^2)
Average Case 
O(n^2)
Best Case
O(n) 
for best case return arr after first pass

Space Complexity
O(1)

*/

function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i <= arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j <= arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    // console.log(arr);
    if (!swapped) {
      console.log(i);
      return arr;
    }
  }
  return arr;
}
console.log(bubbleSort([1, 2, 3, 5, 4]));
