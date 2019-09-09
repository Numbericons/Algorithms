// StackQueue
// Implement a queue using stacks.That is, write enqueue and dequeue using only push and pop operations.

// In terms of performance, enqueue should be O(1), but dequeue may be worst -case O(n).In terms of ammortized time, dequeue should be O(1).Prove that your solution accomplishes this.

class stackQueue{
  constructor(){
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(el){
    this.inStack.push(el);
  }

  dequeue(){
    if (this.outStack.length === 0) { //5
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    if (this.outStack.length > 0) this.outStack.pop();
  }
}

function getMinMax(arr) {
  let max;
  for (let i = 0; i < arr.length - 1; i++) {
    let distance = Math.abs(arr[i] - arr[arr.length - 1])
    if (!max) {
      max = distance;
    } else {
      if (max < distance) {
        max = distance
      }
    }
  }
  return max;
}

function windowed_max_range(arr, w){    //[1, 0, 2, 5, 4, 8], 2
  let minMax;
  for (let i = 0; i < arr.length; i++) {
    let result = getMinMax(arr.slice([i], i + w));
    if (!minMax) {
      minMax = result;
    } else {
      if (minMax < result) {
        minMax = result
      }
    }
  }

  return minMax;
}