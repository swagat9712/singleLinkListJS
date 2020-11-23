let utility = require("./singleLinkListUtil.js");
let readlineSync = require('readline-sync');
console.log("welcome to single link list!");
userChoice = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        let choice = readlineSync.question("\nEner your choice:\n1.Inser node first\n2.Insert node last\n3.Insert at Index\n4.Remove froom Index\n5.print LinkList\n6.DeleLinkList\n7.exit\n");
        switch (choice.trim()) {
            case '1':
                let newValue = readlineSync.question("Enter node value:");
                utility.insertNode(newValue);
                break;
            case '2':
                let newValueLast = readlineSync.question("Enter node last value:");
                utility.inserNodeLast(newValueLast);
                break;
            case '3':
                let newValueForIndex = readlineSync.question("Enter node value:");
                let newindexValue = readlineSync.question("Enter Index:");
                utility.insertNodeIndex(newValueForIndex, newindexValue);
                break;
            case '4':
                let removeIndexValue = readlineSync.question("Enter Index:");
                utility.removeAt(removeIndexValue);
                break;    
            case '5':
                utility.printLinkList();
                break; 
            case '6':
                utility.deleteLinkList();
                break;       
            case '7': isTerminated = false;
                break;
            default: console.log("Invalid input");
        }
    }
}
userChoice();
