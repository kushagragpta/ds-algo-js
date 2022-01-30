// linkedList implementation

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //   If list empty ,make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        //   console.log(current.data);
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Insert at index

  insertAt(data, index) {
    //   if index is out of range
    if (index > 0 && index > this.size) {
        return;
    }
    // if first index
    if(index === 0){
        this.head = new Node(data, this.head);
        this.size++;
        return; 
    }
   
    const node = new Node(data);
    let current,previous;
// Set current to head 
      current = this.head;
      let count = 0;
      while (count < index) {
        previous = current; // Node before index
        count++;
        current= current.next;
      }
      node.next = current;
      previous.next = node; 
    this.size++;
  }

  // Get at index

  getAt(index) {
 
      let current = this.head;
      let count = 0;
      while (current) {
          if(count == index){
              console.log(current.data)
          }
        count++;
        current= current.next;
      }
      return null;
      }


  // Remove at index
 removeAt(index) {
    //   if index is out of range
    if (index > 0 && index > this.size) {
        return;
    }
   
    let current,previous;
// Set current to head 
      current = this.head;
      let count = 0;

 // if first index
 if(index === 0){
    this.head = current.next;
    // return; 
}
else{
      while (count < index) {
        count++;
        previous = current; // Node before index
        current= current.next;
      }
      previous.next = current.next; 
}
this.size--;
  }


  // Clear list
clearList(){
    this.head = null;
    this.size = 0;
}

  // Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(400);

console.log(ll);
ll.printListData();
