/**
 * Created by https://github.com/maynagashev on 06.12.2016.
 */
/*
 # Task

 Use Array#reduce to implement a simple version of Array#map.

 ## Expected Output

 A function map that applies a function to each item in an array and collects the results in a new Array.


 var nums = [1,2,3,4,5]

 // `map` is your exported function
 var output = map(nums, function double(item) {
 return item * 2
 })

 console.log(output) // => [2,4,6,8,10]

 ## Arguments

 * input: an arbitrary Array of any type.
 * operation: an arbitrary Function which can be applied to items in `input`.

 ## Hints

 * No need to implement the optional `thisArg` argument of `Array.prototype.map`, bonus points if you do!
 */

module.exports = function arrayMap(arr, fn) {
    var reduce_callback = function(acc, cur, ind, src_arr){
        acc.push(fn(cur, ind, src_arr));
        return acc;
    };
    return arr.reduce(reduce_callback, []);
}

/*
official solution
 module.exports = function arrayMap(arr, fn, thisArg) {
 return arr.reduce(function(acc, item, index, arr) {
 acc.push(fn.call(thisArg, item, index, arr))
 return acc
 }, [])
 }
 */