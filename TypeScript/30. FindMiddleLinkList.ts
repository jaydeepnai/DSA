class NodeI {
    constructor(public data: number, public next: NodeI | null) {}
}


class LinkLst {
    private head : NodeI | null;
    private size : number = 0;
    
    constructor(node : NodeI){
        this.head = node
        this.size = 1
    }

    addAtLast(node : NodeI){
        if(this.size == 1){
             this.head!.next = node;
        }else{
            let current = this.head;

            while(current!.next){
                    current = current!.next
            } 
            current!.next = node
        }
        this.size++
    }

    findMiddle(){
        
        const middle : number = Math.ceil(this.size/2)
        let index :number = 1;

        console.log(middle, "middle")
        let current = this.head
        while(index < middle){
            current = current!.next
            index++
        }

        console.log(current!.data, "middle")
    }

    print(){
        let current = this.head
        while(current!.next){
            console.log(current!.data)
            current = current!.next
        }
        console.log(current!.data)
        console.log(this.size)
    }

}


const linkList = new LinkLst(new NodeI(100,null)) 
linkList.addAtLast(new NodeI(200,null))
linkList.addAtLast(new NodeI(300,null))
linkList.addAtLast(new NodeI(400,null))
linkList.addAtLast(new NodeI(500,null))
linkList.addAtLast(new NodeI(600,null))
linkList.print()
linkList.findMiddle()







