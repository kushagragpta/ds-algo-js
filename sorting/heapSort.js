// Inplace
// Unstable
// Time complexity O(nlogn)

class minHeap {
  constructor() {
    this.array = [];
  }

  // insert
  insert(val) {
    this.array.push(val);
    this.bubbleUp(this.array.length - 1);
  }

  getParent(childIndex) {
    return Math.floor((childIndex + 1) / 2) - 1;
  }

  getVal(index) {
    return this.array[index];
  }

  swap(i, j) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[i] = temp;
  }

  bubbleUp(childIndex) {
    if (childIndex === 0) return;
    const parentIndex = this.getParent(childIndex);
    const parentVal = this.getVal(parentIndex);
    const childVal = this.getVal(childIndex);

    if (childVal < parentVal) {
      this.swap(childIndex, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  // peek
  peek() {
    if (this.array.length) return this.array[this.array.length - 1];
  }

  // removeMin
  removeMin() {
    if (this.array.length) {
      const out = this.array.shift();
      this.array.unshift(this.array.pop());
      this.bubbleDown(0);

      return out;
    }
  }

  getLeftChild(parentIndex) {
    return (parentIndex + 1) * 2 - 1;
  }

  getRightChild(parentIndex) {
    return this.getLeftChild(parentIndex) + 1;
  }

  bubbleDown(parentIndex) {
    const parentVal = this.getVal(parentIndex);

    const leftIndex = this.getLeftChild(parentIndex);

    if(leftIndex > 0 && leftIndex < this.array.length)
    { 
    const leftVal = this.getVal(leftIndex); 
    if(leftVal< parentVal){
        this.swap(leftVal, parentVal);
        this.bubbleDown(leftIndex);
        parentVal = leftVal;
    }
    }
    const rightIndex = this.getRightChild(parentIndex);

    if(rightIndex > 0 && leftIndex < this.array.length) {
        const rightVal = this.getVal(rightIndex);
        if(rightVal< parentVal){
            this.swap(rightVal, parentVal);
            this.bubbleDown(rightIndex);
            parentVal = rightVal;
        }
    }
  }
}
