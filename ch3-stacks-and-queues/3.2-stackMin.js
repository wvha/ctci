/*
How would you design a stack which has a function 'min' that reeturns the minimum element?

Do this in constant time

have an array
*/

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.stackLength = this.minStackLength = 0;
  }

  // push(value) {
  //   this.stack[this.stack] = value;
  //   this.stackLength++;

  //   const min = this.minStack[this.minStackLength - 1];
  //   if (min === undefined || value <= min) {
  //     this.minStack[this.minStackLength = value];
  //   }


  push(value) {
    this.stack[this.stack.length] = value;

    if (this.minStack.length === 0) {
      this.minStack[0] = value;
    }
    if (this.minStack[0] <= value) {
      this.minStack[this.stack.length] = this.minStack[0];
    } else {
      this.minStack[this]
    }
  }

}