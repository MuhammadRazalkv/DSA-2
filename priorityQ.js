//! Priority Q
//* a priority q is q which enqueue and dequeue with its priority rather than the order of insertion
class PQ {
  constructor () {
    this.items = []
  }

  enqueue (value, priority) {
    const qElement = { value, priority }
    let added = false
    for (let i = 0; i < this.items.length; i++) {
      if (qElement.priority > this.items[i].priority) {
        this.items.splice(i, 0, qElement)
        added = true
        break
      }
    }
    if (!added) {
      this.items.push(qElement)
    }
  }

  dequeue () {
    return this.items.shift()
  }
  print () {
    console.log(this.items)
  }
}

//! with Linked list

class Node {
  constructor (value, priority) {
    this.value = value
    this.priority = priority
    this.next = null
  }
}

class PQL {
   
    constructor(){
        this.head = null
        this.size = 0
    }

  enqueue (value, priority) {
    const node = new Node(value, priority)
    if ((this.head == null || this.head.priority < priority)) {
      node.next = this.head
      this.head = node
    }else{
        let curr = this.head
        while(curr.next && curr.next.priority >= priority){
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node 
    }
    this.size--
  }

  dequeue(){
    let removedValue = this.head.value
    this.head = this.head.next
    this.size--
    return removedValue
  }

  printQueue() {
    if (this.size ==0 ) {
        console.log('Q is empty');
        return
    }
    let current = this.head;
    while (current !== null) {
        console.log(`${current.value} - Priority: ${current.priority}`);
        current = current.next;
    }
}
}

const pq = new PQL()
pq.printQueue()
pq.enqueue(10,1)
pq.enqueue(20,2)
pq.enqueue(30,3)
pq.enqueue(70,9)
pq.printQueue()
console.log(pq.dequeue());
pq.printQueue()
