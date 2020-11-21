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
    
}



module.exports = new singleLinkList();

