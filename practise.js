// class stack {
//     constructor(size){
//         this.items = []
//         this.size = size

//     }

//     getSize(){
//         return this.items.length
//     }

//     isFull(){
//         return this.getSize() == this.size
//     }

//     isEmpty(){
//         return this.currentLength == 0
//     }

//     push(value){
//         if (this.isFull()) {
//             console.log('Stack overflow');
//             return
//         }
//         this.items.push(value)
//     }

//     pop(){
//         if (this.isEmpty()) {
//             console.log('Under flow');
//             return
//         }
//         return this.items.pop()
//     }

//     peek(){
//         return this.items[this.items.length-1]
//     }

//     print(){
//         if (this.items.length == 0) {
//             console.log('Stack is empty');
//             return
//         }
//         console.log(this.items);

//     }

// }

// const s = new stack(3)
// s.print()
// s.push(1)
// s.push(2)
// s.push(3)
// s.print()
// s.push(5)

// class Node {
//   constructor (value) {
//     this.value = value
//     this.next = null
//   }
// }

// class StackList {
//   constructor () {
//     this.head = null
//     this.size = 0
//   }

//   isEmpty () {
//     return this.size == 0
//   }

//   getSize () {
//     return this.size
//   }

//   push (value) {
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }

//   pop () {
//     if (this.size < 1 ) {
//         console.log('Stack is empty ');
//         return
//     }
//     let removedValue = this.head.value
//     this.head = this.head.next
//     this.size--
//     return removedValue
//   }

//   peek(){
//     if (this.size < 1) {
//         console.log('Stack under flow');
//         return
//     }
//     return this.head.value
//   }

//   print(){
//     if (this.isEmpty()) {
//         console.log('Stack is empty');
//         return
//     }
//     let curr = this.head
//     let listValues = ''
//     while(curr){
//         listValues += `${curr.value} `
//         curr = curr.next
//     }
//     console.log(listValues);

//   }
// }

// const stack = new StackList()

// function reverse(str){
//   for(let char of str){
//     stack.push(char)
//   }
//   let reversed = ''

//   while(!stack.isEmpty()){
//     reversed += stack.pop()
//   }
//   return reversed
// }

// console.log(reverse('Hello'));

// class Queue {
//   constructor(){
//     this.items = []
//   }

//   enqueue(value){
//     this.items.push(value)
//   }

//   dequeue(){
//     return this.items.shift()
//   }

//   peek(){
//     return this.items[0]
//   }

//   getSize(){
//     return this.items.length
//   }
//   print(){
//     if (this.getSize() < 1) {
//       console.log('Q is empty');
//       return
//     }
//     console.log(this.items.toString());

//   }
// }

// const q = new Queue()
// q.print()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.print()

// class QueueObj {
//   constructor(){
//     this.items = {}
//     this.rear = 0
//     this.front = 0
//   }

//   enqueue(value){
//     this.items[this.rear] = value
//     this.rear++
//   }

//   dequeue(){
//     const item = this.items[this.front]
//     delete this.items[this.front]
//     this.front++
//     return item
//   }

//   peek(){
//     return this.items[this.front]
//   }

//   isEmpty(){
//     return this.rear - this.front == 0
//   }

//   getSize(){
//     return this.rear - this.front
//   }

//   print(){
//     if (this.isEmpty()) {
//       console.log('Queue is empty');
//       return
//     }
//     console.log(this.items);

//   }
// }

// const q = new QueueObj()
// q.print()
// q.enqueue(10)
// q.enqueue(20)
// q.print()
// q.dequeue()
// q.print()

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class QueueList {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue (value) {
    const node = new Node(value)
    if (this.size == 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  dequeue () {
    if (this.isEmpty()) {
        console.log('Q is empty, nothing to remove');
        return null; 
    }

    const dequeuedValue = this.head.value; 
    this.head = this.head.next;

    if (this.head === null) {
        this.tail = null;
    }

    this.size--;

    return dequeuedValue; 
}


  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size == 0
  }
}
