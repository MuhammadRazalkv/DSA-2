//! Bubble sort 
//* Time complexity of bubble sort is O(n^2) and it is not used it programming  

// function bubbleSort(arr){
//     let swapped
//     do {
//         swapped = false
//         for(let i = 0 ; i < arr.length - 1 ; i ++){
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1 ]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
   
// }

// let arr = [4,3,9,2,1]
// bubbleSort(arr)
// console.log(arr);


//! Insertion sort 
//* Time complexity of insertion sort is O(n^2) and it is not a good approach

// function InsertionSort(arr){
//     for(let i = 1 ; i < arr.length ; i++){
//         let numberToInsert = arr[i]
//         let j = i - 1 
//         while(j >= 0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = numberToInsert
//     }
// }

// let arr = [5,7,3,2]
// InsertionSort(arr)
// console.log(arr);


//! Quick sort 
//*  Time complexity of quick sort is in the worst case is O(n^2) 
//*    and in the avg case it is O(n log n)

// function quickSort(arr){
//     if (arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i = 0 ; i < arr.length - 1 ; i++){
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left) , pivot , ...quickSort(right)]
// }

// let arr = [8,53,3,2]
// console.log(quickSort(arr));


//! Selection sort
//* Time complexity is O(n2) because it have nested loops 

// function selectionSort(arr) {
//     const n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         // Assume the minimum value is the first element in the unsorted part
//         let minIndex = i;

//         // Iterate over the unsorted part of the array
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j; // Update the index of the minimum value
//             }
//         }

//         // Swap the found minimum element with the first element of the unsorted part
//         if (minIndex !== i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
//         }
//     }

//     return arr;
// }

// // Example usage
// let arr = [64, 25, 12, 22, 11];
// console.log("Sorted array:", selectionSort(arr));



//! Merge sort 
//* Time complexity is O(n log n)

// function mergeSort(arr){

//     if (arr.length < 2) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
  
    
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
   
    
//     let sortedArray = []
//     while(left.length && right.length){
//         if (left[0] <= right[0]) {
//             sortedArray.push(left.shift()) 
//         }else{
//             sortedArray.push(right.shift())
//         }
//     }
  
    
//     return [...sortedArray, ...left, ...right]
// }

// let arr = [8,6,7,2]
// console.log(mergeSort(arr));



