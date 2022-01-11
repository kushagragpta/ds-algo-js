// Bubble Sort

/*
Time Complexity
Worst Case
O(n^2)
Average Case 
O(n^2)
Best Case
O(n)

Space Complexity
Worst Case 
O(1)
Average Case 
O(1)
Best Case
O(1)

*/

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length-i-1; j++) {
      if (arr[j] > arr[j+1])
      {
       [ arr[j] , arr[j+1]] =  [ arr[j+1] , arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 2, 3, 5, 4]));
