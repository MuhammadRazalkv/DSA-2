class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedListStack {
  constructor () {
    this.head = null
    this.size = 0
  }

  isEmpty () {
    return this.size === 0
  }

  getSize () {
    return this.size
  }

  push (value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
    return
  }

  pop () {
    if (this.size < 1) {
      console.log('Under flow error  / Stack is empty')
      return
    }

    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
  }

  top () {
    if (this.size < 1) {
      console.log('Stack is empty')
      return
    }
    console.log(this.head.value);
    
    return 
  }

  print () {
    if (this.size == 0) {
      console.log('Stack is empty')
      return
    }

    let listValues = ''
    let curr = this.head
    while (curr) {
      listValues += `${curr.value} `
      curr = curr.next
    }
    console.log(listValues)
  }
}

const list = new LinkedListStack()
// list.print()
// list.pop()
// list.push(10)
// list.print()
// list.push(2)
// list.top()