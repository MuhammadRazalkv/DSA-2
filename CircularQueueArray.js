//! Not working need to change 
// class CircularQueue {
//     constructor(capacity){
//         this.items = Array(capacity)
//         this.capacity = capacity
//         this.length = 0
//         this.rear = -1 
//         this.front = -1
//     }

//     isFull(){
//         return this.capacity == this.length
//     }

//     getSize(){
//         return this.length
//     }

//     isEmpty(){
//         return this.length == 0
//     }

//     enqueue(value){
//         if(this.isFull()){
//             console.log('Queue is full');
//             return
//         }
//         this.rear =( this.rear + 1 ) % this.capacity
//         this.items[this.rear] = value
//         this.length += 1
//         if (this.front == -1) {
//             this.front = this.rear
//         }
//     }

//     dequeue(){
//         if (this.isEmpty()) {
//           return 'Nothing to remove'
//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1 ) % this.capacity
//         this.length --
//         if (this.length == 0) {
//             this.rear = -1
//             this.front = -1
//         }
//         return item
//     }

//     peek(){
//         return this.items[this.front]
//     }

//     print() {
//         if (this.isEmpty()) {
//           console.log("Queue is empty");
//         } else {
//           let i;
//           let str = "";
//           for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//             str += this.items[i] + " ";
//           }
//           str += this.items[i];
//           console.log(str);
//         }
//       }
    
// }

// const q = new CircularQueue()
