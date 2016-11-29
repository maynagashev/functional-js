/**
 * Solution created by https://github.com/maynagashev on 27.11.2016.
 */
/*

# Task

Implement Array#reduce using recursion.

    To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. You don't need to implement this functionality, it will be supplied to your reduce implementation.

For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.

## Arguments

* arr: An Array to reduce over
* fn: Function to use as the reduction step. Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over.
* init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied).

## Example

// Your reduce function should behave the same as a
// regular Array#reduce, but it will take the array
// to operate on as the first argument:

reduce([1,2,3], function(prev, curr, index, arr) {
    return prev + curr
}, 0)
// => 6

## Conditions

* Do not use any for/while loops.
* Do not use any Array methods like Array#map or Array#reduce.
*
* A recursive function is a function which calls itself. For example, this recursive function will take an array of words, and return an array of those words, uppercased.

 function toUpperArray(items) {
 if (!items.length) return []             // end condition
 var head = items[0]                      // item to operate on
 head = head.toUpperCase()                // perform action
 var tail = items.slice(1)                // next
 return [head].concat(toUpperArray(tail)) // recursive step
 }

 toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']

 The point of this exercise is to familiarise yourself with recursion by implementing a familiar interface using a recursive function.
*
* */

function reduce(arr, fn, initial) {
    
    function reduceInner(prev, index) {
        if (index>=arr.length) return prev;
        var curr = fn(prev, arr[index], index, arr);
        return reduceInner(curr, ++index);
    }
    return reduceInner(initial, 0);
}

module.exports = reduce