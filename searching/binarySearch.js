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
Worst Case 
O(1)
Average Case 
O(1)
Best Case
O(1)

*/

function binarySearch(arr, searchValue, start, end) {
  if (start > end) return false;
  let middle = Math.floor((start+end)/ 2);

    if (arr[middle] == searchValue) return true;
    else if (arr[middle] < searchValue) return binarySearch(arr, searchValue, middle+1, end);
    else if (arr[middle] > searchValue) return binarySearch(arr, searchValue, start, middle-1);

}

console.log(binarySearch([1, 2, 3, 4, 5], 4,0,4));
