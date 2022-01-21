// Merge Sort

/*
Time Complexity
Worst Case
O(nlogn)
Average Case 
O(nlogn)
Best Case
O(n^2)

Space Complexity
O(n)

*/

function merge(arr, l, m, r)
{
    let n1 = m - l + 1;
    let n2 = r - m;
  
    // Create temp arrays
    let L = new Array(n1); 
    let R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    //  c2.n
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    let i = 0;
  
    // Initial index of second subarray
    let j = 0;
  
    // Initial index of merged subarray
    let k = l;
  //c3.n
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
  
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
    if(l>=r){
        return;//returns recursively
    }
    let m =l+ parseInt((r-l)/2); 
  // c1 // 2^32

//  T(n/2) 
    mergeSort(arr,l,m);
//  T(n/2) 
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
    console.log(arr);
}


  mergeSort([1, 2, 3, 5, 4,6],0,5);
  //   T(n) = c1+T(n/2)+T(n/2)+c2.n+c3.n
  // T(n)= 2T(n/2)+n(c'')
  //     = 2[2T(n/4) + n/2(c''))] +n(c'')
    //     = 4T(n/4) + n.2(c''))
//       = 4[2T(n/4)+ n/8.c'')] + n.2(c''))


