class Stack {
    constructor(){
        this.values = []
    }

    push(value){
        this.values.push(value)
    }

    pop(){
     
        return  this.values.pop()
    }

    peek(){
        if (this.values.length < 1) {
          
            return 'Stack under flow / Empty stack'
        }
        return this.values[this.values.length-1]
    }

    isEmpty(){
        return this.values.length == 0 
    }

    getSize(){
        return this.values.length
    }
}

// const stack = new Stack()

// console.log(stack.peek())

// stack.push(1)
// stack.push(2)
// stack.pop()
// console.log(stack.peek());

//* To reverse a string 
function reverse(str) {
    const stack = new Stack()
    let reversed = ''
    
    for(let char of str) {
       
        
        stack.push(char)
    }

    while(!stack.isEmpty()) {
        reversed += stack.pop()
    }

    return reversed
}

console.log(reverse("yadu"))