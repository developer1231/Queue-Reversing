Array.prototype.enqueue = function(elem) {
  return this.push(elem);
};

Array.prototype.dequeue = function() {
  return this.shift();
};

function reverseQueue(Q1, Q2) {
     while(!Q2.length == 0){
  for (let i = 0; i < Q2.length - 1; i++){
  Q2.enqueue(Q2.dequeue());
  }
  Q1.enqueue(Q2.dequeue());
  }
 
  return Q1;
}

let queue1 = [];
let queue2 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(reverseQueue(queue1, queue2));  
