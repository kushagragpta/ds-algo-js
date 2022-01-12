// Selection Sort

/*
Time Complexity
Worst Case
O(n^2)
Average Case 
O(n^2)
Best Case
O(n^2)

Space Complexity
O(1)

*/

function selectionSort(arr) {
    let min;
    for (let i = 0; i <= arr.length - 1; i++) {
        min=i;
      for (let j = i + 1; j <= arr.length - 1; j++) {
        if (arr[j] < arr[min]) {
          min=j;
        }
      }

      if (min !==i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
  
    }
    return arr;
  }
  console.log(selectionSort([1, 2, 3, 5, 4]));
  