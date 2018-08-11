/*
A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.

Implement a method to count how many possible ways the child can run up the stairs.


*** Approach this from the top down, what is the very last hop the child made?
*** If we knew the # of paths to each of the steps before step 100,
    could we compute the number of steps to 100?
*/

const tripleStep = function(n) {
  let ways = 0;
  let recurse = function(num) {
    if (num === 0) {
      ways++;
    } else if (num > 0) {
      recurse(num - 1);
      recurse(num - 2);
      recurse(num - 3);
    }
  }
  recurse(n);
  return ways;
}

console.log(tripleStep(1));
console.log(tripleStep(5));
console.log(tripleStep(15));


/*
notes:
- sort of like rock paper scissors
- find all solutions with num-1...then num-2... then num-3

*/


// memoize way!!

const countWays = function(n, memo = new Array(n)) {
  // let memo = memo || new Array(n);
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else if (memo[n] > -1) {
    return memo[n];
  }

  memo[n] = countWays(n-1, memo) + countWays(n-2, memo) + countWays(n-3, memo);
  return memo[n];

}


console.log(countWays(1)); // 1
console.log(countWays(5)); // 13
console.log(countWays(15)); // 5768