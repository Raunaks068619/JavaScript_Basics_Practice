var Node = function (data) {
  this.data = data;
  this.next = null;
};

var LinkedList = function () {
  this.head = null;
  this.size = 0;
};

LinkedList.prototype.addInEnd = function (data) {
  // creates a new node
  var node = new Node(data);

  // to store the current node
  var current;

  // if the list is empty add the element and make it the head
  if (this.head === null) {
    this.head = node;
  } else {
    // set current node as head
    current = this.head;

    // while curent node -> do go to last node
    while (current.next) {
      // set current to current .next
      current = current.next;
    }
    // set next of last node to the new node
    current.next = node;
  }
  this.size++;
};

LinkedList.prototype.removeFromEnd = function () {
  var current;
  if (this.head == null) {
    console.log("NOTHING TO REMOVE");
  } else {
    current = this.head;
    // next->next
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }
  this.size--;
};

LinkedList.prototype.printList = function () {
  var current = this.head;
  var list = [];
  while (current) {
    list.push(current.data);
    current = current.next;
  }
  console.log("list - " + list.toString());
};

const test = new LinkedList();

test.addInEnd(2);
test.addInEnd(3);
test.addInEnd(7);
test.addInEnd(5);
test.addInEnd(9);
test.removeFromEnd();
test.printList();
