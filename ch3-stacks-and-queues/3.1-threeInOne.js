/*
Describe how you could use a single array to implement three stacks

divide array into three sections
  and have pointers

have stacks calculated by going to every third value
*/

class FixedStack {
  constructor() {
    this.array = [];
    this.lengths = [0, 0, 0];
  }

  getLength(stack) {
    return this.lengths[stack-1];
  }

  push(stack, value) {
    let index = this.getLength(stack) * 3 + stack - 1;
    this.array[index] = value;
    ++this.lengths[stack-1];
  }

  pop(stack) {
    let length = this.getLength(stack),
    let value;
    if (length > 0) {
      let index = (length -1) * 3 + stack - 1;
      value = this.array[index];
      this.array[index] = undefined;
      --this.lengths(stack-1);
    }
    return value;
  }

  peek(stack) {
    let length = this.getLength(stack);
    let value;
    if (length > 0) {
      let index = (length - 1) * 3 + stack - 1;
      value = this.array[index];
    }
    return value;
  }

  isEmpty(stack) {
    return this.getLength(stack) === 0;
  }

}