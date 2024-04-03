/**
   _____  _                _    
  / ____|| |              | |   
 | (___  | |_  __ _   ___ | | __
  \___ \ | __|/ _` | / __|| |/ /
  ____) || |_| (_| || (__ |   < 
 |_____/  \__|\__,_| \___||_|\_\
 * @challenge 8
 * @description 
 * In this challenge you are to implement the methods of a stack
 * https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
 */

class Stack<T> {
  private stack: T[] = [];
  private stackLimit?: number;

  constructor(intialStack: T[] = [], limit?: number) {
    this.stack = intialStack;
    this.stackLimit = limit;
  }
  /**
   * @challenge 8.1
   * @name pop
   * @description Create the function `pop`, this function will remove and return the item at the top of the stack.
   */
  pop(): T | undefined {
    return this.stack.pop();
  }

  /**
   * @challenge 8.2
   * @name isEmpty
   * @description Create the function `isEmpty`, this function will return true if the stack is empty, otherwise false.
   */
  isEmpty(): boolean {
    return (this.stack.length ===0)
  }

  /**
   * @challenge 8.3
   * @name isFull
   * @description Create the function `isFull`, this function will return true if the stack is full, otherwise false.
   */
  isFull(): boolean {
    return (this.stack.length === this.stackLimit);
  }

  /**
   * @challenge 8.4
   * @name push
   * @description Create the function `push`, this function will add an item to the top of the stack.
   * @tip
   * - Take into consideration the stackLimit if present
   */
  push(item: T): void {
    this.stack.push(item);
  }

  /**
   * @challenge 8.5
   * @name peek
   * @description Create the function `peek`, this function will return the item at the top of the stack.
   */
  peek(): T | undefined {
    return this.stack[this.stack.length];
  }

  /**
   * @challenge 8.6
   * @name peekAt
   * @description Create the function `peekAt`, this function will return the item at the specified index of the stack.
   */
  peekAt(idx: number): T | undefined {
    return this.stack[idx];
  }

  /**
   * @challenge 8.7
   * @name drain
   * @description Create the function `drain`, this function will clear the stack.
   */
  drain(): void {
    this.stack=[];
  }
}

function main() {
  /**
   * Main function gets executed on `yarn stack` or `npm run stack`
   */
}

main();
