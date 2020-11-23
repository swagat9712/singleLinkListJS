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

        while (count < index  && present.next != null) {
            //for previous node
            previous = present;
            count++;
            //for next node
            present = present.next;
        }
        // if index is last node
        if(present.next == null){
            present.next = node;
            return;
        }

        node.next = present;
        previous.next = node;

        this.count++;
    }
    // Remove from index value
    removeAt = (index) => {
        if (index > 0 && index > this.size) {
            console.log("Out of range value!");
            return;
        }

        let present = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = present.next;
        } else {
            while (count < index) {
                count++;
                previous = present;
                present = present.next;
            }

            previous.next = present.next;
        }

        this.count--;
    }
    // Clear list
    deleteLinkList() {
        this.head = null;
        this.count = 0;
    }


    printLinkList = () => {
        if (this.head == null) {
            console.log("list empty");
            return;
        }
        let present = this.head;
        let position = this.count;

        for (; present != null; present = present.next) {
            console.log(`Node Value = ${present.data} position = ${position}`)
            position--;
        }
    }


}



module.exports = new singleLinkList();
