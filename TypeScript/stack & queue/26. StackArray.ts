class stack {
    private st : number[] = []

    constructor(n : number[]){
        this.st = n
    }
    
    push(n : number){
        this.st[this.st.length] = n 
    }
    
    pop(){
        this.st = this.st.slice(0,-1)
    }
    
    peek(){
        console.log(this.st[this.st.length -1])
    }

    print(){
        console.log(this.st)
    }
}

const s = new stack([1,2,3,4,5,6,7,8,9])
s.print()
s.push(10)
s.print()
s.pop()
s.print()
s.peek()

// [LOG]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// [LOG]: [1, 2, 3, 4, 5, 6, 7, 8, 9] 
// [LOG]: 9 