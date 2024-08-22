class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0 
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return  total % this.size
    }

    set(key , value) {
        const index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }
        this.table[index].push([key,value])
    }

    get(key){
        const index = this.hash(key)
        if (this.table[index]) {
            const pair = this.table[index].find(pair => pair[0] == key)
            if (pair) {
                return pair[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        if (this.table[index]) {   
            this.table[index] = this.table[index].filter(pair => pair[0] !== key)
        }
    }

    display(){
        // for (let i = 0; i < this.table.length; i++) {
        //  if (this.table[i]) {
        //     console.log(i,'  ',this.table[i]);
        //  }
            
        // }
        console.log(this.table);
        
    }

}

const table = new HashTable(5)

table.set('Name','Rasal')
table.set('Age','18')
table.set('p','dev')
// console.log(table.get('Name'));
table.set('Age','20')
table.display()
