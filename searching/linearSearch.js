// Sequential or Linear Search

/*
Time Complexity
Worst Case
O(n)
Average Case 
O(n)
Best Case
O(1)

Space Complexity
O(1)

*/

function linearSearch(arr,searchValue){

    for (let i=0;i<=arr.length;i++)
    {
        if (arr[i]==searchValue)
        return i;
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5], 5));