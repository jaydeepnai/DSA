class Queue {
  items : number[] = []

  constructor(){
    this.items = []
  }

  enqueue (elm : number | number[]){
    const types = typeof elm
    if(types === "number"){
      this.items.push(elm as number);
    }else if(types === "object"){
      this.items = this.items.concat(elm)
    }
  }

  dequeue (elm? : number){
    if(!elm) this.items.shift()
    else this.items.splice(0,elm)
  }

  isEmpty (){
    console.log(!Boolean(this.items.length))
  }

  clear(){
    this.items = []
  }

  peek(){
    console.log(this.items[0])
  }

  print(){
    console.log(this.items)
  }
}

const que = new Queue()
que.enqueue(1)
que.isEmpty()
que.enqueue(2)
que.enqueue(3)
que.enqueue([4,5,6,7,8])
que.dequeue(3)
que.peek()
que.clear()
que.print()