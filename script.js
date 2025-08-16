// class Solution {
//   constructor () {
//     this.stack = []
//   }
//   print () {
//     while (this.stack.length > 0 ) {
//       console.log (this.stack.pop())
//     }
//   }
//   push (val) {
//     this.stack.push(val)
//   }
// }

// const obj = new Solution ();
// obj.print ()
// obj.push(1)
// obj.push(2)
// obj.print()

let stack = [];

const push = (val) => {
  stack.push(val);
};
const pop = () => {
  return stack.pop();
};
const print = () => {
  for (let i = stack.length - 1; i >= 0; i--) {
    console.log(stack[i]);
  }
}

push(1);
push(2);
print();
pop();
console.log ("after one pop ")
print ()
