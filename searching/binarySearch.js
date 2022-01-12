// Binary Search
// Only for Sorted Array

/*
Time Complexity
Worst Case
O(log n)
Average Case 
O(log n)
Best Case
O(1)

Space Complexity
O(1) in case of non recursive
O(log n) in case of recursive


*/

function binarySearch(arr, searchValue, start, end) {
  if (start > end) return -1;
  let middle = Math.floor((start+end)/ 2);

    if (arr[middle] == searchValue) return middle;
    else if (arr[middle] < searchValue) return binarySearch(arr, searchValue, middle+1, end);
    else if (arr[middle] > searchValue) return binarySearch(arr, searchValue, start, middle-1);

}
let arr= [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 4,0,arr.length-1));
