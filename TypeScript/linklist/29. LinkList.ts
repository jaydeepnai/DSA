class NodeItem {
    constructor(public data: number, public next: NodeItem | null) {}
}


class LinkList {
    private head : NodeItem | null;
    private size : number;
    
    constructor(node : NodeItem){
        this.head = node
        this.size = 1
    }

    addAtLast(node : NodeItem){
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

    addAtFirst(node : NodeItem){
        node.next = this.head; 
        this.head = node;
        this.size++
    }

    addAtIndex(node : NodeItem, index : number){
        let current = this.head
        let i = 1; 
        while(i < index && current!.next){
            current = current!.next;
            i++;
        }
        node.next = current!.next
        current!.next = node
    }

    removeFirst(){
        this.head = this.head!.next
    }

    removeLast(){
        let current = this.head 
        let i : number = 1;
        while(i < this.size){
            current = current!.next
            i++
        }
        console.log(current)
        current!.next = null
    }

    removeAtIndex(index : number){
        let current = this.head 
        let i : number = 2;
        while(i < index){
            current = current!.next
            i++
        }
        current!.next = current!.next!.next
    }

    print(){
        let current = this.head
        while(current!.next){
            console.log(current!.data)
            current = current!.next
        }
        console.log(current!.data)
    }

}


const linkL = new LinkList(new NodeItem(100,null)) 
linkL.addAtLast(new NodeItem(200,null))
linkL.addAtLast(new NodeItem(300,null))
linkL.addAtLast(new NodeItem(400,null))
linkL.addAtLast(new NodeItem(500,null))
linkL.addAtIndex(new NodeItem(500,null),3)
// linkL.print()
// console.log("removing 1st")
// linkL.removeFirst()
// linkL.print()
// console.log("removing last")
// linkL.removeLast()
linkL.removeAtIndex(3)
linkL.print()






