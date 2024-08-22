// // function bubbleSort(arr){
// //     let swapped 
// //     do {
// //         swapped = false
// //         for(let i = 0 ; i<arr.length ; i++){
// //             if (arr[i] > arr[i+1]) {
// //                 let temp = arr[i]
// //                 arr[i] = arr[i+1]
// //                 arr[i+1] = temp
// //                 swapped = true
// //             }
// //         }

// //     } while (swapped)
// // }

// // let arr = [6,2,5,3]
// // // bubbleSort(arr)


// // function insertion(arr){
// //     for(let i = 1 ; i < arr.length ; i++){
// //         let numberToInsert = arr[i]
// //         let j = i -1
// //         while(j >= 0 && arr[j] > numberToInsert){
// //             arr[j+1] = arr[j]
// //             j = j - 1
// //         }
// //         arr[j+1] = numberToInsert
// //     }
// // }
// // insertion(arr)
// // console.log(arr);


// // function selectionSort(arr){
// //     let n = arr.length
// //     for(let i = 0 ; i < n -1 ; i++){
// //         let minIndex = i 
// //         for (let j =  i+1; j < n ; j++) {
// //            if (arr[j] < arr[minIndex] ) {
// //             minIndex = j 
// //            }  
// //         }
// //         if (minIndex !== i ) {
// //             [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
// //         }
// //     }
// // }

// // function bubbleSort(arr){
// //     let swapped 
// //     do {
// //         swapped = false
// //         for(let i = 0 ;i < arr.length - 1; i++){
// //             if (arr[i] > arr[i+1] ) {
// //                 let temp = arr[i]
// //                 arr[i] = arr[i+1]
// //                 arr[i+1] = temp
// //                 swapped = true
// //             }
// //         }
// //     } while (swapped);
// // }

// // let arr = [1,3,5,2,8]
// // bubbleSort(arr)
// // console.log(arr);

// // function insertion(arr){
// //     for(let i = 1 ; i < arr.length ; i++){
// //         let numberToInsert = arr[i]
// //         let j = i -1
// //         while(j >= 0 && arr[j] > numberToInsert){
// //             arr[j+1] = arr[j]
// //             j = j-1
// //         }
// //         arr[j+1] = numberToInsert
// //     }
// // }

// // let arr = [4,5,3,1,2]
// // insertion(arr)
// // console.log(arr);

// // function selectionSort(arr){
// //     for(let i = 0 ; i < arr.length-1 ; i++){
// //         let minIndex = i 
// //         for(let j = i+1 ; j < arr.length ; j++){
// //             if (arr[j] < arr[minIndex]) {
// //                 minIndex = j 
// //             }
// //         }
// //        if (minIndex !== i) {
// //            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
// //         } 
// //     }
// // }
// // let arr = [6,3,5,2,4,1]
// // selectionSort(arr)
// // console.log(arr);

// // function quickSort(arr){
// //     if (arr.length < 2 ) {
// //         return arr
// //     }
// //     let pivot = arr[arr.length-1]
// //     let left = []
// //     let right = []
// //     for(let i = 0 ; i < arr.length-1 ; i++){
// //         if(arr[i] < pivot){
// //             left.push(arr[i])
// //         }else{
// //             right.push(arr[i])
// //         }
// //     }
// //     return [...quickSort(left) , pivot , ...quickSort(right)]

// // }
// // let arr = [6,3,5,2,4,1]

// // console.log(quickSort(arr));


// // function mergeSort(arr){
// //     if (arr.length < 2) {
// //         return arr
// //     }
// //     let mid = Math.floor(arr.length / 2)
// //     let left = arr.slice(0,mid)
// //     let right = arr.slice(mid)

// //     return merge(mergeSort(left),mergeSort(right))
// // }

// // function merge(left,right){
// //     let sortedArray = []
// //     while(left.length && right.length){
// //         if (left[0] <= right[0]) {
// //             sortedArray.push(left.shift())
// //         }else{
// //             sortedArray.push(right.shift())
// //         }
// //     }
// //     return [...sortedArray , ...left , ...right]
// // }

// // let arr = [6,3,5,2,41,0]
// // console.log(mergeSort(arr));


// // class Stack {
// //     constructor (size){
// //         this.items = []
// //         this.size = size
// //     }
// //     push(value){
// //         if (this.size == this.items.length) {
// //             console.log('Stack overflow ');
// //             return
// //         }
// //         this.items.push(value)
// //     }
// //     pop(){
// //         if (this.isEmpty()) {
// //             return 'Stack underflow'
// //         }
// //         return  this.items.pop()
// //     }
// //     peek(){
// //         return this.items[this.items.length - 1 ]
// //     }
// //     isEmpty(){
// //         return this.items.length === 0
// //     }
// //     getSize(){
// //         return this.items.length
// //     }
// //     print(){
// //         if (this.isEmpty()) {
// //             console.log('Stack is empty');
// //             return
// //         }
// //         console.log(this.items);
        
// //     }
// // }

// // //const s = new Stack(5)
// // // s.print()

// // // s.print()
// // // console.log(s.pop());
// // // s.print()



// // // function reverse(str){
// // //     for(let char of str){
// // //         s.push(char)
// // //     }
// // //     console.log(s.getSize());
    
// // //     let reverse  = ''
// // //     while(!s.isEmpty()){
// // //         reverse += s.pop()
// // //     }
// // //     return reverse == str
// // // }
// // // console.log(reverse('dadeee'));

// // const s = new Stack(5)
// // s.push(10)
// // s.push(20)
// // s.push(30)
// // s.push(40)
// // s.push(50)
// // function rm(){
// //     const stack = new Stack(5)
// //     let mid = Math.floor(s.getSize() / 2 )
// //     let i = 0 
// //     while(i < mid){
// //         stack.push(s.pop())
// //         i++
// //     } 
// //     s.pop()
// //     while(stack.getSize() > 0){
// //         s.push(stack.pop())
        
// //     }
// // }
// // rm()
// // s.print()

// // class Node{
// //     constructor(value){
// //         this.value = value
// //         this.next = null
// //     }
// // }
// // class stackList {
// //     constructor(){
// //         this.size = 0
// //         this.head = null
// //         this.tail = null
// //     }

// //     push(value){
// //         const node = new Node(value)
// //         if (this.size == 0) {
// //             this.head = node 
// //             this.tail = node
// //         }else{
// //             node.next = this.head
// //             this.head = node
// //         }
// //         this.size++
// //     }

// //     pop(){
// //        if (this.size < 1) {
// //         return 'Stack under flow'
// //        }
// //        let removeValue = this.head.value
// //        this.head = this.head.next
// //        this.size--
// //        return removeValue
// //     }

// //     print(){
// //         let lisV = ''
// //         let curr = this.head
// //         while(curr){
// //             lisV += `${curr.value} `
// //             curr = curr.next
// //         }
// //         console.log(lisV);
        
// //     }
// // }

// // const s = new stackList()
// // s.push(10)
// // s.push(20)
// // s.push(30)
// // s.print()
// // console.log(s.pop());
// // s.print()


// // class Queue {
// //     constructor(){
// //         this.items = []
        
// //     }

// //     enqueue(value){
// //         this.items.push(value)
// //     }

// //     dequeue(){
// //         return this.items.shift()
// //     }

// //     getSize(){
// //         return this.items.length
// //     }
    
// //     isEmpty(){
// //         return this.items.length == 0 
// //     }
// // }

// // class Q2 {
// //     constructor(){
// //         this.items = {}
// //         this.rear = 0
// //         this.front = 0
// //     }

// //     enqueue(value){
// //         this.items[this.rear] = value
// //         this.rear++
// //     }

// //     dequeue(){
// //         const item = this.items[this.front]
// //         delete this.items[this.front]
// //         this.front++
// //         return item
// //     }

// //     getSize(){
// //         return this.rear - this.front
// //     }
// // }

// // class Node {
// //     constructor(value){
// //         this.value = value
// //         this.next = null
// //     }
// // }
// // class Stack {
// //     constructor(){
// //         this.head = null 
        
// //         this.size = 0 
// //     }

// //     push(value){
   
// //         const node = new Node(value)
// //         node.next = this.head
// //         this.head = node
// //         this.size++
// //     }

// //     pop(){
// //         if (this.size === null ) {
// //             return 'Stack underflow'
// //         }
// //         let r = this.head.value
// //         this.head = this.head.next
// //         this.size--
// //         return r 
// //     }
   

// //     peek(){
// //         return this.head.value
// //     }
// //     isEmpty(){
// //         return this.size == 0 
// //     }
// //     getSize(){
// //         return this.size
// //     }
// //     print(){
// //         if (this.isEmpty()) {
// //             console.log('Stack is empty');
// //             return 
// //         }
// //         let curr = this.head
// //         let lv = ''
// //         while(curr){
// //             lv += curr.value +' '
// //             curr = curr.next
// //         }
// //         console.log(lv);
        
// //     }
// // }

// // const s = new Stack(3)

// // s.push(20)
// // s.push(30)
// // s.push(30)

// // function fm(){
// //     const ts = new Stack(s.getSize())
// //     const mid = Math.floor(s.getSize() / 2 )
// //     let i  = 0 
// //     while(i<mid){
// //        ts.push(s.pop())
// //        i++
// //     }
// //     s.pop()
// //     while(ts.getSize() > 0 ){
// //         s.push(ts.pop())
// //     }
// // }

// // fm()
// // s.print()

// // class Q {
// //     constructor() {
// //         this.items = []

// //     }

// //     enqueue(value){
// //         this.items.push(value)
// //     }
// //     dequeue(){
// //         return this.items.shift()
// //     }
// //     peek(){
// //         return this.items[0]
// //     }
// //     print(){
// //         console.log(this.items);
        
// //     }
// // }

// // class Q {
// //     constructor (){
// //         this.items = {}
// //         this.rear = 0 
// //         this.front = 0
// //     }

// //     enqueue(value){
// //         this.items[this.rear] = value
// //         this.rear++
// //     }

// //     dequeue(){
// //         let value = this.items[this.front]
// //         delete this.items[this.front]
// //         this.front++
// //         return value
// //     }

// //     peek(){
// //         return this.items[this.front]
// //     }

// //     getSize(){
// //         return this.rear - this.front
// //     }
// //     isEmpty(){
// //         return this.rear - this.front  == 0 
// //     }
// //     print(){
// //         console.log(this.items);
        
// //     }
// // }

// // const q = new Q()
// // q.enqueue(10)
// // q.enqueue(20)
// // q.enqueue(30)
// // q.print()
// // console.log(q.dequeue());
// // q.print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0 
//     }
//     isEmpty(){
//         return this.size == 0
//     }
//     enqueue(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     dequeue(){
//         if (this.isEmpty()) {
//             return null
//         }

//         const value = this.head.value
//         this.head = this.head.next
//         this.size--
//         return value
//     }

//     getSize(){
//         return this.size
//     }
//     peek(){
//         return this.head.value
//     }

//     print(){
//         if (this.isEmpty()) {
//             console.log('Q is empty');
//             return
//         }

//         let curr = this.head
//         let lv = ''
//         while(curr){
//             lv += curr.value +' '
//             curr = curr.next
//         }
//         console.log(lv);
        
//     }
// }
// const ql = new Queue()
// ql.enqueue(10)
// ql.enqueue(20)
// ql.print()

class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size  = size
    }

    hash(key){
        let index = 0 
        for(let i = 0 ; i < key.length ; i++){
            index += key.charCodeAt(i)
        }
        return index % this.size
    }

    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key,value]]
        } else {
            let sameKey = bucket.find(pair => pair[0] == key)
            if (sameKey) {
                sameKey[1] = value
            }else{
                this.table.push([key,value])
            }
            
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKey = this.table.find(pair => pair[0] == key)
            if (sameKey) {
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find(pair => pair[0] == key)
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }

    display(){
        console.log(this.table);
        
    }
}
const table = new HashTable(10)
table.set('name','Rasal')
table.set('age',18)
table.set('id',21)
table.display()
// table.remove('name')
table.set('name','junaid')
table.set('name','abi')
table.display()