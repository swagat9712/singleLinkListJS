class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class singleLinkList {
    constructor() {
        this.head = null;
        this.count = 0;
    }
    insertNode = (data) => {
        this.head = new Node(data, this.head);
        this.count++;
    }
    //to insert last node
    inserNodeLast = (data) => {
        let node = new Node(data);
        let present = 0;
        if (this.head == null) {
            this.head = node;
        }
        else {
            present = this.head;
            while (present.next != null) {
                present = present.next;
            }
            present.next = node;
        }
        this.count++;
    }
    insertNodeIndex = (data, index) => {
        if (index < 0 && index > this.count) {
            console.log("Index Out Of Range");
            return;
        }
        if (index == 0) {
            this.insertNode(data);
            return;
        }
        const node = new Node(data);
        let present, previous;
        //if index is first node
        present = this.head;
        let count = 0;

        while (count < index) {
            previous = present;
            count++;
            present = present.next;
        }

        node.next = present;
        previous.next = node;

        this.count++;
    }

}



module.exports = new singleLinkList();

