class Queue {
    constructor(){
        this.values = []
    }

    enqueue(value){
        this.values.push(value)
    }

    dequeue(){
        if (this.isEmpty()) {
            console.log('Array is empty');
            return
        }
        return this.values.shift() // ! This methods time complexity will be O(n) because it need to shift all the remaining element in the array 
    }

    isEmpty(){
        return this.values.length === 0
    }

    getSize(){
        if (this.isEmpty()) {
            console.log('Array is empty');
            return
        }
        return this.values.length
    }

    peek(){
        if (this.isEmpty()) {
            console.log('Array is empty');
            return
        }
        return this.values[0] 
    }

    print(){
        if (this.isEmpty()) {
            console.log('Array is empty');
            return
        }
        console.log(this.values.toString()); 
    }
}

//* Better version with less time complexity 
// ?Object

class Queue2 {
    constructor(){
        this.values = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(value){
        this.values[this.rear] = value
        this.rear++
    }

    dequeue(){
        const item = this.values[this.front]
        delete this.values[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front == 0
    }

    getSize(){
        return this.rear - this.front
    }

    peek(){
        return this.values[this.front]
    }

    print(){
        console.log(this.values);
        
    }
}

const q = new Queue2()

q.print()
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q.dequeue());

q.print()
